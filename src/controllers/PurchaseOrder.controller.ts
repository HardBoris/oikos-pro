import { Request, Response } from "express";
import { PurchaseOrderService } from "../services";

class PurchaseOrderController {
  PurchaseOrderCreator = async (req: Request, res: Response) => {
    const order = await PurchaseOrderService.PurchaseOrderCreator(req);
    return res.status(201).json(order);
  };

  PurchaseOrdersLoader = async (req: Request, res: Response) => {
    const { status, orders } = await PurchaseOrderService.PurchaseOrdersLoader(
      req
    );
    return res.status(status).json(orders);
  };

  PurchaseOrderLoader = async (req: Request, res: Response) => {
    const { status, order } = await PurchaseOrderService.PurchaseOrderLoader(
      req
    );
    return res.status(status).json(order);
  };

  PurchaseOrderEditor = async (req: Request, res: Response) => {
    const { status, order } = await PurchaseOrderService.PurchaseOrderEditor(
      req
    );
    return res.status(status).json(order);
  };

  PurchaseOrderDeletor = async (req: Request, res: Response) => {
    const { status, message } = await PurchaseOrderService.PurchaseOrderDeletor(
      req
    );
    return res.status(status).json(message);
  };
}

export default new PurchaseOrderController();
