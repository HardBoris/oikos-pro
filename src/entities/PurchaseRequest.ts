import {
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Detail } from "./Detail";

@Entity("purchase_request")
export class PurchaseRequest {
  @PrimaryGeneratedColumn()
  purchaseRequestId?: number;

  @CreateDateColumn()
  purchaseRequestDate?: Date;

  @OneToMany(() => Detail, (detail) => detail.prequest, {
    cascade: true,
  })
  details: Detail[];
}
