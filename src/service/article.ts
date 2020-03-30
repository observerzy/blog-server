import { getManager } from "typeorm";
import Article from "../entity/article";

class ArticleService {
    async queryArticleList() {
        const articleRepository = getManager().getRepository(Article);
        return await articleRepository.find();
    }
    async saveArticle(params: Article) {
        const articleRepository = getManager().getRepository(Article);
        return await articleRepository.save(params);
    }
}

export default new ArticleService();
