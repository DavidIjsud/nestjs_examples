import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CustomerEntity } from "./customer.entity";


@Entity()
export class UserEntity {
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

    @OneToOne(() => CustomerEntity, customer => customer.user)
    @JoinColumn()
    customer: CustomerEntity;
}