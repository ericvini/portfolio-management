import { UsersRepository } from "../repositories/users.repository";
import { User } from "@prisma/client";

export const UsersService = {
  async create(data: Omit<User, "id">): Promise<User> {
    return UsersRepository.create(data);
  },

  async findAll(): Promise<User[]> {
    return UsersRepository.findAll();
  },

  async findOne(id: number): Promise<User | null> {
    return UsersRepository.findById(id);
  },

  async update(
    id: number,
    data: Partial<Omit<User, "id">>,
  ): Promise<User | null> {
    return UsersRepository.update(id, data);
  },

  async delete(id: number): Promise<void> {
    return UsersRepository.delete(id);
  },
};
