import { Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./user.entity";

@Entity()
export class CustomerEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ type: "varchar", length: 255 , nullable: false })
    name: string;
    @Column({ type: "varchar", length: 255 , nullable: false })
    email: string;
    @Column({ type: "varchar", length: 255 , nullable: false })
    password: string;
    @CreateDateColumn({ type: "timestamptz", default: () => "CURRENT_TIMESTAMP" })
    created_at: Date;
    @CreateDateColumn({ type: "timestamptz", default: () => "CURRENT_TIMESTAMP" })
    updated_at: Date;
    
    @OneToOne(() => UserEntity, user => user.customer)
    user: UserEntity;
}