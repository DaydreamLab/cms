export default [
    {
        name: "取得所有資源列表",
        method: "list",
        path: "/admin/asset/search",
        type: "post"
    },
    {
        name: "取得所有資源列表(樹狀清單)",
        method: "listOption",
        path: "/admin/asset/treeList",
        type: "get"
    },
    {
        name: "新增/修改單一資源",
        method: "save",
        path: "/admin/asset/store",
        type: "post"
    },
    {
        name: "刪除一至多個資源",
        method: "delete",
        path: "/admin/asset/remove",
        type: "post"
    },
    {
        name: "取得單一資源",
        method: "get",
        path: "/admin/asset/*",
        type: "get"
    },
    {
        name: "修改單一資源排序",
        method: "ordering",
        path: "/admin/asset/ordering",
        type: "post"
    },
    {
        name: "修改一至多個資源啟用狀態",
        method: "updateState",
        path: "/admin/asset/state",
        type: "post"
    },
    {
        name: "取得單一資源所屬的群組",
        method: "group",
        path: "/admin/asset/*/groups",
        type: "get"
    },
    {
        name: "修改單一資源所屬的群組",
        method: "grantGroup",
        path: "/admin/asset/group/map/store",
        type: "post"
    },
    {
        name: "取得單一資源接口資訊",
        method: "apis",
        path: "/admin/asset/*/apis",
        type: "get"
    },
    {
        name: "修改單一資源接口資訊",
        method: "grantAPIs",
        path: "/admin/asset/api/map/store",
        type: "post"
    },
    {
        name: "取得所有資源群組列表",
        method: "listGroup",
        path: "/admin/asset/group/search",
        type: "post"
    },
    {
        name: "刪除一至多個資源群組",
        method: "deleteGroup",
        path: "/admin/asset/group/remove",
        type: "post"
    },
    {
        name: "新增/修改單一資源群組",
        method: "saveGroup",
        path: "/admin/asset/group/store",
        type: "post"
    },
    {
        name: "取得單一資源群組",
        method: "getGroup",
        path: "/admin/asset/group/*",
        type: "get"
    },
    {
        name: "修改一至多個資源群組發布狀態",
        method: "updateGroupState",
        path: "/admin/asset/group/state",
        type: "post"
    }
];
