export default [
    {
        name: "取得所有項目列表",
        method: "list",
        path: "/admin/item/search",
        type: "post"
    },
    {
        name: "取得單一項目資訊",
        method: "get",
        path: "/admin/item/*",
        type: "get"
    },
    {
        name: "新增/修改單一項目",
        method: "save",
        path: "/admin/item/store",
        type: "post"
    },
    {
        name: "修改單一項目排序",
        method: "ordering",
        path: "/admin/item/ordering",
        type: "post"
    },
    {
        name: "刪除一至多個項目",
        method: "delete",
        path: "/admin/item/remove",
        type: "post"
    },
    {
        name: "修改一至多個項目發布狀態",
        method: "updateState",
        path: "/admin/item/state",
        type: "post"
    },
    {
        name: "修改一至多個項目精選狀態",
        method: "updateFeatured",
        path: "/admin/item/featured",
        type: "post"
    },
    {
        name: "修改一至多個項目回存狀態",
        method: "checkout",
        path: "/admin/item/checkout",
        type: "post"
    }
];
