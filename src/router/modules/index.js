const businessRoutes = [
  {
    path: "/system",
    name: "SystemManage",
    redirect: "/system/user",
    component: () => import("@/layouts/index"),
    meta: {
      title: "系统管理",
    },
    children: [
      {
        path: "/system/user",
        name: "UserManage",
        component: () => import("@/views/systemManage/userManage"),
        meta: {
          title: "用户管理",
        },
      },
      {
        path: "/system/permission",
        name: "PermissionManage",
        component: () => import("@/views/systemManage/permissionManage"),
        meta: {
          title: "权限管理",
        },
      },
      {
        path: "/editor",
        name: "Editor",
        component: () => import("@/views/editor/editor"),
        meta: {
          title: "编辑器",
          breadcrumb: false,
        },
      },
      {
        path: "/chart",
        name: "Chart",
        component: () => import("@/layouts/TransitionRouter/TransitionRouter.vue"),
        redirect: "/chart1",
        meta: {
          title: "图表",
        },
        children: [
          {
            path: "/chart1",
            name: "Chart1",
            component: () => import("@/views/chart/chart1"),
            meta: {
              title: "图表1",
            },
          },
          {
            path: "/down",
            name: "DownChart",
            component: () => import("@/views/chart/downChart"),
            meta: {
              title: "道琼斯指数",
            },
          },
          {
            path: "/profit",
            name: "Profit",
            component: () => import("@/views/chart/profit"),
            meta: {
              title: "策略收益图",
            },
          },
          {
            path: "/single-chart",
            name: "SingleChart",
            component: () => import("@/views/chart/singleChart"),
            meta: {
              title: "单张图表",
            },
          },
        ],
      },
      {
        path: "/file",
        name: "File",
        component: () => import("@/views/file/file"),
        meta: {
          title: "文件上传与下载",
          breadcrumb: false,
        },
      },
    ],
  },
];

export { businessRoutes };
