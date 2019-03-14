export default [
    {
        name: "登入",
        method: "login",
        path: "/user/login",
        type: "post"
    },
    {
        name: "登出",
        method: "logout",
        path: "/user/logout",
        type: "get"
    },
    {
        name: "取得會員可走訪頁面列表",
        method: "getRoutes",
        path: "/admin/user/page",
        type: "get"
    },
    {
        name: "取得會員可用的接口列表",
        method: "getAPIs",
        path: "/admin/user/apis",
        type: "get"
    },
    {
        name: "取得所有會員列表",
        method: "list",
        path: "/admin/user/search",
        type: "post"
    },
    {
        name: "取得單一會員資訊",
        method: "get",
        path: "/admin/user/*",
        type: "get"
    },
    {
        name: "新增/修改單一會員",
        method: "save",
        path: "/admin/user/store",
        type: "post"
    },
    {
        name: "刪除一至多個會員",
        method: "delete",
        path: "/admin/user/remove",
        type: "post"
    },
    {
        name: "取得單一會員所屬角色",
        method: "grant",
        path: "/admin/user/*/grant",
        type: "get"
    },
    {
        name: "修改單一會員所屬角色",
        method: "grantUpdate",
        path: "/admin/user/role/map/store",
        type: "post"
    },
    {
        name: "取得所有會員群組列表",
        method: "listGroup",
        path: "/admin/user/group/search",
        type: "post"
    },
    {
        name: "取得所有會員群組列表(樹狀結構)",
        method: "listTreeGroup",
        path: "/admin/user/group/tree",
        type: "get"
    },
    {
        name: "取得所有會員群組列表(樹狀清單)",
        method: "listOptionGroup",
        path: "/admin/user/group/treeList",
        type: "get"
    },
    {
        name: "刪除一至多個會員群組",
        method: "deleteGroup",
        path: "/admin/user/group/remove",
        type: "post"
    },
    {
        name: "新增/修改單一會員群組",
        method: "saveGroup",
        path: "/admin/user/group/store",
        type: "post"
    },
    {
        name: "取得單一會員群組",
        method: "getGroup",
        path: "/admin/user/group/*",
        type: "get"
    },
    {
        name: "修改單一會員排序",
        method: "orderingGroup",
        path: "/admin/user/group/ordering",
        type: "post"
    }
];
