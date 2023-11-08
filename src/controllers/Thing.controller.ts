import { Request, Response } from "express";
import { thingService } from "../services";

class ThingController {
  ThingCreator = async (req: Request, res: Response) => {
    const thingo = await thingService.ThingCreator(req);
    return res.status(201).json(thingo);
  };
  ThingsLoader = async (req: Request, res: Response) => {
    const { status, things } = await thingService.ThingsLoader(req);
    return res.status(status).json(things);
  };

  ThingLoader = async (req: Request, res: Response) => {
    const { status, thing } = await thingService.ThingLoader(req);
    return res.status(status).json(thing);
  };

  ThingEditor = async (req: Request, res: Response) => {
    const { status, thing } = await thingService.ThingEditor(req);
    return res.status(status).json(thing);
  };

  ThingDeletor = async (req: Request, res: Response) => {
    const { status, message } = await thingService.ThingDeletor(req);
    return res.status(status).json(message);
  };
}

export default new ThingController();
