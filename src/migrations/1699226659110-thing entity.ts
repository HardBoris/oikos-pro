import { MigrationInterface, QueryRunner } from "typeorm";

export class ThingEntity1699226659110 implements MigrationInterface {
    name = 'ThingEntity1699226659110'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."things_thingtype_enum" AS ENUM('material', 'mídia', 'ferramenta', 'acessório')`);
        await queryRunner.query(`CREATE TABLE "things" ("thingId" uuid NOT NULL DEFAULT uuid_generate_v4(), "thing" character varying NOT NULL, "description" character varying NOT NULL, "thingType" "public"."things_thingtype_enum" NOT NULL DEFAULT 'material', "defaultUnit" character varying NOT NULL, "partner" character varying NOT NULL, CONSTRAINT "PK_6917d79c658f32a563e8dace0d6" PRIMARY KEY ("thingId"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "things"`);
        await queryRunner.query(`DROP TYPE "public"."things_thingtype_enum"`);
    }

}
