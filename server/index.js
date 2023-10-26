import { Router } from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import routesPerson from "../routes/persons.js";

// Obtiene la ruta del directorio actual del archivo
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const apiRouter = (app) => {
  const router = Router();
  app.use("/api/v1", router); //general prefix

  router.use("/person", routesPerson); // person resource

  app.use((req, res) => {
    const error404Path = join(__dirname, "..", "static", "404.html"); //
    res.status(404).sendFile(error404Path);
  });
};
