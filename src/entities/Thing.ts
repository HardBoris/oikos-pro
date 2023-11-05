import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

export enum ThingType {
  MATERIAL = "material",
  MIDIA = "mídia",
  TOOL = "ferramenta",
  ACCESSORY = "acessório",
}

@Entity("things")
export class Thing {
  @PrimaryGeneratedColumn("uuid")
  thingId?: string;

  @Column()
  thing: string;

  @Column()
  description: string;

  @Column({ type: "enum", enum: ThingType, default: ThingType.MATERIAL })
  thingType: string;

  @Column()
  defaultUnit: string;

  @Column()
  partner: string;
}
