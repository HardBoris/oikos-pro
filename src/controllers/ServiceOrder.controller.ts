import { Request, Response } from "express";
import { ServiceOrderService } from "../services";

class ServiceOrderController {
  ServiceOrderCreator = async (req: Request, res: Response) => {
    const order = await ServiceOrderService.ServiceOrderCreator(req);
    return res.status(201).json(order);
  };

  ServiceOrdersLoader = async (req: Request, res: Response) => {
    const { status, orders } = await ServiceOrderService.ServiceOrdersLoader(
      req
    );
    return res.status(status).json(orders);
  };

  ServiceOrderLoader = async (req: Request, res: Response) => {
    const { status, order } = await ServiceOrderService.ServiceOrderLoader(req);
    return res.status(status).json(order);
  };

  ServiceOrderEditor = async (req: Request, res: Response) => {
    const { status, order } = await ServiceOrderService.ServiceOrderEditor(req);
    return res.status(status).json(order);
  };

  ServiceOrderDeletor = async (req: Request, res: Response) => {
    const { status, message } = await ServiceOrderService.ServiceOrderDeletor(
      req
    );
    return res.status(status).json(message);
  };
}

export default new ServiceOrderController();
