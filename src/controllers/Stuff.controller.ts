import { Request, Response } from "express";
import { StuffService } from "../services";

class StuffController {
  StuffCreator = async (req: Request, res: Response) => {
    const stuffo = await StuffService.StuffCreator(req);
    return res.status(201).json(stuffo);
  };

  StuffsLoader = async (req: Request, res: Response) => {
    const { status, stuffs } = await StuffService.StuffsLoader(req);
    return res.status(status).json(stuffs);
  };

  StuffLoader = async (req: Request, res: Response) => {
    const { status, stuff } = await StuffService.StuffLoader(req);
    return res.status(status).json(stuff);
  };

  StuffEditor = async (req: Request, res: Response) => {
    const { status, stuff } = await StuffService.StuffEditor(req);
    return res.status(status).json(stuff);
  };

  StuffDeletor = async (req: Request, res: Response) => {
    const { status, message } = await StuffService.StuffDeletor(req);
    return res.status(status).json(message);
  };
}

export default new StuffController();
