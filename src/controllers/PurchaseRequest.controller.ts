import { Request, Response } from "express";
import { PurchaseRequestService } from "../services";

class PurchaseRequestController {
  PurchaseRequestCreator = async (req: Request, res: Response) => {
    const solicitud = await PurchaseRequestService.PurchaseRequestCreator(req);
    return res.status(201).json(solicitud);
  };

  PurchaseRequestsLoader = async (req: Request, res: Response) => {
    const { status, solicitudes } =
      await PurchaseRequestService.PurchaseRequestsLoader(req);
    return res.status(status).json(solicitudes);
  };

  PurchaseRequestLoader = async (req: Request, res: Response) => {
    const { status, solicitud } =
      await PurchaseRequestService.PurchaseRequestLoader(req);
    return res.status(status).json(solicitud);
  };

  PurchaseRequestEditor = async (req: Request, res: Response) => {
    const { status, solicitud } =
      await PurchaseRequestService.PurchaseRequestEditor(req);
    return res.status(status).json(solicitud);
  };

  PurchaseRequestDeletor = async (req: Request, res: Response) => {
    const { status, message } =
      await PurchaseRequestService.PurchaseRequestDeletor(req);
    return res.status(status).json(message);
  };
}

export default new PurchaseRequestController();
