import { MigrationInterface, QueryRunner } from "typeorm";

export class ThingsEntity1700066778161 implements MigrationInterface {
    name = 'ThingsEntity1700066778161'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "thing" ("thingId" uuid NOT NULL DEFAULT uuid_generate_v4(), "thing" character varying NOT NULL, "description" character varying NOT NULL, "defaultUnit" character varying NOT NULL, "partner" character varying NOT NULL, "minimumStock" integer NOT NULL DEFAULT '0', "idealStock" integer NOT NULL DEFAULT '1', "stuffPacking" character varying, "stuffPerPacking" integer, "width" integer, "height" integer, "thick" integer, "toolModel" character varying, "toolPower" character varying, "producer" character varying, "type" character varying NOT NULL, CONSTRAINT "PK_2f1bed5cfd97d3f175f9e5a79ee" PRIMARY KEY ("thingId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_35a3d268be75bb4ed8d05716e3" ON "thing" ("type") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_35a3d268be75bb4ed8d05716e3"`);
        await queryRunner.query(`DROP TABLE "thing"`);
    }

}
