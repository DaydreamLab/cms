export default [
    {
        name: "取得所有語言列表",
        method: "list",
        path: "/admin/language/search",
        type: "post"
    },
    {
        name: "取得所有語言列表(下拉選單用)",
        method: "listOption",
        path: "/admin/language/list",
        type: "get"
    },
    {
        name: "新增/修改單一語言",
        method: "save",
        path: "/admin/language/store",
        type: "post"
    },
    {
        name: "刪除一至多個語言",
        method: "delete",
        path: "/admin/language/remove",
        type: "post"
    },
    {
        name: "修改一至多個語言發布狀態",
        method: "updateState",
        path: "/admin/language/state",
        type: "post"
    },
    {
        name: "取得單一語言",
        method: "get",
        path: "/admin/language/*",
        type: "get"
    }
];
