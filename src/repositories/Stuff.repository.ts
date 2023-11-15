import { DeleteResult, Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Stuff } from "../entities/Element";

interface IStuffRepo {
  save: (thing: Partial<Stuff>) => Promise<Stuff>;
  all: () => Promise<Stuff[]>;
  findOne: (payload: object) => Promise<Stuff>;
  delete: (id: string) => Promise<DeleteResult>;
}

class StuffRepo implements IStuffRepo {
  private ormRepo: Repository<Stuff>;

  constructor() {
    this.ormRepo = AppDataSource.getRepository(Stuff);
  }

  save = async (thing: Partial<Stuff>) => await this.ormRepo.save(thing);
  all = async () => await this.ormRepo.find();
  findOne = async (payload: object) =>
    await this.ormRepo.findOneBy({ ...payload });
  delete = async (id: string) => await this.ormRepo.delete(id);
}

export default new StuffRepo();
