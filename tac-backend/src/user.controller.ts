import { Body, Controller, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly prismaService: PrismaService,
  ) {}

  @Post('signup')
  async signup(
    @Body('username') username: string,
    @Body('name') name: string | undefined,
  ): Promise<object> {
    try {
      const userExists = await this.prismaService.userExists(username);
      if (userExists) {
        throw new Error('Username already exists');
      }
      const result = await this.userService.signup(username, name);
      if (result) {
        return { message: 'signup successful', username, name: name ?? '' };
      } else {
        throw new Error('signup failed');
      }
    } catch (error) {
      console.log(error);
    }
    return { message: 'signup failed', username, name: name ?? '' };
  }
}
