import express from "express";
import serverless from "serverless-http";
import { apiRouter } from "./server/index.js";
const app = express();
app.use(express.json());

const port = process.env.PORT ?? 3000;
// app.disable('x-powered-by')

app.get("/", (req, res) => {
  res.send({ success: true, message: "Hello from root!" });
});

apiRouter(app);

const server = app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto: ${server.address().port}.
  http://localhost:${server.address().port}`);
});

export const handler = serverless(app);

