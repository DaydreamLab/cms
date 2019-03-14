export default [
    {
        name: "取得所有角色列表",
        method: "list",
        path: "/admin/role/search",
        type: "post"
    },
    {
        name: "取得所有角色列表(樹狀結構)",
        method: "listTree",
        path: "/admin/role/tree",
        type: "get"
    },
    {
        name: "取得單一角色資訊",
        method: "get",
        path: "/admin/role/*",
        type: "get"
    },
    {
        name: "新增/修改單一角色",
        method: "save",
        path: "/admin/role/store",
        type: "post"
    },
    {
        name: "刪除一至多個角色",
        method: "delete",
        path: "/admin/role/remove",
        type: "post"
    },
    {
        name: "修改一至多個角色發布狀態",
        method: "updateState",
        path: "/admin/role/state",
        type: "post"
    },
    {
        name: "取得單一角色可走訪頁面列表(樹狀結構)",
        method: "pages",
        path: "/admin/role/*/page",
        type: "get"
    },
    {
        name: "取得單一角色資源權限(id 陣列)",
        method: "assets",
        path: "/admin/role/*/assetids",
        type: "get"
    },
    {
        name: "修改單一角色資源權限",
        method: "grantAssets",
        path: "/admin/role/asset/map/store",
        type: "get"
    },
    {
        name: "取得單一角色可走訪頁面對應的接口列表(樹狀結構)",
        method: "actions",
        path: "/admin/role/*/action",
        type: "get"
    },
    {
        name: "取得單一角色接口權限(id 陣列)",
        method: "apis",
        path: "/admin/role/*/apiids",
        type: "get"
    },
    {
        name: "修改單一角色接口權限",
        method: "grantAPIs",
        path: "/admin/role/api/map/store",
        type: "get"
    }
];
