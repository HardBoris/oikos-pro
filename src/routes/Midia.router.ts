import { Router } from "express";
import { MidiaController } from "../controllers";

const MidiaRouter = Router();

MidiaRouter.post(
  "/oikos-pro-api/midias/register",
  // "/oikos-pro-api/:companyId/midias/register",
  MidiaController.MidiaCreator
);
MidiaRouter.get(
  "/oikos-pro-api/midias",
  // "/oikos-pro-api/:companyId/midias",
  MidiaController.MidiasLoader
);
MidiaRouter.get(
  "/oikos-pro-api/midias/:midiaId",
  // "/oikos-pro-api/:companyId/midias/:MidiaId",
  MidiaController.MidiaLoader
);

MidiaRouter.patch(
  "/oikos-pro-api/midias/:midiaId",
  // "/oikos-pro-api/:companyId/midias/:MidiaId",
  MidiaController.MidiaEditor
);

MidiaRouter.delete(
  "/oikos-pro-api/midias/:midiaId",
  // "/oikos-pro-api/:companyId/midias/:MidiaId",
  MidiaController.MidiaDeletor
);

export default MidiaRouter;
