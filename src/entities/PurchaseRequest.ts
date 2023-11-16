import { CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("purchase_request")
export class PurchaseRequest {
  @PrimaryGeneratedColumn()
  purchaseRequestId?: number;

  @CreateDateColumn()
  purchaseRequestDate?: Date;
}
