//import UserController from "@/contoller/test";
//报错？
import UserController from "../contoller/user";
import ArticleController from "../contoller/article";
export interface RouteItem {
    path: string;
    method: "get" | "post" | "put" | "delete";
    action: any;
}

export const AppRoutes: RouteItem[] = [
    {
        path: "/api/queryUserInfo",
        method: "post",
        action: UserController.quertUserInfo,
    },
    {
        path: "/api/test",
        method: "get",
        action: UserController.test,
    },
    {
        path: "/api/v1/user/register",
        method: "post",
        action: UserController.register,
    },
    {
        path: "/api/login",
        method: "post",
        action: UserController.login,
    },
    {
        path: "/api/queryArticleList",
        method: "post",
        action: ArticleController.queryArticleList,
    },
    {
        path: "/api/saveArticle",
        method: "post",
        action: ArticleController.saveArticle,
    },
    {
        path: "/api/getArticle",
        method: "get",
        action: ArticleController.getArticle,
    },
];
