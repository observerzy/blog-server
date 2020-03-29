import { getManager } from "typeorm";
import Article from "../entity/article";

class Service {
    async queryArticleList() {
        const articleRepository = getManager().getRepository(Article);
        return await articleRepository.find();
    }
    async saveArticle(params: Article) {
        const articleRepository = getManager().getRepository(Article);
        try {
            await articleRepository.save(params);
            return { errorMsg: "保存成功" };
        } catch (error) {
            return { errorMsg: "保存失败" };
        }
    }
}

export default new Service();
