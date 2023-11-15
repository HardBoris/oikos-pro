import { Request } from "express";
import { Midia } from "../entities/Element";
import { ErrorHandler } from "../errors";
import { MidiaRepository } from "../repositories";

class MidiaService {
  MidiaCreator = async (req: Request): Promise<any> => {
    const body = req.body;
    console.log(body);
    const { element } = body;
    const buscado = await MidiaRepository.findOne({ element: element });

    if (buscado) {
      return buscado;
    } else {
      const cosa: Midia = await MidiaRepository.save({
        ...body,
      });

      return cosa;
    }
  };

  MidiasLoader = async (req: Request) => {
    let stuffs: Midia[] = await MidiaRepository.all();
    /* stuffs = stuffs.sort((a, b) =>
      a.stuffId > b.stuffId ? -1 : a.stuffId < b.stuffId ? 1 : 0
    ); */
    return {
      status: 200,
      stuffs: stuffs,
    };
  };

  MidiaLoader = async (req: Request) => {
    const stuff: Midia = await MidiaRepository.findOne({
      stuffId: req.params.stuffId,
    });
    return { status: 200, stuff: stuff };
  };

  MidiaEditor = async (req: Request) => {
    const stuff: Midia = await MidiaRepository.findOne({
      stuffId: req.params.stuffId,
    });
    const stuffUpdated = {
      ...stuff,
      stuff: req.body.stuff,
    };
    await MidiaRepository.save(stuffUpdated);
    return {
      status: 200,
      stuff: stuffUpdated,
    };
  };

  MidiaDeletor = async (req: Request) => {
    const stuff: Midia = await MidiaRepository.findOne({
      stuffId: req.params.stuffId,
    });

    if (!stuff) {
      throw new ErrorHandler(404, "Midia not found");
    }

    await MidiaRepository.delete(req.params.stuffId);

    return {
      status: 200,
      message: "Midia deleted",
    };
  };
}

export default new MidiaService();
