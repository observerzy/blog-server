import { getManager } from "typeorm";
import Article from "../entity/article";

export type PaginationBean = {
    total: number;
    offset: number;
    limit: number;
};

class ArticleService {
    async queryArticleList(
        pagination: PaginationBean,
        query?: Record<string, any>
    ) {
        const { title } = query || {};
        const articleRepository = getManager().getRepository(Article);
        let articleList: any;
        let total: number;
        const articleBuilder = articleRepository.createQueryBuilder("article");
        try {
            articleList = await articleBuilder
                .offset(pagination.offset)
                .limit(pagination.limit)
                .orderBy("article.time", "DESC")
                .where("article.title like :title", {
                    title: "%" + (title || "") + "%",
                })
                .getMany();
            total = await articleBuilder
                .where("article.title like :title", {
                    title: "%" + (title || "") + "%",
                })
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
