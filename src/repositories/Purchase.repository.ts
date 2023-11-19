import { DeleteResult, Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Order } from "../entities";

interface IOrderRepo {
  save: (order: Partial<Order>) => Promise<Order>;
  all: () => Promise<Order[]>;
  findOne: (payload: object) => Promise<Order>;
  delete: (id: string) => Promise<DeleteResult>;
  counter: (payload: object) => Promise<Number>;
}

class OrderRepo implements IOrderRepo {
  private ormRepo: Repository<Order>;

  constructor() {
    this.ormRepo = AppDataSource.getRepository(Order);
  }

  save = async (order: Partial<Order>) => await this.ormRepo.save(order);
  all = async () => await this.ormRepo.find();
  findOne = async (payload: object) =>
    await this.ormRepo.findOneBy({ ...payload });
  delete = async (id: string) => await this.ormRepo.delete(id);
  counter = async (payload: object) =>
    await this.ormRepo.countBy({ ...payload });
}

export default new OrderRepo();
