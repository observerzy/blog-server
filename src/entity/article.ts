import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
//声明Article类时，其类型也被声明
class Article {
    @PrimaryGeneratedColumn()
    articleId?: number;
    @Column({ type: "varchar", length: 64 })
    title: string;
    @Column({ type: "varchar", length: 1024 })
    content: string;
    @Column({ type: "varchar", length: 128 })
    time: string;
    @Column({ type: "varchar", length: 64 })
    belong: string;
    @Column({ type: "varchar", length: 64 })
    userId: string;
    @Column({ type: "varchar", length: 64 })
    userName: string;
}

export default Article;
