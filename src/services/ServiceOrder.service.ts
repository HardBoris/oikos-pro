import { Request } from "express";
import { ServiceOrder } from "../entities/Order";
import { ErrorHandler } from "../errors";
import { ServiceOrderRepository } from "../repositories";

class ServiceOrderService {
  ServiceOrderCreator = async (req: Request): Promise<any> => {
    const body = req.body;
    const cuenta: number = await ServiceOrderRepository.counter({
      type: body.type,
    });

    const order: ServiceOrder = await ServiceOrderRepository.save({
      ...body,
      order: cuenta + 1,
    });

    return order;
  };

  ServiceOrdersLoader = async (req: Request) => {
    const orders: ServiceOrder[] = await ServiceOrderRepository.all();

    return {
      status: 200,
      orders: orders,
    };
  };

  ServiceOrderLoader = async (req: Request) => {
    const order: ServiceOrder = await ServiceOrderRepository.findOne({
      orderId: req.params.orderId,
    });
    return { status: 200, order: order };
  };

  ServiceOrderEditor = async (req: Request) => {
    const order: ServiceOrder = await ServiceOrderRepository.findOne({
      orderId: req.params.orderId,
    });
    const orderUpdated = {
      ...order,
      order: req.body.order,
    };
    await ServiceOrderRepository.save(orderUpdated);
    return {
      status: 200,
      order: orderUpdated,
    };
  };

  ServiceOrderDeletor = async (req: Request) => {
    const order: ServiceOrder = await ServiceOrderRepository.findOne({
      orderId: req.params.orderId,
    });

    if (!order) {
      throw new ErrorHandler(404, "ServiceOrder not found");
    }

    await ServiceOrderRepository.delete(req.params.orderId);

    return {
      status: 200,
      message: "ServiceOrder deleted",
    };
  };
}

export default new ServiceOrderService();
