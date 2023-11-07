import { DeleteResult, Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Thing } from "../entities";

interface IThingRepo {
  save: (thing: Partial<Thing>) => Promise<Thing>;
  all: () => Promise<Thing[]>;
  findOne: (payload: object) => Promise<Thing>;
  delete: (id: string) => Promise<DeleteResult>;
}

class ThingRepo implements IThingRepo {
  private ormRepo: Repository<Thing>;

  constructor() {
    this.ormRepo = AppDataSource.getRepository(Thing);
  }

  save = async (thing: Partial<Thing>) => await this.ormRepo.save(thing);
  all = async () => await this.ormRepo.find();
  findOne = async (payload: object) =>
    await this.ormRepo.findOneBy({ ...payload });
  delete = async (id: string) => await this.ormRepo.delete(id);
}

export default new ThingRepo();
