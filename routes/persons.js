import { Router } from "express";
import { PersonController } from "../controllers/persons.js";

const router = Router();

router.get("/:id", PersonController.getPerson);

router.get("/:id/mother", PersonController.getMother);

router.get("/:id/father", PersonController.getFather);

router.get("/:id/spouse", PersonController.getSpouse);

router.get("/:id/brothers", PersonController.getBrothers);

router.get("/:id/sisters", PersonController.getSisters);

router.get("/:id/siblings", PersonController.getSiblings);

export default router;
