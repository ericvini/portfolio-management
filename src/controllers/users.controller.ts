import { FastifyReply, FastifyRequest } from "fastify";
import { UsersService } from "@/services/users.service";

export const UsersController = {
  async create(
    req: FastifyRequest<{
      Body: { name: string; email: string; password: string };
    }>,
    reply: FastifyReply,
  ) {
    const user = await UsersService.create(req.body);
    reply.code(201).send(user);
  },

  async findAll(_: FastifyRequest, reply: FastifyReply) {
    const users = await UsersService.findAll();
    reply.send(users);
  },

  async findOne(
    req: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply,
  ) {
    const user = await UsersService.findOne(Number(req.params.id));
    if (user) {
      reply.send(user);
    } else {
      reply.code(404).send({ message: "User not found" });
    }
  },

  async update(
    req: FastifyRequest<{
      Params: { id: string };
      Body: { name?: string; email?: string; password?: string };
    }>,
    reply: FastifyReply,
  ) {
    const user = await UsersService.update(Number(req.params.id), req.body);
    reply.send(user);
  },

  async delete(
    req: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply,
  ) {
    await UsersService.delete(Number(req.params.id));
    reply.send({ message: "User deleted" });
  },
};
