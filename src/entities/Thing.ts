import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  TableInheritance,
  ChildEntity,
} from "typeorm";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class Thing {
  @PrimaryGeneratedColumn("uuid")
  thingId?: string;

  @Column()
  thing: string;

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
export class Stuff extends Thing {
  @Column()
  stuffPacking: string;

  @Column()
  stuffPerPacking: number;
}

@ChildEntity()
export class Midia extends Thing {
  @Column()
  width: number;

  @Column()
  height: number;

  @Column()
  thick: number;
}

@ChildEntity()
export class Tool extends Thing {
  @Column()
  toolModel: string;

  @Column()
  toolPower: string;

  @Column()
  producer: string;
}
