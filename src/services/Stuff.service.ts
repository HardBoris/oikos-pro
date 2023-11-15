import { Request } from "express";
import { Stuff } from "../entities/Element";
import { ErrorHandler } from "../errors";
import { stuffRepository } from "../repositories";

class StuffService {
  StuffCreator = async (req: Request): Promise<any> => {
    const body = req.body;
    const { stuff } = body;
    const buscado = await stuffRepository.findOne({ stuff: stuff });

    if (buscado) {
      return buscado;
    } else {
      const cosa: Stuff = await stuffRepository.save({
        ...body,
      });

      return cosa;
    }
  };

  StuffsLoader = async (req: Request) => {
    let stuffs: Stuff[] = await stuffRepository.all();
    /* stuffs = stuffs.sort((a, b) =>
      a.stuffId > b.stuffId ? -1 : a.stuffId < b.stuffId ? 1 : 0
    ); */
    return {
      status: 200,
      stuffs: stuffs,
    };
  };

  /* StuffsClassified = async (req: Request) => {
    const clasificados: Stuff[] = await stuffRepository.classified({
      type: req.params.tipo,
    });
    return {
      status: 200,
      classified: clasificados,
    };
  }; */

  StuffLoader = async (req: Request) => {
    const stuff: Stuff = await stuffRepository.findOne({
      stuffId: req.params.stuffId,
    });
    return { status: 200, stuff: stuff };
  };

  StuffEditor = async (req: Request) => {
    const stuff: Stuff = await stuffRepository.findOne({
      stuffId: req.params.stuffId,
    });
    const stuffUpdated = {
      ...stuff,
      stuff: req.body.stuff,
    };
    await stuffRepository.save(stuffUpdated);
    return {
      status: 200,
      stuff: stuffUpdated,
    };
  };

  StuffDeletor = async (req: Request) => {
    const stuff: Stuff = await stuffRepository.findOne({
      stuffId: req.params.stuffId,
    });

    if (!stuff) {
      throw new ErrorHandler(404, "Stuff not found");
    }

    await stuffRepository.delete(req.params.stuffId);

    return {
      status: 200,
      message: "Stuff deleted",
    };
  };
}

export default new StuffService();
