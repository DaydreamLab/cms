<?php

namespace DaydreamLab\Cms\Services\IotTag\Front;

use DaydreamLab\Cms\Repositories\IotTag\Front\IotTagFrontRepository;
use DaydreamLab\Cms\Services\IotTag\IotTagService;
use Illuminate\Support\Collection;

class IotTagFrontService extends IotTagService
{
    public function __construct(IotTagFrontRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }


    public function searchItems(Collection $input)
    {
        $input_tag = $input->get('tag');
        $input->forget('tag');
        $input_type = $input->get('type');
        $input->forget('type');
        $limit = $input->get('limit');
        $input->put('limit', 0);
        $page = $input->get('page');
        $input->forget('page');

        $tag = $this->repo->findBy('alias', '=', $input_tag)->first();
        $response = collect([]);

        if ( !$tag ) {
            $this->response = $this->repo->paginate($response, $limit, $page ?: 1, []);
        } else {
            if ( $input_type == null || ( is_array($input_type) && count($input_type) == 0 ) ) {
                $input_type = ['news', 'resource', 'solution'];
            }

            foreach($input_type as $t) {
                switch ($t) {
                    case 'news':
                        $response = $response->concat($tag->news);
                        break;
                    case 'resource':
                        $response = $response->concat($tag->resources);
                        break;
                    case 'solution':
                        $response = $response->concat($tag->solutions);
                        break;
                    default:
                        break;
                }
            }

            if ( $search = $input->get('search') ) {
                $searchKeys = $input->get('searchKeys');
                $response = $response->filter(function ($b) use ($search, $searchKeys) {
                    foreach ($searchKeys as $searchKey) {
                        if ( stripos($b->{$searchKey}, $search) !== false ) {
                            return true;
                        }
                    }
                    return false;
                })->values();
            }

            $response = $response->sortByDesc(function ($r) {
                return $r->publish_up;
            })->values();

            $this->response = $this->repo->paginate($response, $limit, $page ?: 1, []);
        }

        $this->status = 'searchSuccess';
        return $this->response;
    }
}
