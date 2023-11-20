import { Request } from "express";
import { PurchaseOrder } from "../entities/Order";
import { ErrorHandler } from "../errors";
import { PurchaseOrderRepository } from "../repositories";

class PurchaseOrderService {
  PurchaseOrderCreator = async (req: Request): Promise<any> => {
    const body = req.body;
    const cuenta: number = await PurchaseOrderRepository.counter({
      type: body.type,
    });

    const order: PurchaseOrder = await PurchaseOrderRepository.save({
      ...body,
      order: cuenta + 1,
    });

    return order;
  };

  PurchaseOrdersLoader = async (req: Request) => {
    const orders: PurchaseOrder[] = await PurchaseOrderRepository.all();

    return {
      status: 200,
      orders: orders,
    };
  };

  PurchaseOrderLoader = async (req: Request) => {
    const order: PurchaseOrder = await PurchaseOrderRepository.findOne({
      orderId: req.params.orderId,
    });
    return { status: 200, order: order };
  };

  PurchaseOrderEditor = async (req: Request) => {
    const order: PurchaseOrder = await PurchaseOrderRepository.findOne({
      orderId: req.params.orderId,
    });
    const orderUpdated = {
      ...order,
      order: req.body.order,
    };
    await PurchaseOrderRepository.save(orderUpdated);
    return {
      status: 200,
      order: orderUpdated,
    };
  };

  InvoiceAdder = async (req: Request) => {
    const order: PurchaseOrder = await PurchaseOrderRepository.findOne({
      orderId: req.params.orderId,
    });
    const orderUpdated = {
      ...order,
      invoice: req.body.invoice,
      status: "Recebida",
    };
    await PurchaseOrderRepository.save(orderUpdated);
    return {
      status: 200,
      order: orderUpdated,
    };
  };

  PurchaseOrderDeletor = async (req: Request) => {
    const order: PurchaseOrder = await PurchaseOrderRepository.findOne({
      orderId: req.params.orderId,
    });

    if (!order) {
      throw new ErrorHandler(404, "PurchaseOrder not found");
    }

    await PurchaseOrderRepository.delete(req.params.orderId);

    return {
      status: 200,
      message: "PurchaseOrder deleted",
    };
  };
}

export default new PurchaseOrderService();
