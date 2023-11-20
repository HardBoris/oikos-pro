import { Request } from "express";
import { Purchase } from "../entities/Order";
import { ErrorHandler } from "../errors";
import { PurchaseRepository } from "../repositories";

class PurchaseService {
  PurchaseCreator = async (req: Request): Promise<any> => {
    const body = req.body;
    const cuenta: number = await PurchaseRepository.counter({
      type: body.type,
    });

    const order: Purchase = await PurchaseRepository.save({
      ...body,
      order: cuenta + 1,
    });

    return order;
  };

  PurchasesLoader = async (req: Request) => {
    const orders: Purchase[] = await PurchaseRepository.all();

    return {
      status: 200,
      orders: orders,
    };
  };

  PurchaseLoader = async (req: Request) => {
    const order: Purchase = await PurchaseRepository.findOne({
      orderId: req.params.orderId,
    });
    return { status: 200, order: order };
  };

  PurchaseEditor = async (req: Request) => {
    const order: Purchase = await PurchaseRepository.findOne({
      orderId: req.params.orderId,
    });
    const orderUpdated = {
      ...order,
      order: req.body.order,
    };
    await PurchaseRepository.save(orderUpdated);
    return {
      status: 200,
      order: orderUpdated,
    };
  };

  PurchaseDeletor = async (req: Request) => {
    const order: Purchase = await PurchaseRepository.findOne({
      orderId: req.params.orderId,
    });

    if (!order) {
      throw new ErrorHandler(404, "Purchase not found");
    }

    await PurchaseRepository.delete(req.params.orderId);

    return {
      status: 200,
      message: "Purchase deleted",
    };
  };
}

export default new PurchaseService();
