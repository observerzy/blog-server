import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
class Article {
    @PrimaryGeneratedColumn()
    articleId: number;
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
