<?php

namespace DaydreamLab\Cms\Helpers;

class SortHelper
{
    public static function brandTitleSort($str1, $str2, $length)
    {
        $chars1 = substr($str1, 0, $length);
        $chars2 = substr($str2, 0, $length);
        if ($length === 1) {
            $chars1Upper = strtoupper($chars1);
            $chars2Upper = strtoupper($chars2);
            if ($chars1Upper !== $chars2Upper) {
                return strcmp($chars1Upper, $chars2Upper);
            }

            if ((ctype_upper($chars1) && ctype_upper($chars2)) || (ctype_lower($chars1) && ctype_lower($chars2))) {
                return self::brandTitleSort($str1, $str2, $length + 1);
            }

            return ctype_upper($chars1) ? -1 : 1 ;
        } else {
            $char1Last = substr($chars1, -1);
            $char2Last = substr($chars2, -1);

            $chars1Upper = strtoupper($char1Last);
            $chars2Upper = strtoupper($char2Last);
            if ($chars1Upper !== $chars2Upper) {
                return $chars1Upper > $chars2Upper ? 1 : -1;
            }

            if (
                (ctype_upper($char1Last) && ctype_upper($char2Last))
                || (ctype_lower($char1Last) && ctype_lower($char2Last))
            ) {
                return self::brandTitleSort($str1, $str2, $length + 1);
            }

            return ctype_upper($char1Last) ? 1 : -1;
        }
    }
}
