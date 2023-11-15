import { Request, Response } from "express";
import { stuffService } from "../services";

class StuffController {
  StuffCreator = async (req: Request, res: Response) => {
    const stuffo = await stuffService.StuffCreator(req);
    return res.status(201).json(stuffo);
  };

  StuffsLoader = async (req: Request, res: Response) => {
    const { status, stuffs } = await stuffService.StuffsLoader(req);
    return res.status(status).json(stuffs);
  };

  StuffLoader = async (req: Request, res: Response) => {
    const { status, stuff } = await stuffService.StuffLoader(req);
    return res.status(status).json(stuff);
  };

  StuffEditor = async (req: Request, res: Response) => {
    const { status, stuff } = await stuffService.StuffEditor(req);
    return res.status(status).json(stuff);
  };

  StuffDeletor = async (req: Request, res: Response) => {
    const { status, message } = await stuffService.StuffDeletor(req);
    return res.status(status).json(message);
  };
}

export default new StuffController();
