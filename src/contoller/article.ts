import { Context } from "koa";
import { getManager } from "typeorm";
import { makeRespData } from "../common/common";
import Article from "../entity/article";

class ArticleController {
    async quertArticleList(ctx: Context) {
        const articleRepository = getManager().getRepository(Article);
        const articleInfo = await articleRepository.find();
        ctx.body = makeRespData(articleInfo, { retCode: "0" });
    }
}

export default new ArticleController();
