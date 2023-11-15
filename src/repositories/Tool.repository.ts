import { DeleteResult, Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Tool } from "../entities/Element";

interface IToolRepo {
  save: (thing: Partial<Tool>) => Promise<Tool>;
  all: () => Promise<Tool[]>;
  findOne: (payload: object) => Promise<Tool>;
  delete: (id: string) => Promise<DeleteResult>;
}

class ToolRepo implements IToolRepo {
  private ormRepo: Repository<Tool>;

  constructor() {
    this.ormRepo = AppDataSource.getRepository(Tool);
  }

  save = async (thing: Partial<Tool>) => await this.ormRepo.save(thing);
  all = async () => await this.ormRepo.find();
  findOne = async (payload: object) =>
    await this.ormRepo.findOneBy({ ...payload });
  delete = async (id: string) => await this.ormRepo.delete(id);
}

export default new ToolRepo();
