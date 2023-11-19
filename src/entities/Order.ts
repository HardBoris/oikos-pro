import {
  ChildEntity,
  Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  TableInheritance,
  UpdateDateColumn,
} from "typeorm";

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
@Index(["type", "orderId"], { unique: true })
export class Order {
  @PrimaryGeneratedColumn()
  orderId?: number;

  @CreateDateColumn()
  orderDate?: Date;

  @UpdateDateColumn()
  orderUpdateDate?: Date;

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
export class Purchase extends Order {
  @Column({ type: "enum", enum: WayToPay })
  wayToPay: string;

  @Column()
  installments: string;

  @Column({ type: "float", default: 0.0 })
  freight: number;
}

@ChildEntity()
export class Service {
  @Column()
  description: string;
}
