/**
 * user
 */
import asset from "./asset";
import api from "./api";
import role from "./role";
import user from "./user";

/**
 * contents
 */
import item from "./item";
import category from "./category";
import tag from "./tag";
import language from "./language";
import media from "./media";
import setting from "./setting";
import site from "./site";
import option from "./option";

export default [
    {
        module: "asset",
        name: "資源管理",
        list: asset
    },
    {
        module: "api",
        name: "接口管理",
        list: api
    },
    {
        module: "role",
        name: "角色管理",
        list: role
    },
    {
        module: "user",
        name: "會員管理",
        list: user
    },
    {
        module: "item",
        name: "項目管理",
        list: item
    },
    {
        module: "category",
        name: "類別管理",
        list: category
    },
    {
        module: "tag",
        name: "標籤管理",
        list: tag
    },
    {
        module: "language",
        name: "語言管理",
        list: language
    },
    {
        module: "media",
        name: "媒體管理",
        list: media
    },
    {
        module: "setting",
        name: "設定管理",
        list: setting
    },
    {
        module: "site",
        name: "網站管理",
        list: site
    },
    {
        module: "option",
        name: "下拉選單管理",
        list: option
    }
];
