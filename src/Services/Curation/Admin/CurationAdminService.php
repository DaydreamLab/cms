<?php

namespace DaydreamLab\Cms\Services\Curation\Admin;

use DaydreamLab\Cms\Repositories\Curation\Admin\CurationAdminRepository;
use DaydreamLab\Cms\Services\Curation\CurationService;
use DaydreamLab\JJAJ\Database\QueryCapsule;
use Illuminate\Support\Collection;

class CurationAdminService extends CurationService
{
    public function __construct(CurationAdminRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }


    public function beforeAdd(Collection &$input)
    {
        $this->cancelIsIndexCuration($id);
    }


    public function beforeModify(Collection &$input, &$item)
    {
        $this->cancelIsIndexCuration();
    }


    /**
     * 取消目前被設為首頁的策展
     */
    public function cancelIsIndexCuration($curationId = null)
    {
        $search = [
            'isIndex' => 1,
            'limit' => 0,
            'paginate' => 0
        ];
        if ($curationId) {
            $search['q'] = (new QueryCapsule())->where('id', '!=', $curationId);
        }
        $this->search(collect($search))->each(function ($curation) {
            $curation->timestamps = false;
            $curation->isIndex = 0;
            $curation->save();
        });
    }
}
