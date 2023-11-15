import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  TableInheritance,
  ChildEntity,
} from "typeorm";

@Entity("elements")
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class Element {
  @PrimaryGeneratedColumn("uuid")
  elementId?: string;

  @Column()
  element: string;

  @Column()
  description: string;

  @Column()
  defaultUnit: string;

  @Column()
  partner: string;

  @Column({ default: 0 })
  minimumStock?: number;

  @Column({ default: 1 })
  idealStock?: number;
}

@ChildEntity()
export class Stuff extends Element {
  @Column()
  stuffPacking: string;

  @Column()
  stuffPerPacking: number;
}

@ChildEntity()
export class Midia extends Element {
  @Column()
  width: number;

  @Column()
  height: number;

  @Column()
  thick: number;
}

@ChildEntity()
export class Tool extends Element {
  @Column()
  toolModel: string;

  @Column()
  toolPower: string;

  @Column()
  producer: string;
}
