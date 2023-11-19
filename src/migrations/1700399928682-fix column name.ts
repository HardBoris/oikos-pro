import { MigrationInterface, QueryRunner } from "typeorm";

export class FixColumnName1700399928682 implements MigrationInterface {
    name = 'FixColumnName1700399928682'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "details" DROP CONSTRAINT "FK_56420fa366f747f5aa0ada95dfb"`);
        await queryRunner.query(`ALTER TABLE "details" DROP CONSTRAINT "FK_b34591b5aaf3ad23c624abdc706"`);
        await queryRunner.query(`ALTER TABLE "details" DROP COLUMN "prequestId"`);
        await queryRunner.query(`ALTER TABLE "details" DROP COLUMN "elementId"`);
        await queryRunner.query(`ALTER TABLE "details" ADD "prequest" integer`);
        await queryRunner.query(`ALTER TABLE "details" ADD "element" uuid`);
        await queryRunner.query(`ALTER TABLE "details" ADD CONSTRAINT "FK_64d1e5718367eae876826c113c3" FOREIGN KEY ("prequest") REFERENCES "purchase_request"("purchaseRequestId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "details" ADD CONSTRAINT "FK_66c4b2c1b8a702f9f650ec8b019" FOREIGN KEY ("element") REFERENCES "elements"("elementId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "details" DROP CONSTRAINT "FK_66c4b2c1b8a702f9f650ec8b019"`);
        await queryRunner.query(`ALTER TABLE "details" DROP CONSTRAINT "FK_64d1e5718367eae876826c113c3"`);
        await queryRunner.query(`ALTER TABLE "details" DROP COLUMN "element"`);
        await queryRunner.query(`ALTER TABLE "details" DROP COLUMN "prequest"`);
        await queryRunner.query(`ALTER TABLE "details" ADD "elementId" uuid`);
        await queryRunner.query(`ALTER TABLE "details" ADD "prequestId" integer`);
        await queryRunner.query(`ALTER TABLE "details" ADD CONSTRAINT "FK_b34591b5aaf3ad23c624abdc706" FOREIGN KEY ("elementId") REFERENCES "elements"("elementId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "details" ADD CONSTRAINT "FK_56420fa366f747f5aa0ada95dfb" FOREIGN KEY ("prequestId") REFERENCES "purchase_request"("purchaseRequestId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
