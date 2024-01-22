import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Element, Order } from "./index";

@Entity("partners")
export class Partner {
  @PrimaryGeneratedColumn("uuid")
  partnerId?: string;

  @Column()
  fantasyName: string;

  @Column()
  CNPJ: string;

  @Column({ nullable: true })
  corporateName?: string;

  @Column({ nullable: true })
  partnerEmail?: string;

  @Column({ nullable: true })
  partnerPhone?: string;

  /* @ManyToOne(() => Company)
  @JoinColumn({ referencedColumnName: "code" })
  company: Company; */

  @OneToMany(() => Order, (order) => order.partner)
  orders: Order[];

  /* @ManyToMany(() => Element, (element) => element.partners)
  @JoinTable()
  elements: Element[]; */
}
