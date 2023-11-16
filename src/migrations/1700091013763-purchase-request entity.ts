import { MigrationInterface, QueryRunner } from "typeorm";

export class PurchaseRequestEntity1700091013763 implements MigrationInterface {
    name = 'PurchaseRequestEntity1700091013763'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "purchase_request" ("purchaseRequestId" SERIAL NOT NULL, "purchaseRequestDate" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_84e247a15c82f13eeac7ebfbb36" PRIMARY KEY ("purchaseRequestId"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "purchase_request"`);
    }

}
