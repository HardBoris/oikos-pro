import { Request, Response } from "express";
import { ToolService } from "../services";

class ToolController {
  ToolCreator = async (req: Request, res: Response) => {
    const stuffo = await ToolService.ToolCreator(req);
    return res.status(201).json(stuffo);
  };

  ToolsLoader = async (req: Request, res: Response) => {
    const { status, stuffs } = await ToolService.ToolsLoader(req);
    return res.status(status).json(stuffs);
  };

  ToolLoader = async (req: Request, res: Response) => {
    const { status, stuff } = await ToolService.ToolLoader(req);
    return res.status(status).json(stuff);
  };

  ToolEditor = async (req: Request, res: Response) => {
    const { status, stuff } = await ToolService.ToolEditor(req);
    return res.status(status).json(stuff);
  };

  ToolDeletor = async (req: Request, res: Response) => {
    const { status, message } = await ToolService.ToolDeletor(req);
    return res.status(status).json(message);
  };
}

export default new ToolController();
