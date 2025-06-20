import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

export const UsersRepository = {
  async create(user: Omit<User, "id">): Promise<User> {
    return await prisma.user.create({
      data: user,
    });
  },

  async findAll(): Promise<User[]> {
    return await prisma.user.findMany();
  },

  async findById(id: number): Promise<User | null> {
    return await prisma.user.findUnique({
      where: { id },
    });
  },

  async update(
    id: number,
    data: Partial<Omit<User, "id">>,
  ): Promise<User | null> {
    return await prisma.user.update({
      where: { id },
      data,
    });
  },

  async delete(id: number): Promise<void> {
    await prisma.user.delete({
      where: { id },
    });
  },
};
