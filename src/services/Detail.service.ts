import { Request } from "express";
import { Detail } from "../entities";
import { ErrorHandler } from "../errors";
import { DetailRepository } from "../repositories";

class DetailService {
  DetailCreator = async (req: Request): Promise<any> => {
    const body = req.body;
    const { Detail } = body;
    const buscado = await DetailRepository.findOne({ Detail: Detail });

    if (buscado) {
      return buscado;
    } else {
      const cosa: Detail = await DetailRepository.save({
        ...body,
      });

      return cosa;
    }
  };

  DetailsLoader = async (req: Request) => {
    let Details: Detail[] = await DetailRepository.all();
    /* Details = Details.sort((a, b) =>
      a.DetailId > b.DetailId ? -1 : a.DetailId < b.DetailId ? 1 : 0
    ); */
    return {
      status: 200,
      Details: Details,
    };
  };

  DetailLoader = async (req: Request) => {
    const Detail: Detail = await DetailRepository.findOne({
      DetailId: req.params.DetailId,
    });
    return { status: 200, Detail: Detail };
  };

  PRDetailsLoader = async (req: Request) => {
    const Detail: Detail = await DetailRepository.findOne({
      DetailId: req.params.DetailId,
    });
    return { status: 200, Detail: Detail };
  };

  DetailEditor = async (req: Request) => {
    const Detail: Detail = await DetailRepository.findOne({
      DetailId: req.params.DetailId,
    });
    const DetailUpdated = {
      ...Detail,
      Detail: req.body.Detail,
    };
    await DetailRepository.save(DetailUpdated);
    return {
      status: 200,
      Detail: DetailUpdated,
    };
  };

  DetailDeletor = async (req: Request) => {
    const Detail: Detail = await DetailRepository.findOne({
      DetailId: req.params.DetailId,
    });

    if (!Detail) {
      throw new ErrorHandler(404, "Detail not found");
    }

    await DetailRepository.delete(req.params.DetailId);

    return {
      status: 200,
      message: "Detail deleted",
    };
  };
}

export default new DetailService();
