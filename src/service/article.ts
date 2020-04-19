import { getManager } from "typeorm";
import Article from "../entity/article";

export type PaginationBean = {
    total: number;
    offset: number;
    limit: number;
};

class ArticleService {
    async queryArticleList(pagination: PaginationBean) {
        const articleRepository = getManager().getRepository(Article);
        let articleList: any;
        let total: number;
        try {
            articleList = await articleRepository
                .createQueryBuilder("article")
                .offset(pagination.offset)
                .limit(pagination.limit)
                .orderBy("article.time", "DESC")
                .getMany();
            total = await articleRepository
                .createQueryBuilder("article")
                .getCount();
        } catch (error) {
            console.log("queryArticleList err:", error);
        }
        return {
            articleList,
            total,
        };
    }
    async saveArticle(params: Article) {
        const articleRepository = getManager().getRepository(Article);
        return await articleRepository.save(params);
    }
}

export default new ArticleService();
