import { Request, Response } from "express";
import { PartnerService } from "../services";

class PartnerController {
  PartnerCreator = async (req: Request, res: Response) => {
    const partner = await PartnerService.PartnerCreator(req);
    return res.status(201).json(partner);
  };

  PartnersLoader = async (req: Request, res: Response) => {
    const { status, partners } = await PartnerService.PartnersLoader(req);
    return res.status(status).json(partners);
  };

  PartnerLoader = async (req: Request, res: Response) => {
    const { status, partner } = await PartnerService.PartnerLoader(req);
    return res.status(status).json(partner);
  };

  PartnerEditor = async (req: Request, res: Response) => {
    const { status, partner } = await PartnerService.PartnerEditor(req);
    return res.status(status).json(partner);
  };

  PartnerDeletor = async (req: Request, res: Response) => {
    const { status, message } = await PartnerService.PartnerDeletor(req);
    return res.status(status).json(message);
  };
}

export default new PartnerController();
