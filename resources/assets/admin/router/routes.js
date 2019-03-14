export default [
    {
        path: "/login",
        component: resolve => require(["pages/login"], resolve),
        name: "LOGIN",
        meta: {
            showNav: 0
        }
    },
    {
        path: "/error",
        component: resolve => require(["pages/error/"], resolve),
        name: "ERROR",
        meta: {
            showNav: 0
        },
        children: [
            {
                path: "401",
                component: resolve => require(["pages/error/401"], resolve),
                name: "401",
                meta: {
                    showNav: 0
                }
            },
            {
                path: "404",
                component: resolve => require(["pages/error/404"], resolve),
                name: "404",
                meta: {
                    showNav: 0
                }
            },
            {
                path: "500",
                component: resolve => require(["pages/error/500"], resolve),
                name: "500",
                meta: {
                    showNav: 0
                }
            }
        ]
    }
];
