import { Context } from "koa";

class TestController {
    async test(ctx: Context) {
        console.log("get:", ctx.query);
        console.log("post:", ctx.request.body);
        ctx.body = {
            data: "你好"
        };
    }
}

export default new TestController();
