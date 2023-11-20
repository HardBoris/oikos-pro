import { DeleteResult, Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { ServiceOrder } from "../entities/Order";

interface IServiceOrderRepo {
  save: (service: Partial<ServiceOrder>) => Promise<ServiceOrder>;
  all: () => Promise<ServiceOrder[]>;
  findOne: (payload: object) => Promise<ServiceOrder>;
  delete: (id: string) => Promise<DeleteResult>;
  counter: (payload: object) => Promise<Number>;
}

class ServiceOrderRepo implements IServiceOrderRepo {
  private ormRepo: Repository<ServiceOrder>;

  constructor() {
    this.ormRepo = AppDataSource.getRepository(ServiceOrder);
  }

  save = async (service: Partial<ServiceOrder>) =>
    await this.ormRepo.save(service);
  all = async () => await this.ormRepo.find();
  findOne = async (payload: object) =>
    await this.ormRepo.findOneBy({ ...payload });
  delete = async (id: string) => await this.ormRepo.delete(id);
  counter = async (payload: object) =>
    await this.ormRepo.countBy({ ...payload });
}

export default new ServiceOrderRepo();
