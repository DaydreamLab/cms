<?php


namespace DaydreamLab\Cms\Traits;


trait ResourceHelper
{
    public function processImage($data)
    {
        if (isset($data['image']) && $this->isJson($data['image'])) {
            $data['image'] = json_decode($data['image'], 1);
        } else if (is_string($data) && $this->isJson($data)) {
            $data = json_decode($data, 1);
        }

        return $data;
    }


    public function isJson($string)
    {
        if (is_string($string)) {
            json_decode($string);
            return json_last_error() == JSON_ERROR_NONE;
        } else {
            return false;
        }

    }
}
