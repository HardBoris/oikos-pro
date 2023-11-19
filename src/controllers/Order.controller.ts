import { Request, Response } from "express";
import { OrderService } from "../services";

class OrderController {
  OrderCreator = async (req: Request, res: Response) => {
    const order = await OrderService.OrderCreator(req);
    return res.status(201).json(order);
  };

  OrdersLoader = async (req: Request, res: Response) => {
    const { status, orders } = await OrderService.OrdersLoader(req);
    return res.status(status).json(orders);
  };

  OrderLoader = async (req: Request, res: Response) => {
    const { status, order } = await OrderService.OrderLoader(req);
    return res.status(status).json(order);
  };

  OrderEditor = async (req: Request, res: Response) => {
    const { status, order } = await OrderService.OrderEditor(req);
    return res.status(status).json(order);
  };

  OrderDeletor = async (req: Request, res: Response) => {
    const { status, message } = await OrderService.OrderDeletor(req);
    return res.status(status).json(message);
  };
}

export default new OrderController();
