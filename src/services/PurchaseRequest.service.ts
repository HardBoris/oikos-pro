import { Request } from "express";
import { PurchaseRequest } from "../entities";
import { ErrorHandler } from "../errors";
import { PurchaseRequestRepository } from "../repositories";

class PurchaseRequestService {
  PurchaseRequestCreator = async (req: Request): Promise<any> => {
    const body = req.body;

    const solicitud: PurchaseRequest = await PurchaseRequestRepository.save({
      ...body,
    });

    return solicitud;
  };

  PurchaseRequestsLoader = async (req: Request) => {
    const solicitudes: PurchaseRequest[] =
      await PurchaseRequestRepository.all();
    /* solicitudes = solicitudes.sort((a, b) =>
      a.elementId > b.elementId ? -1 : a.elementId < b.elementId ? 1 : 0
    ); */
    return {
      status: 200,
      solicitudes: solicitudes,
    };
  };

  PurchaseRequestLoader = async (req: Request) => {
    const solicitud: PurchaseRequest = await PurchaseRequestRepository.findOne({
      purchaseRequestId: req.params.solicitudId,
    });
    return { status: 200, purchaseRequest: solicitud };
  };

  PurchaseRequestEditor = async (req: Request) => {
    const solicitud: PurchaseRequest = await PurchaseRequestRepository.findOne({
      purchaseRequestId: req.params.solicitudId,
    });
    const requestUpdated = {
      ...solicitud,
    };
    await PurchaseRequestRepository.save(requestUpdated);
    return {
      status: 200,
      purchaseRequest: requestUpdated,
    };
  };

  PurchaseRequestDeletor = async (req: Request) => {
    const solicitud: PurchaseRequest = await PurchaseRequestRepository.findOne({
      purchaseRequestId: req.params.solicitudId,
    });

    if (!solicitud) {
      throw new ErrorHandler(404, "Purchase Request not found");
    }

    await PurchaseRequestRepository.delete(req.params.solicitudId);

    return {
      status: 200,
      message: "Purchase Request deleted",
    };
  };
}

export default new PurchaseRequestService();
