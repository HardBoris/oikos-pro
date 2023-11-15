import {
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Element } from "./Element";

@Entity("purchase_request")
export class PurchaseRequest {
  @PrimaryGeneratedColumn()
  purchaseRequestId?: number;

  @CreateDateColumn()
  purchaseRequestDate?: Date;

  @ManyToMany(() => Element)
  @JoinTable()
  elements: Element[];
}
