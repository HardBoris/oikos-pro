import { Request } from "express";
import { Order } from "../entities";
import { ErrorHandler } from "../errors";
import { OrderRepository } from "../repositories";
import { LogisticMode, OrderStatus, WayToPay } from "../entities/Order";

class OrderService {
  OrderCreator = async (req: Request): Promise<any> => {
    const body = req.body;
    const cuenta: number = await OrderRepository.counter({ type: body.type });

    const order: Order = await OrderRepository.save({
      ...body,
      order: cuenta + 1,
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

  WaysList = () => {
    return {
      status: 200,
      waysList: Object.values(WayToPay),
    };
  };

  StatusList = () => {
    return {
      status: 200,
      statusList: Object.values(OrderStatus),
    };
  };

  LogisticsList = () => {
    return {
      status: 200,
      logisticsList: Object.values(LogisticMode),
    };
  };
}

export default new OrderService();
