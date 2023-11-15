import { MigrationInterface, QueryRunner } from "typeorm";

export class PurchaseRequestEntity1700082836366 implements MigrationInterface {
    name = 'PurchaseRequestEntity1700082836366'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "purchase_request" ("purchaseRequestId" SERIAL NOT NULL, "purchaseRequestDate" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_84e247a15c82f13eeac7ebfbb36" PRIMARY KEY ("purchaseRequestId"))`);
        await queryRunner.query(`CREATE TABLE "purchase_request_elements_elements" ("purchaseRequestPurchaseRequestId" integer NOT NULL, "elementsElementId" uuid NOT NULL, CONSTRAINT "PK_fdb005e2792ba6bf182801f5bcc" PRIMARY KEY ("purchaseRequestPurchaseRequestId", "elementsElementId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_8d44813a1e5d9470d41d1f718c" ON "purchase_request_elements_elements" ("purchaseRequestPurchaseRequestId") `);
        await queryRunner.query(`CREATE INDEX "IDX_3ea5ca286b96f7d95fe38a859b" ON "purchase_request_elements_elements" ("elementsElementId") `);
        await queryRunner.query(`ALTER TABLE "purchase_request_elements_elements" ADD CONSTRAINT "FK_8d44813a1e5d9470d41d1f718c7" FOREIGN KEY ("purchaseRequestPurchaseRequestId") REFERENCES "purchase_request"("purchaseRequestId") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "purchase_request_elements_elements" ADD CONSTRAINT "FK_3ea5ca286b96f7d95fe38a859b8" FOREIGN KEY ("elementsElementId") REFERENCES "elements"("elementId") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "purchase_request_elements_elements" DROP CONSTRAINT "FK_3ea5ca286b96f7d95fe38a859b8"`);
        await queryRunner.query(`ALTER TABLE "purchase_request_elements_elements" DROP CONSTRAINT "FK_8d44813a1e5d9470d41d1f718c7"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_3ea5ca286b96f7d95fe38a859b"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_8d44813a1e5d9470d41d1f718c"`);
        await queryRunner.query(`DROP TABLE "purchase_request_elements_elements"`);
        await queryRunner.query(`DROP TABLE "purchase_request"`);
    }

}
