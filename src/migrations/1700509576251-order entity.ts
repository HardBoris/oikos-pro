import { MigrationInterface, QueryRunner } from "typeorm";

export class OrderEntity1700509576251 implements MigrationInterface {
    name = 'OrderEntity1700509576251'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."orders_logistic_enum" AS ENUM('Entrega', 'Retirada')`);
        await queryRunner.query(`CREATE TYPE "public"."orders_status_enum" AS ENUM('Aprovada', 'Pendente', 'Atrasada', 'Reprovada', 'Recebida', 'Entregue', 'Enviada', 'Devolvida', 'Rejeitada')`);
        await queryRunner.query(`CREATE TYPE "public"."orders_waytopay_enum" AS ENUM('Faturado', 'Cartão', 'Dinheiro')`);
        await queryRunner.query(`CREATE TABLE "orders" ("orderId" uuid NOT NULL DEFAULT uuid_generate_v4(), "orderDate" TIMESTAMP NOT NULL DEFAULT now(), "orderUpdateDate" TIMESTAMP NOT NULL DEFAULT now(), "order" integer NOT NULL, "partner" character varying NOT NULL, "logistic" "public"."orders_logistic_enum", "status" "public"."orders_status_enum" NOT NULL DEFAULT 'Pendente', "comments" character varying, "wayToPay" "public"."orders_waytopay_enum", "installments" character varying, "freight" double precision DEFAULT '0', "invoice" character varying, "description" character varying, "type" character varying NOT NULL, CONSTRAINT "PK_41ba27842ac1a2c24817ca59eaa" PRIMARY KEY ("orderId"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_66f913b9f4e9d0925924a19e3e" ON "orders" ("type", "order") `);
        await queryRunner.query(`CREATE INDEX "IDX_76154e1d0fa9d7894edfba166b" ON "orders" ("type") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_76154e1d0fa9d7894edfba166b"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_66f913b9f4e9d0925924a19e3e"`);
        await queryRunner.query(`DROP TABLE "orders"`);
        await queryRunner.query(`DROP TYPE "public"."orders_waytopay_enum"`);
        await queryRunner.query(`DROP TYPE "public"."orders_status_enum"`);
        await queryRunner.query(`DROP TYPE "public"."orders_logistic_enum"`);
    }

}
