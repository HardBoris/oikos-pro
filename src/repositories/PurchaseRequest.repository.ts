import { DeleteResult, Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { PurchaseRequest } from "../entities";

interface IPurchaseRequestRepo {
  save: (solicitud: Partial<PurchaseRequest>) => Promise<PurchaseRequest>;
  all: () => Promise<PurchaseRequest[]>;
  findOne: (payload: object) => Promise<PurchaseRequest>;
  delete: (id: string) => Promise<DeleteResult>;
}

class PurchaseRequestRepo implements IPurchaseRequestRepo {
  private ormRepo: Repository<PurchaseRequest>;

  constructor() {
    this.ormRepo = AppDataSource.getRepository(PurchaseRequest);
  }

  save = async (solicitud: Partial<PurchaseRequest>) =>
    await this.ormRepo.save(solicitud);
  all = async () => await this.ormRepo.find({ relations: { details: true } });
  findOne = async (payload: object) =>
    await this.ormRepo.findOneBy({ ...payload });
  delete = async (id: string) => await this.ormRepo.delete(id);
}

export default new PurchaseRequestRepo();
