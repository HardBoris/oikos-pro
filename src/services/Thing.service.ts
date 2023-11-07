import { Request } from "express";
import { Thing } from "../entities";
import { ErrorHandler } from "../errors";
import { thingRepository } from "../repositories";

class ThingService {
  ThingCreator = async (req: Request): Promise<any> => {
    const body = req.body;
    const fecha = new Date(body.elementDate);

    const thing: Thing = await thingRepository.save({
      ...body,
      elementDate: fecha,
    });

    return thing;
  };

  ThingsLoader = async (req: Request) => {
    let things: Thing[] = await thingRepository.all();
    /* things = things.sort((a, b) =>
      a.thingId > b.thingId ? -1 : a.thingId < b.thingId ? 1 : 0
    ); */
    return {
      status: 200,
      things: things,
    };
  };

  ThingLoader = async (req: Request) => {
    const thing: Thing = await thingRepository.findOne({
      thingId: req.params.thingId,
    });
    return { status: 200, thing: thing };
  };

  ThingEditor = async (req: Request) => {
    const thing: Thing = await thingRepository.findOne({
      thingId: req.params.thingId,
    });
    const thingUpdated = {
      ...thing,
    };
    await thingRepository.save(thingUpdated);
    return {
      status: 200,
      thing: thingUpdated,
    };
  };

  ThingDeletor = async (req: Request) => {
    const thing: Thing = await thingRepository.findOne({
      thingId: req.params.thingId,
    });

    if (!thing) {
      throw new ErrorHandler(404, "Thing not found");
    }

    await thingRepository.delete(req.params.thingId);

    return {
      status: 200,
      message: "Thing deleted",
    };
  };
}

export default new ThingService();
