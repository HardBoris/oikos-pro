import { Request } from "express";
import { Element } from "../entities";
import { ErrorHandler } from "../errors";
import { elementRepository } from "../repositories";

class ElementService {
  ElementCreator = async (req: Request): Promise<any> => {
    const body = req.body;
    const { element } = body;
    const buscado = await elementRepository.findOne({ element: element });

    if (buscado) {
      return buscado;
    } else {
      const cosa: Element = await elementRepository.save({
        ...body,
      });

      return cosa;
    }
  };

  ElementsLoader = async (req: Request) => {
    let elements: Element[] = await elementRepository.all();
    /* elements = elements.sort((a, b) =>
      a.elementId > b.elementId ? -1 : a.elementId < b.elementId ? 1 : 0
    ); */
    return {
      status: 200,
      elements: elements,
    };
  };

  ElementLoader = async (req: Request) => {
    const element: Element = await elementRepository.findOne({
      elementId: req.params.elementId,
    });
    return { status: 200, element: element };
  };

  ElementEditor = async (req: Request) => {
    const element: Element = await elementRepository.findOne({
      elementId: req.params.elementId,
    });
    const elementUpdated = {
      ...element,
      element: req.body.element,
    };
    await elementRepository.save(elementUpdated);
    return {
      status: 200,
      element: elementUpdated,
    };
  };

  ElementDeletor = async (req: Request) => {
    const element: Element = await elementRepository.findOne({
      elementId: req.params.elementId,
    });

    if (!element) {
      throw new ErrorHandler(404, "Element not found");
    }

    await elementRepository.delete(req.params.elementId);

    return {
      status: 200,
      message: "Element deleted",
    };
  };
}

export default new ElementService();
