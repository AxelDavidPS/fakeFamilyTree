import { PersonModel } from "../models/person.js";

export class PersonController {
  static async getPerson(req, res) {
    const id = req.params.id;
    const message = await PersonModel.getPerson(id);
    res.status(200).json({ success: true, data: message });
  }

  static async getMother(req, res) {
    const id = req.params.id;
    const message = await PersonModel.getMother(id);
    res.status(200).json({ success: true, data: message });
  }

  static async getFather(req, res) {
    const id = req.params.id;
    const message = await PersonModel.getFather(id);
    res.status(200).json({ success: true, data: message });
  }

  static async getBrothers(req, res) {
    const id = req.params.id;
    const message = await PersonModel.getBrothers(id);
    res.status(200).json({ success: true, data: message });
  }

  static async getSisters(req, res) {
    const id = req.params.id;
    const message = await PersonModel.getSisters(id);
    res.status(200).json({ success: true, data: message });
  }

  static async getSiblings(req, res) {
    const id = req.params.id;
    const message = await PersonModel.getSiblings(id);
    res.status(200).json({ success: true, data: message });
  }

  static async getSpouse(req, res) {
    const id = req.params.id;
    const message = await PersonModel.getSpouse(id);
    res.status(200).json({ success: true, data: message });
  }
}
