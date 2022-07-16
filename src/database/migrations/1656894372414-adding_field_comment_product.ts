import { MigrationInterface, QueryRunner } from "typeorm";

export class addingFieldCommentProduct1656894372414 implements MigrationInterface {
    name = 'addingFieldCommentProduct1656894372414'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ADD "comments" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "comments"`);
    }

}
