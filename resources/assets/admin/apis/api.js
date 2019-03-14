export default [
    {
        name: "取得所有接口列表",
        method: "list",
        path: "/admin/asset/api/search",
        type: "post"
    },
    {
        name: "新增/修改單一接口",
        method: "save",
        path: "/admin/asset/api/store",
        type: "post"
    },
    {
        name: "刪除一至多個接口",
        method: "delete",
        path: "/admin/asset/api/remove",
        type: "post"
    },
    {
        name: "取得單一接口",
        method: "get",
        path: "/admin/asset/api/*",
        type: "get"
    }
];
