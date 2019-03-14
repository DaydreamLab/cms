export default function formatRoutes(routers) {
    //简单检查是否是可以处理的数据
    if (!(routers instanceof Array)) {
        return false;
    }
    //处理后的容器
    let fmRouters = [];
    routers.forEach(router => {
        // 取得 router 內變數
        let {
            path,
            full_path, // 要注意，以 / 开头的嵌套路径会被当作根路径。 这让你充分的使用嵌套组件而无须设置嵌套的路径。
            component,
            title,
            redirect,
            children,
            icon,
            showNav,
            type,
            id
        } = router;

        component = component ? component : "layout";
        //如果有子组件，递归处理
        if (children && children instanceof Array) {
            children = formatRoutes(children);
        }
        let fmRouter = {
            path: full_path || path,
            component(resolve) {
                //拼出相对路径，由于component无法识别变量
                //利用Webpack 的 Code-Splitting 功能
                if (component === "layout") {
                    require(["layout/index"], resolve);
                } else {
                    require(["pages/" + component], resolve);
                }
            },
            name: title,
            children,
            meta: {
                icon: icon,
                showNav: showNav,
                type: type,
                id: id
            }
        };
        if (redirect) {
            fmRouter.redirect = redirect;
        }
        fmRouters.push(fmRouter);
    });
    return fmRouters;
}
