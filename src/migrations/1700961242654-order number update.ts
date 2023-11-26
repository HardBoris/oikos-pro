import { MigrationInterface, QueryRunner } from "typeorm";

export class OrderNumberUpdate1700961242654 implements MigrationInterface {
    name = 'OrderNumberUpdate1700961242654'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_66f913b9f4e9d0925924a19e3e"`);
        await queryRunner.query(`ALTER TABLE "orders" RENAME COLUMN "order" TO "orderNumber"`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_e715273cd6c4be884ad1160a8a" ON "orders" ("type", "orderNumber") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_e715273cd6c4be884ad1160a8a"`);
        await queryRunner.query(`ALTER TABLE "orders" RENAME COLUMN "orderNumber" TO "order"`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_66f913b9f4e9d0925924a19e3e" ON "orders" ("order", "type") `);
    }

}
