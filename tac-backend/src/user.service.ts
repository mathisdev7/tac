import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}
  async signup(username: string, name: string | undefined): Promise<boolean> {
    try {
      await this.prismaService.createUser(username, name);
    } catch (error) {
      console.log(error);
      return false;
    }
    return true;
  }
}
