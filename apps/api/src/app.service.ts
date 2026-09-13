import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getStartupPlaceholder() {
    return {
      status: 'ok',
      message: 'Meal Diary API scaffold is running.',
    };
  }
}
