import { DeleteResult, Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Purchase } from "../entities/Order";

interface IPurchaseRepo {
  save: (purchase: Partial<Purchase>) => Promise<Purchase>;
  all: () => Promise<Purchase[]>;
  findOne: (payload: object) => Promise<Purchase>;
  delete: (id: string) => Promise<DeleteResult>;
  counter: (payload: object) => Promise<Number>;
}

class PurchaseRepo implements IPurchaseRepo {
  private ormRepo: Repository<Purchase>;

  constructor() {
    this.ormRepo = AppDataSource.getRepository(Purchase);
  }

  save = async (purchase: Partial<Purchase>) =>
    await this.ormRepo.save(purchase);
  all = async () => await this.ormRepo.find();
  findOne = async (payload: object) =>
    await this.ormRepo.findOneBy({ ...payload });
  delete = async (id: string) => await this.ormRepo.delete(id);
  counter = async (payload: object) =>
    await this.ormRepo.countBy({ ...payload });
}

export default new PurchaseRepo();
