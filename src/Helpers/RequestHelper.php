<?php

namespace DaydreamLab\Cms\Helpers;

use DaydreamLab\User\Models\Asset\Asset;
use DaydreamLab\User\Models\Asset\AssetGroup;

class RequestHelper
{
    public static function handleParams($inputParams): array
    {
        $params = $inputParams;
        $meta = [];
        if (isset($inputParams['meta'])) {
            $inputMeta = $inputParams['meta'];
            $meta['title'] = isset($inputMeta['title']) ? $inputMeta['title'] : '';
            $meta['keywords'] = isset($inputMeta['keywords']) ? $inputMeta['keywords'] : '';
            $meta['description'] = isset($inputMeta['description']) ? $inputMeta['description'] : '';
        } else {
            $meta['title'] = '';
            $meta['keywords'] = '';
            $meta['description'] = '';
        }
        $params['meta'] = $meta;

        $seo = [];
        if (isset($inputParams['seo'])) {
            $inputSeos = $inputParams['seo'] ;
            $inputSeos = is_array($inputSeos) ? $inputSeos : [];
            foreach ($inputSeos as $inputSeo) {
                $temp = [];
                if (
                    isset($inputSeo['type'])
                    && in_array($inputSeo['type'], ['Google Analytics', 'Facebook Pixel', 'Cloudflare Web Analytics'])
                ) {
                    $temp['type'] = $inputSeo['type'];
                    $temp['code'] = isset($inputSeo['code']) ? $inputSeo['code'] : '';
                    $seo[] = $temp;
                } else {
                    $seo[] = $inputSeo;
                }
            }
        }
        $params['seo'] = $seo;

        return $params;
    }


    public static function isBrandAdminPage($pageGroupId, $pageId, $modelName)
    {
        $assetGroup = AssetGroup::where('id', $pageGroupId)->first();
        $asset = Asset::where('id', $pageId)->first();
        if (
            ($assetGroup && $assetGroup->title == 'COM_BRANDS_TITLE') &&
            ($asset && $asset->title == 'COM_BRANDS_MANAGER_TITLE') &&
            ($modelName != 'Brand')
        ) {
            return true;
        }
        return false;
    }


    public static function brandAdminPageAuthorize($apis, $apiMethod, $modelName, $id = null)
    {
        if (strpos($apiMethod, 'store') === 0) {
            $apiMethod = $id
                ? str_replace('store', 'edit', $apiMethod)
                : str_replace('store', 'add', $apiMethod);
        }

        return $apis->filter(function ($api) use ($apiMethod) {
            return $api->method == $apiMethod;
        })->count();
    }
}
