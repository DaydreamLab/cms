export default [
    {
        name: "取得所有分類列表",
        method: "list",
        path: "/admin/category/search",
        type: "post"
    },
    {
        name: "取得所有分類列表(樹狀清單)",
        method: "listOption",
        path: "/admin/category/treeList",
        type: "get"
    },
    {
        name: "取得單一分類資訊",
        method: "get",
        path: "/admin/category/*",
        type: "get"
    },
    {
        name: "新增/修改單一分類",
        method: "save",
        path: "/admin/category/store",
        type: "post"
    },
    {
        name: "修改單一分類排序",
        method: "ordering",
        path: "/admin/category/ordering",
        type: "post"
    },
    {
        name: "刪除一至多個分類",
        method: "delete",
        path: "/admin/category/remove",
        type: "post"
    },
    {
        name: "修改一至多個分類發布狀態",
        method: "updateState",
        path: "/admin/category/state",
        type: "post"
    },
    {
        name: "修改一至多個分類回存狀態",
        method: "checkout",
        path: "/admin/category/checkout",
        type: "post"
    }
];
