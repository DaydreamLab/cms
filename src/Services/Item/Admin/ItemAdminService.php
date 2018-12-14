<?php

namespace DaydreamLab\Cms\Services\Item\Admin;

use DaydreamLab\Cms\Models\Cms\CmsCronJob;
use DaydreamLab\Cms\Repositories\Item\Admin\ItemAdminRepository;
use DaydreamLab\Cms\Services\Category\Admin\CategoryAdminService;
use DaydreamLab\Cms\Services\Tag\Admin\TagAdminService;
use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\JJAJ\Helpers\InputHelper;
use DaydreamLab\Cms\Services\Item\ItemService;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;

class ItemAdminService extends ItemService
{
    protected $type = 'ItemAdmin';

    protected $tagAdminService;

    protected $itemTagMapAdminService;

    protected $cmsCronJobModel;

    protected $categoryAdminService;

    protected $search_keys = ['title', 'introtext', 'description'];

    public function __construct(ItemAdminRepository $repo,
                                TagAdminService $tagAdminService,
                                ItemTagMapAdminService $itemTagMapAdminService,
                                CategoryAdminService $categoryAdminService)
    {
        $this->tagAdminService          = $tagAdminService;
        $this->itemTagMapAdminService   = $itemTagMapAdminService;
        $this->cmsCronJobModel          = new CmsCronJob();
        $this->categoryAdminService     = $categoryAdminService;
        parent::__construct($repo);
    }


    public function findOtherFeatured($id = null)
    {
        return $this->repo->findOtherFeatured($id);
    }


    public function featuredOrdering($other)
    {
        return $this->repo->featuredOrdering($other);
    }


    public function getItem($id)
    {
        $item = parent::getItem($id);

        if (!Helper::hasPermission($item->viewlevels, $this->viewlevels))
        {
            $this->status   = Str::upper(Str::snake($this->type.'InsufficientPermission'));
            $this->response = null;
            return false;
        }


        if ($item->locked_by && $item->locked_by != $this->user->id)
        {
            $this->status   = Str::upper(Str::snake($this->type.'IsLocked'));
            $this->response = (object) $this->user->only('email', 'full_name', 'nickname');
            return false;
        }

        $item->locked_by = $this->user->id;
        $item->locked_at = now();

        return $item->save();
    }


    public function search(Collection $input)
    {
        if (!InputHelper::null($input, 'category_id'))
        {
            $category_ids = $this->categoryAdminService->findSubTreeIds($input->category_id);
            $input->forget('category_id');
            $input->put('category_id', $category_ids);
        }

        return parent::search($input);
    }

    public function state(Collection $input)
    {
        return parent::state($input);
    }

    public function store(Collection $input)
    {
        if (InputHelper::null($input, 'alias'))
        {
            $input->forget('alias');
            $input->put('alias', Str::lower(now()->format('Y-m-d-H-i-s'). '-'.Str::random(4)));
        }

        if (InputHelper::null($input, 'category_id'))
        {
            $input->forget('category_id');
            $input->put('category_id', 1);
        }

        if (InputHelper::null($input, 'hits'))
        {
            $input->forget('hits');
            $input->put('hits', 0);
        }

        if (InputHelper::null($input, 'access'))
        {
            $input->forget('access');
            $input->put('access', 1);
        }

        // featured = 0 or null
        if (InputHelper::null($input, 'featured'))
        {
            $input->forget('featured');
        }
        else // featured = 1
        {
            $input->forget('featured_ordering');
            $input->put('featured_ordering', 1);

            // 編輯文章
            if (InputHelper::null($input, 'id'))
            {
                $other = $this->findOtherFeatured();
            }
            else
            {
                $other = $this->findOtherFeatured($input->id);
            }

            $this->featuredOrdering($other, 'add');
        }


        $desc = $input->description;
        $input->forget('description');
        $input->put('description', nl2br($desc));

        if (InputHelper::null($input, 'publish_up'))
        {
            $input->forget('publish_up');
            $input->put('publish_up', now());
            $input->publish_up = now()->toDateTimeString();
        }


        if (InputHelper::null($input, 'language'))
        {
            $input->forget('language');
            $input->put('language', '*');
        }
        $tags = $input->get('tags') ? $input->get('tags') : [];
        $input->forget('tags');


        if (InputHelper::null($input, 'extrafields'))
        {
            $input->forget('extrafields');
            $input->put('extrafields', []);
        }

        $result    =  parent::store($input);

        if (gettype($result) == 'boolean')
        {
            if ($result === true)
            {
                $item = $this->find($input->id);
            }
            else
            {
                // Something error alias重複
                return $this->response;
            }
        }
        else
        {
            $item = $this->find($result->id);
        }


        if ($input->publish_up > now())
        {
            $this->cmsCronJobModel->create([
                'table'     => 'items',
                'item_id'   => $item->id,
                'type'      => 'up',
                'time'      => $item->publish_up
            ]);
        }

        if (!InputHelper::null($input, 'publish_down'))
        {
            if ($input->publish_down > now())
            {
                $this->cmsCronJobModel->create([
                    'table'     => 'items',
                    'item_id'   => $item->id,
                    'type'      => 'down',
                    'time'      => $item->publish_down
                ]);
            }
        }

        $this->storeTags($tags, $item->id);


        return $item;
    }



    public function storeTags($tags = [], $item_id)
    {
        $tag_ids = [];
        foreach ($tags  as $tag)
        {
            if (array_key_exists('id', $tag) && $tag['id'] != '')
            {
                //$tag_ids[] = $tag['id'];
            }
            else if(array_key_exists('title', $tag))
            {
                $db_tag = $this->tagAdminService->findBy('title', '=', $tag['title'])->first();
                if (!$db_tag)
                {
                    $tag = $this->tagAdminService->store(Helper::collect($tag));
                }
                else
                {
                    $tag = $db_tag;
                }
            }
            else
            {
                $tag = $this->tagAdminService->store(Helper::collect($tag));
            }

            $tag_ids[] = $tag['id'];
        }

        if(count($tag_ids))
        {
            $this->itemTagMapAdminService->storeKeysMap(Helper::collect([
                'item_id'   => $item_id,
                'tag_ids'   => $tag_ids,
            ]));
        }
    }
}
