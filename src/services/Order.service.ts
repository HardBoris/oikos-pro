import { Request } from "express";
import { Order } from "../entities";
import { ErrorHandler } from "../errors";
import { OrderRepository } from "../repositories";

class OrderService {
  OrderCreator = async (req: Request): Promise<any> => {
    const body = req.body;

    const order: Order = await OrderRepository.save({
      ...body,
    });

    return order;
  };

  OrdersLoader = async (req: Request) => {
    const orders: Order[] = await OrderRepository.all();

    return {
      status: 200,
      orders: orders,
    };
  };

  OrderLoader = async (req: Request) => {
    const order: Order = await OrderRepository.findOne({
      orderId: req.params.orderId,
    });
    return { status: 200, order: order };
  };

  OrderEditor = async (req: Request) => {
    const order: Order = await OrderRepository.findOne({
      orderId: req.params.orderId,
    });
    const orderUpdated = {
      ...order,
      order: req.body.order,
    };
    await OrderRepository.save(orderUpdated);
    return {
      status: 200,
      order: orderUpdated,
    };
  };

  OrderDeletor = async (req: Request) => {
    const order: Order = await OrderRepository.findOne({
      orderId: req.params.orderId,
    });

    if (!order) {
      throw new ErrorHandler(404, "Order not found");
    }

    await OrderRepository.delete(req.params.orderId);

    return {
      status: 200,
      message: "Order deleted",
    };
  };
}

export default new OrderService();
