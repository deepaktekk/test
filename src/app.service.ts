import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! WIth love';
  }
  getHello2(): string {
    return "Welcome "
  }
}
