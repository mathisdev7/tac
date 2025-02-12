import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getData(param: string): string {
    return 'Hello World! ' + param;
  }
}
