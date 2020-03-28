import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
class User {
    @PrimaryGeneratedColumn()
    userId: number;
    @Column({ type: "varchar", length: 50 })
    username: string;
    @Column({ type: "varchar", length: 255 })
    password: string;
}

export default User;
