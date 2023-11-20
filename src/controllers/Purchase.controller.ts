import { Request, Response } from "express";
import { PurchaseService } from "../services";

class PurchaseController {
  PurchaseCreator = async (req: Request, res: Response) => {
    const order = await PurchaseService.PurchaseCreator(req);
    return res.status(201).json(order);
  };

  PurchasesLoader = async (req: Request, res: Response) => {
    const { status, orders } = await PurchaseService.PurchasesLoader(req);
    return res.status(status).json(orders);
  };

  PurchaseLoader = async (req: Request, res: Response) => {
    const { status, order } = await PurchaseService.PurchaseLoader(req);
    return res.status(status).json(order);
  };

  PurchaseEditor = async (req: Request, res: Response) => {
    const { status, order } = await PurchaseService.PurchaseEditor(req);
    return res.status(status).json(order);
  };

  PurchaseDeletor = async (req: Request, res: Response) => {
    const { status, message } = await PurchaseService.PurchaseDeletor(req);
    return res.status(status).json(message);
  };
}

export default new PurchaseController();
