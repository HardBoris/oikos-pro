import { DeleteResult, Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { PurchaseOrder } from "../entities/Order";

interface IPurchaseOrderRepo {
  save: (purchase: Partial<PurchaseOrder>) => Promise<PurchaseOrder>;
  all: () => Promise<PurchaseOrder[]>;
  findOne: (payload: object) => Promise<PurchaseOrder>;
  delete: (id: string) => Promise<DeleteResult>;
  counter: (payload: object) => Promise<Number>;
}

class PurchaseOrderRepo implements IPurchaseOrderRepo {
  private ormRepo: Repository<PurchaseOrder>;

  constructor() {
    this.ormRepo = AppDataSource.getRepository(PurchaseOrder);
  }

  save = async (purchase: Partial<PurchaseOrder>) =>
    await this.ormRepo.save(purchase);
  all = async () =>
    await this.ormRepo.find({ relations: { partner: true, details: true } });
  findOne = async (payload: object) =>
    await this.ormRepo.findOneBy({ ...payload });
  delete = async (id: string) => await this.ormRepo.delete(id);
  counter = async (payload: object) =>
    await this.ormRepo.countBy({ ...payload });
}

export default new PurchaseOrderRepo();
