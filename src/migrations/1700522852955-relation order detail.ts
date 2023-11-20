import { MigrationInterface, QueryRunner } from "typeorm";

export class RelationOrderDetail1700522852955 implements MigrationInterface {
    name = 'RelationOrderDetail1700522852955'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "details" ADD "unitPrice" double precision DEFAULT '1'`);
        await queryRunner.query(`ALTER TABLE "details" ADD "type" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "details" ADD "purchaseOrderId" uuid`);
        await queryRunner.query(`CREATE INDEX "IDX_45989f10b97861251fabed3482" ON "details" ("type") `);
        await queryRunner.query(`ALTER TABLE "details" ADD CONSTRAINT "FK_5fd298c510543cb73f4c3a89386" FOREIGN KEY ("purchaseOrderId") REFERENCES "orders"("orderId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "details" DROP CONSTRAINT "FK_5fd298c510543cb73f4c3a89386"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_45989f10b97861251fabed3482"`);
        await queryRunner.query(`ALTER TABLE "details" DROP COLUMN "purchaseOrderId"`);
        await queryRunner.query(`ALTER TABLE "details" DROP COLUMN "type"`);
        await queryRunner.query(`ALTER TABLE "details" DROP COLUMN "unitPrice"`);
    }

}
