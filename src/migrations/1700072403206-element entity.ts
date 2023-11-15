import { MigrationInterface, QueryRunner } from "typeorm";

export class ElementEntity1700072403206 implements MigrationInterface {
    name = 'ElementEntity1700072403206'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "elements" ("elementId" uuid NOT NULL DEFAULT uuid_generate_v4(), "element" character varying NOT NULL, "description" character varying NOT NULL, "defaultUnit" character varying NOT NULL, "partner" character varying NOT NULL, "minimumStock" integer NOT NULL DEFAULT '0', "idealStock" integer NOT NULL DEFAULT '1', "stuffPacking" character varying, "stuffPerPacking" integer, "width" integer, "height" integer, "thick" integer, "toolModel" character varying, "toolPower" character varying, "producer" character varying, "type" character varying NOT NULL, CONSTRAINT "PK_2859c49f0fdd663ed7ac046a8ba" PRIMARY KEY ("elementId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_9b647507e2b3c8f5fe62d5add8" ON "elements" ("type") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_9b647507e2b3c8f5fe62d5add8"`);
        await queryRunner.query(`DROP TABLE "elements"`);
    }

}
