import { Request, Response } from "express";
import { MidiaService } from "../services";

class MidiaController {
  MidiaCreator = async (req: Request, res: Response) => {
    const stuffo = await MidiaService.MidiaCreator(req);
    return res.status(201).json(stuffo);
  };

  MidiasLoader = async (req: Request, res: Response) => {
    const { status, stuffs } = await MidiaService.MidiasLoader(req);
    return res.status(status).json(stuffs);
  };

  MidiaLoader = async (req: Request, res: Response) => {
    const { status, stuff } = await MidiaService.MidiaLoader(req);
    return res.status(status).json(stuff);
  };

  MidiaEditor = async (req: Request, res: Response) => {
    const { status, stuff } = await MidiaService.MidiaEditor(req);
    return res.status(status).json(stuff);
  };

  MidiaDeletor = async (req: Request, res: Response) => {
    const { status, message } = await MidiaService.MidiaDeletor(req);
    return res.status(status).json(message);
  };
}

export default new MidiaController();
