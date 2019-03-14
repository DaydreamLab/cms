export default [
    {
        name: "取得所有標籤列表",
        method: "list",
        path: "/admin/tag/search",
        type: "post"
    },
    {
        name: "取得單一標籤資訊",
        method: "get",
        path: "/admin/tag/*",
        type: "get"
    },
    {
        name: "新增/修改單一標籤",
        method: "save",
        path: "/admin/tag/store",
        type: "post"
    },
    {
        name: "修改單一標籤排序",
        method: "ordering",
        path: "/admin/tag/ordering",
        type: "post"
    },
    {
        name: "刪除一至多個標籤",
        method: "delete",
        path: "/admin/tag/remove",
        type: "post"
    },
    {
        name: "修改一至多個標籤發布狀態",
        method: "updateState",
        path: "/admin/tag/state",
        type: "post"
    },
    {
        name: "修改一至多個標籤回存狀態",
        method: "checkout",
        path: "/admin/tag/checkout",
        type: "post"
    }
];
