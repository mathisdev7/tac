import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient, User } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit(): Promise<void> {
    try {
      await this.$connect();
    } catch (error) {
      console.error('Failed to connect to the database:', error);
    }
  }
  async userExists(username: string): Promise<boolean> {
    const user: User | null = await this.user.findFirst({
      where: { username },
    });
    return user !== null;
  }
  async createUser(username: string, name: string | undefined): Promise<void> {
    await this.user.create({ data: { username, name } });
  }
}
