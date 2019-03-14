export default [
    {
        name: "取得所有網站列表",
        method: "list",
        path: "/admin/site/search",
        type: "post"
    },
    {
        name: "新增/修改單一網站",
        method: "save",
        path: "/admin/site/store",
        type: "post"
    },
    {
        name: "取得單一網站",
        method: "get",
        path: "/admin/site/*",
        type: "get"
    }
];
