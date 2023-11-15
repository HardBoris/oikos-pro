import { Request, Response } from "express";
import { elementService } from "../services";

class ElementController {
  ElementCreator = async (req: Request, res: Response) => {
    const elemento = await elementService.ElementCreator(req);
    return res.status(201).json(elemento);
  };

  ElementsLoader = async (req: Request, res: Response) => {
    const { status, elements } = await elementService.ElementsLoader(req);
    return res.status(status).json(elements);
  };

  ElementLoader = async (req: Request, res: Response) => {
    const { status, element } = await elementService.ElementLoader(req);
    return res.status(status).json(element);
  };

  ElementEditor = async (req: Request, res: Response) => {
    const { status, element } = await elementService.ElementEditor(req);
    return res.status(status).json(element);
  };

  ElementDeletor = async (req: Request, res: Response) => {
    const { status, message } = await elementService.ElementDeletor(req);
    return res.status(status).json(message);
  };
}

export default new ElementController();
