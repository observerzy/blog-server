import Koa from "koa";
import Router from "koa-router";
import { AppRoutes } from "./router";
import cors from "koa2-cors";
import bodyParser from "koa-bodyparser";
const app = new Koa();
const router = new Router();

//注册路由
AppRoutes.forEach(route => {
    router[route.method](route.path, route.action);
});

app.use(cors())
    .use(bodyParser())
    .use(router.routes());

app.listen(9001, () => {
    console.log("Server is running on 9001");
});
