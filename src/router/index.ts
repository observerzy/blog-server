//import TestController from "@/contoller/test";
//报错？
import TestController from "../contoller/test";
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
        action: TestController.quertUserInfo,
    },
    {
        path: "/api/test",
        method: "get",
        action: TestController.test,
    },
    {
        path: "/api/register",
        method: "post",
        action: TestController.register,
    },
    {
        path: "/api/login",
        method: "post",
        action: TestController.login,
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
];
