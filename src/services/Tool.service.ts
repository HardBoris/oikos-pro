import { Request } from "express";
import { Tool } from "../entities/Element";
import { ErrorHandler } from "../errors";
import { ToolRepository } from "../repositories";

class ToolService {
  ToolCreator = async (req: Request): Promise<any> => {
    const body = req.body;
    const { element } = body;
    const buscado = await ToolRepository.findOne({ element: element });

    if (buscado) {
      return buscado;
    } else {
      const cosa: Tool = await ToolRepository.save({
        ...body,
      });

      return cosa;
    }
  };

  ToolsLoader = async (req: Request) => {
    let stuffs: Tool[] = await ToolRepository.all();
    /* stuffs = stuffs.sort((a, b) =>
      a.stuffId > b.stuffId ? -1 : a.stuffId < b.stuffId ? 1 : 0
    ); */
    return {
      status: 200,
      stuffs: stuffs,
    };
  };

  ToolLoader = async (req: Request) => {
    const stuff: Tool = await ToolRepository.findOne({
      stuffId: req.params.stuffId,
    });
    return { status: 200, stuff: stuff };
  };

  ToolEditor = async (req: Request) => {
    const stuff: Tool = await ToolRepository.findOne({
      stuffId: req.params.stuffId,
    });
    const stuffUpdated = {
      ...stuff,
      stuff: req.body.stuff,
    };
    await ToolRepository.save(stuffUpdated);
    return {
      status: 200,
      stuff: stuffUpdated,
    };
  };

  ToolDeletor = async (req: Request) => {
    const stuff: Tool = await ToolRepository.findOne({
      stuffId: req.params.stuffId,
    });

    if (!stuff) {
      throw new ErrorHandler(404, "Tool not found");
    }

    await ToolRepository.delete(req.params.stuffId);

    return {
      status: 200,
      message: "Tool deleted",
    };
  };
}

export default new ToolService();
