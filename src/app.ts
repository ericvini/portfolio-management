import Fastify from "fastify";
import { userRoutes } from "./routes/users.routes";
import { PrismaClient } from "@prisma/client";

const app = Fastify({ logger: true });
const prisma = new PrismaClient();

prisma.user.create({
  data: {
    email: "john.doe@example.com",
    name: "John Doe",
    password: "securepassword",
  },
});

app.register(userRoutes);

export default app;
