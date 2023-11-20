import {
  ChildEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  TableInheritance,
} from "typeorm";
import { PurchaseRequest } from "./PurchaseRequest";
import { Element } from "./Element";
import { PurchaseOrder } from "./Order";

@Entity("details")
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class Detail {
  @PrimaryGeneratedColumn("uuid")
  itemId?: string;

  @Column({ type: "float" })
  quantity: number;

  @Column()
  measurement: string;

  @ManyToOne(() => PurchaseRequest, (prequest) => prequest.details)
  @JoinColumn({ name: "prequest" })
  prequest: PurchaseRequest;

  @ManyToOne(() => Element, (element) => element.details)
  @JoinColumn({ name: "element" })
  element: Element;
}

@ChildEntity()
export class PurchaseDetail extends Detail {
  @Column({ type: "float", default: 1 })
  unitPrice: number;

  @ManyToOne(() => PurchaseOrder, (purchase) => purchase.details)
  purchase: PurchaseOrder;
}
