import {
  ChildEntity,
  Column,
  CreateDateColumn,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
  TableInheritance,
  UpdateDateColumn,
} from "typeorm";
import { PurchaseDetail } from "./Detail";

export enum WayToPay {
  BILLED = "Faturado",
  CARD = "Cartão",
  CASH = "Dinheiro",
}

export enum OrderStatus {
  APPROVED = "Aprovada",
  PENDING = "Pendente",
  DELAYED = "Atrasada",
  DENIED = "Reprovada",
  RECEIVED = "Recebida",
  DELIVERED = "Entregue",
  DISPATCHED = "Enviada",
  RETURNED = "Devolvida",
  REJECTED = "Rejeitada",
}

export enum LogisticMode {
  DELIVERY = "Entrega",
  RECEIVE = "Retirada",
}

@Entity("orders")
@TableInheritance({ column: { type: "varchar", name: "type" } })
@Index(["type", "order"], { unique: true })
export class Order {
  @PrimaryGeneratedColumn("uuid")
  orderId?: string;

  @CreateDateColumn()
  orderDate?: Date;

  @UpdateDateColumn()
  orderUpdateDate?: Date;

  @Column()
  order: number;

  @Column()
  partner: string;

  @Column({ nullable: true, type: "enum", enum: LogisticMode })
  logistic?: string;

  @Column({ type: "enum", enum: OrderStatus, default: OrderStatus.PENDING })
  status: string;

  @Column({ nullable: true })
  comments?: string;
}

@ChildEntity()
export class PurchaseOrder extends Order {
  @Column({ type: "enum", enum: WayToPay })
  wayToPay: string;

  @Column()
  installments: string;

  @Column({ type: "float", default: 0.0 })
  freight: number;

  @Column()
  invoice: string;

  @OneToMany(() => PurchaseDetail, (detail) => detail.purchase, {
    cascade: true,
  })
  details: PurchaseDetail[];
}

@ChildEntity()
export class ServiceOrder extends Order {
  @Column()
  description: string;
}
