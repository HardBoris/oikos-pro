import { Request, Response } from "express";
import { ElementService } from "../services";

class ElementController {
  ElementCreator = async (req: Request, res: Response) => {
    const elemento = await ElementService.ElementCreator(req);
    return res.status(201).json(elemento);
  };

  ElementsLoader = async (req: Request, res: Response) => {
    const { status, elements } = await ElementService.ElementsLoader(req);
    return res.status(status).json(elements);
  };

  ElementLoader = async (req: Request, res: Response) => {
    const { status, element } = await ElementService.ElementLoader(req);
    return res.status(status).json(element);
  };

  ElementEditor = async (req: Request, res: Response) => {
    const { status, element } = await ElementService.ElementEditor(req);
    return res.status(status).json(element);
  };

  ElementDeletor = async (req: Request, res: Response) => {
    const { status, message } = await ElementService.ElementDeletor(req);
    return res.status(status).json(message);
  };
}

export default new ElementController();
