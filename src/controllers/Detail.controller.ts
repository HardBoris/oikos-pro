import { Request, Response } from "express";
import { DetailService } from "../services";

class DetailController {
  DetailCreator = async (req: Request, res: Response) => {
    const Detailo = await DetailService.DetailCreator(req);
    return res.status(201).json(Detailo);
  };

  DetailsLoader = async (req: Request, res: Response) => {
    const { status, Details } = await DetailService.DetailsLoader(req);
    return res.status(status).json(Details);
  };

  DetailLoader = async (req: Request, res: Response) => {
    const { status, Detail } = await DetailService.DetailLoader(req);
    return res.status(status).json(Detail);
  };

  DetailEditor = async (req: Request, res: Response) => {
    const { status, Detail } = await DetailService.DetailEditor(req);
    return res.status(status).json(Detail);
  };

  DetailDeletor = async (req: Request, res: Response) => {
    const { status, message } = await DetailService.DetailDeletor(req);
    return res.status(status).json(message);
  };
}

export default new DetailController();
