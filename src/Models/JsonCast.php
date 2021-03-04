<?php


namespace DaydreamLab\Cms\Models;


use Illuminate\Contracts\Database\Eloquent\CastsAttributes;

class JsonCast implements CastsAttributes
{
    public function get($model, $key, $value, $attributes)
    {
        if ($this->isJson($value)) {
            return json_decode($value, 1);
        }
        return $value;
    }

    public function set($model, string $key, $value, array $attributes)
    {
        if ('key' === 'image' && is_array($value)) {
            return json_encode($value);
        }

        if (is_string($value)) {
            return $valuel;
        }

        return json_encode($value);

    }

    public function isJson($value)
    {
        json_decode($value, 1);

        return json_last_error() === JSON_ERROR_NONE;
    }
}
