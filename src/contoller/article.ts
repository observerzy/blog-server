import { Context } from "koa";
import { makeRespData } from "../common/common";
import service from "../service/article";

//保存类
class ArticleController {
    async queryArticleList(ctx: Context) {
        const articleList = await service.queryArticleList();
        ctx.body = makeRespData({ retCode: "0" }, articleList);
    }
    async saveArticle(ctx: Context) {
        console.log(ctx.request.body);
        const params = {
            title: "文章一",
            content: "内容一",
            belong: "node.js",
            userId: "10001",
            userName: "刘子艺",
            time: "2020-03-30 12:11:11"
        };
        const saveArticle = await service.saveArticle(params);
        ctx.body = makeRespData(saveArticle);
    }
}

export default new ArticleController();
