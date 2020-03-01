//import TestController from "@/contoller/test";
//报错？
import TestController from "../contoller/test";
export interface RouteItem {
    path: string;
    method: "get" | "post" | "put" | "delete";
    action: any;
}

export const AppRoutes: RouteItem[] = [
    {
        path: "/app/queryUserInfo",
        method: "post",
        action: TestController.test
    },
    {
        path: "/app/test",
        method: "get",
        action: TestController.test
    }
];
