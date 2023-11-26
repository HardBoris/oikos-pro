import { MigrationInterface, QueryRunner } from "typeorm";

export class PartnerEntity1701026698768 implements MigrationInterface {
    name = 'PartnerEntity1701026698768'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" RENAME COLUMN "partner" TO "partnerId"`);
        await queryRunner.query(`CREATE TABLE "partners" ("partnerId" uuid NOT NULL DEFAULT uuid_generate_v4(), "fantasyName" character varying NOT NULL, "CNPJ" character varying NOT NULL, "corporateName" character varying, "partnerEmail" character varying, "partnerPhone" character varying, CONSTRAINT "PK_be3dc6eebb4e5dde84249284cda" PRIMARY KEY ("partnerId"))`);
        await queryRunner.query(`ALTER TABLE "elements" DROP COLUMN "partner"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "partnerId"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "partnerId" uuid`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_83e2d6accf315a72beea776cc4b" FOREIGN KEY ("partnerId") REFERENCES "partners"("partnerId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_83e2d6accf315a72beea776cc4b"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "partnerId"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "partnerId" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "elements" ADD "partner" character varying NOT NULL`);
        await queryRunner.query(`DROP TABLE "partners"`);
        await queryRunner.query(`ALTER TABLE "orders" RENAME COLUMN "partnerId" TO "partner"`);
    }

}
