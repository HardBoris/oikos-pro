import { Request } from "express";
import { Partner } from "../entities";
import { ErrorHandler } from "../errors";
import { PartnerRepository } from "../repositories";

class PartnerService {
  PartnerCreator = async (req: Request): Promise<any> => {
    const body = req.body;

    const partner: Partner = await PartnerRepository.save({
      ...body,
    });

    return partner;
  };

  PartnersLoader = async (req: Request) => {
    let partners: Partner[] = await PartnerRepository.all();
    /* partners = partners.sort((a, b) =>
      a.partnerId > b.partnerId ? -1 : a.partnerId < b.partnerId ? 1 : 0
    ); */
    return {
      status: 200,
      partners: partners,
    };
  };

  PartnerLoader = async (req: Request) => {
    const partner: Partner = await PartnerRepository.findOne({
      partnerId: req.params.partnerId,
    });
    return { status: 200, partner: partner };
  };

  PartnerEditor = async (req: Request) => {
    const partner: Partner = await PartnerRepository.findOne({
      partnerId: req.params.partnerId,
    });
    const partnerUpdated = {
      ...partner,
      partner: req.body.partner,
    };
    await PartnerRepository.save(partnerUpdated);
    return {
      status: 200,
      partner: partnerUpdated,
    };
  };

  PartnerDeletor = async (req: Request) => {
    const partner: Partner = await PartnerRepository.findOne({
      partnerId: req.params.partnerId,
    });

    if (!partner) {
      throw new ErrorHandler(404, "Partner not found");
    }

    await PartnerRepository.delete(req.params.partnerId);

    return {
      status: 200,
      message: "Partner deleted",
    };
  };
}

export default new PartnerService();
