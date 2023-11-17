import { MigrationInterface, QueryRunner } from "typeorm";

export class DetailEntity1700182782187 implements MigrationInterface {
    name = 'DetailEntity1700182782187'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "details" ("itemId" uuid NOT NULL DEFAULT uuid_generate_v4(), "quantity" double precision NOT NULL, "measurement" character varying NOT NULL, "prequestId" integer, CONSTRAINT "PK_601ace3a2fe4caad2a6f2b93b81" PRIMARY KEY ("itemId"))`);
        await queryRunner.query(`ALTER TABLE "details" ADD CONSTRAINT "FK_56420fa366f747f5aa0ada95dfb" FOREIGN KEY ("prequestId") REFERENCES "purchase_request"("purchaseRequestId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "details" DROP CONSTRAINT "FK_56420fa366f747f5aa0ada95dfb"`);
        await queryRunner.query(`DROP TABLE "details"`);
    }

}
