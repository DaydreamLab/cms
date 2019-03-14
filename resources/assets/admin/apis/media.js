export default [
    {
        name: "取得所有資料夾列表",
        method: "listFolder",
        path: "/admin/media/folder/all",
        type: "get"
    },
    {
        name: "新增單一資料夾",
        method: "createFolder",
        path: "/admin/media/folder/create",
        type: "post"
    },
    {
        name: "取得單一資料夾內檔案列表",
        method: "listFile",
        path: "/admin/media/folder/items",
        type: "post"
    },
    {
        name: "上傳一至多個檔案",
        method: "uploadFile",
        path: "/admin/media/upload",
        type: "post"
    },
    {
        name: "刪除一至多個檔案或資料夾",
        method: "delete",
        path: "/admin/media/remove",
        type: "post"
    },
    {
        name: "移動單一資料夾或檔案",
        method: "move",
        path: "/admin/media/move",
        type: "post"
    }
];
