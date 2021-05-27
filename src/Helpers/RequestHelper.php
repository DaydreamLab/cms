<?php

namespace DaydreamLab\Cms\Helpers;

class RequestHelper
{
    public static function handleParams($inputParams): array
    {
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

        $seo = [];
        if(isset($inputParams['seo'])) {
            $inputSeos = $inputParams['seo'] ;
            $inputSeos = is_array($inputSeos) ? $inputSeos: [];
            foreach ($inputSeos as $inputSeo) {
                $temp = [];
                if (isset($inputSeo['type'])
                    && in_array($inputSeo['type'], ['Google Analytics', 'Facebook Pixel', 'Cloudflare Web Analytics'])
                ) {
                    $temp['type'] = $inputSeo['type'];
                    $temp['code'] = isset($inputSeo['code']) ? $inputSeo['code'] : '';
                    $seo[] = $temp;
                }
            }
        }

        return [
            'meta'  => $meta,
            'seo'   => $seo
        ];
    }
}
