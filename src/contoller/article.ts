import { Context } from "koa";
import { makeRespData } from "../common/common";
import service from "../service/article";
import moment from "moment";

//保存类
class ArticleController {
    async queryArticleList(ctx: Context) {
        const articleList = await service.queryArticleList();
        ctx.body = makeRespData({ retCode: "0" }, articleList);
    }
    async saveArticle(ctx: Context) {
        const {
            title = "",
            content = "",
            belong = "",
            userId = "",
            userName = ""
        } = ctx.request.body;
        const params = {
            title,
            content,
            belong,
            userId,
            userName,
            time: moment(new Date()).format("YYYY-MM-DD HH:mm:ss")
        };
        let saveArticle = {};
        try {
            await service.saveArticle(params);
            saveArticle = { errorMsg: "保存成功" };
        } catch (error) {
            saveArticle = { errorMsg: "保存失败" };
        }
        ctx.body = makeRespData(saveArticle);
    }
}

export default new ArticleController();
