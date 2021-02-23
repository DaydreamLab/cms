<?php
namespace DaydreamLab\Cms\Models\Module;

use DaydreamLab\Cms\Models\Category\Category;
use DaydreamLab\Cms\Models\Item\Item;
use DaydreamLab\Cms\Models\Menu\Menu;
use DaydreamLab\Cms\Traits\Model\UserInfo;
use DaydreamLab\Cms\Traits\Model\WithAccess;
use DaydreamLab\Cms\Traits\Model\WithCategory;
use DaydreamLab\Cms\Traits\Model\WithLanguage;
use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\JJAJ\Models\BaseModel;
use DaydreamLab\JJAJ\Traits\RecordChanger;
use DaydreamLab\User\Models\Viewlevel\Viewlevel;

class Module extends BaseModel
{
    use WithAccess, WithLanguage, WithCategory, UserInfo,
        RecordChanger {
        RecordChanger::boot as traitBoot;
    }
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'modules';


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'alias',
        'category_id',
        'state',
        'description',
        'access',
        'language',
        'params',
        'locked_by',
        'locked_at',
        'created_by',
        'updated_by',
        'publish_up',
        'publish_down'
    ];


    /**
     * The attributes that should be hidden for arrays
     *
     * @var array
     */
    protected $hidden = [
        'viewlevel',
        'viewlevels'
    ];


    /**
     * The attributes that should be append for arrays
     *
     * @var array
     */
    protected $appends = [
        'creator',
        'updater',
        'locker',
        'category_title',
        'category_alias',
        'access_title',
        'language_title'
    ];


    protected $casts = [
        'params'        => 'array'
    ];


    public static function boot()
    {
        self::traitBoot();
    }


    public function getParamsAttribute($value)
    {
        $value = json_decode($value, true);

        if (array_key_exists('item_ids', $value))
        {
            $items = Item::whereIn('id', $value['item_ids'])->get()
                ->map(function ($item, $key) {
                    return (object)['id'=> $item->id, 'title'=> $item->title];
                });
            $value['item_ids'] = $items;
        }
        else if(array_key_exists('category_ids', $value))
        {
            $category_alias = $this->category->alias;
            $items = Category::whereIn('id', $value['category_ids'])->get()
                    ->map(function ($item, $key) use ($category_alias) {
                        $data = (object)['id'=> $item->id, 'tree_list_title'=> $item->tree_list_title];
                        if ($category_alias == 'search')
                        {
                            $data->alias = $item->alias;
                        }
                        return $data;
                    });
           $value['category_ids'] = $items;
        }
        else if(array_key_exists('menu_ids', $value))
        {
            $items = Menu::whereIn('id', $value['menu_ids'])->get()
                ->map(function ($item, $key) {
                    return (object)['id'=> $item->id, 'tree_list_title'=> $item->tree_list_title];
                });
            $value['menu_ids'] = $items;
        }

        return $value;
    }
}