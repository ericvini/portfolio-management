import { FastifyInstance } from "fastify";
import { UsersController } from "../controllers/users.controller";

export async function userRoutes(app: FastifyInstance) {
  app.post("/users", UsersController.create);
  app.get("/users", UsersController.findAll);
  app.get("/users/:id", UsersController.findOne);
  app.put("/users/:id", UsersController.update);
  app.delete("/users/:id", UsersController.delete);
}
