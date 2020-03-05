import { Context } from "koa";
import { getManager } from "typeorm";
import User from "../entity/user";
import { makeRespData } from "../common/common";

class TestController {
    async test(ctx: Context) {
        console.log("get:", ctx.query);
        console.log("post:", ctx.request.body);
        ctx.body = {
            data: "你好"
        };
    }
    // 注册
    async register(ctx: Context) {
        const { username, password } = ctx.request.body;
        const userRepository = getManager().getRepository(User);
        await userRepository.save({ username, password });
        const respBody = { message: "注册成功" };
        ctx.body = makeRespData(respBody);
    }
    // 登录
    async login(ctx: Context) {
        const { username, password } = ctx.request.body;
        const userRepository = getManager().getRepository(User);
        const targerUser = await userRepository.findOne({
            where: { username }
        });
        let res;
        if (targerUser.password === password) {
            res = { data: targerUser, message: "登录成功" };
        } else {
            res = { message: "密码错误" };
        }
        ctx.body = makeRespData(res);
    }
}

export default new TestController();
