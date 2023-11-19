import { MigrationInterface, QueryRunner } from "typeorm";

export class OrderEntity1700420760200 implements MigrationInterface {
    name = 'OrderEntity1700420760200'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."orders_logistic_enum" AS ENUM('Entrega', 'Retirada')`);
        await queryRunner.query(`CREATE TYPE "public"."orders_status_enum" AS ENUM('Aprovada', 'Pendente', 'Atrasada', 'Reprovada', 'Recebida', 'Entregue', 'Enviada', 'Devolvida', 'Rejeitada')`);
        await queryRunner.query(`CREATE TYPE "public"."orders_waytopay_enum" AS ENUM('Faturado', 'Cartão', 'Dinheiro')`);
        await queryRunner.query(`CREATE TABLE "orders" ("orderId" SERIAL NOT NULL, "orderDate" TIMESTAMP NOT NULL DEFAULT now(), "orderUpdateDate" TIMESTAMP NOT NULL DEFAULT now(), "partner" character varying NOT NULL, "logistic" "public"."orders_logistic_enum", "status" "public"."orders_status_enum" NOT NULL DEFAULT 'Pendente', "comments" character varying, "wayToPay" "public"."orders_waytopay_enum", "installments" character varying, "freight" double precision DEFAULT '0', "description" character varying, "type" character varying NOT NULL, CONSTRAINT "PK_41ba27842ac1a2c24817ca59eaa" PRIMARY KEY ("orderId"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_91849563d82c09d3f639d324e7" ON "orders" ("type", "orderId") `);
        await queryRunner.query(`CREATE INDEX "IDX_76154e1d0fa9d7894edfba166b" ON "orders" ("type") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_76154e1d0fa9d7894edfba166b"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_91849563d82c09d3f639d324e7"`);
        await queryRunner.query(`DROP TABLE "orders"`);
        await queryRunner.query(`DROP TYPE "public"."orders_waytopay_enum"`);
        await queryRunner.query(`DROP TYPE "public"."orders_status_enum"`);
        await queryRunner.query(`DROP TYPE "public"."orders_logistic_enum"`);
    }

}
