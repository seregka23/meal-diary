import { deepEqual } from 'node:assert/strict';
import { describe, it } from 'node:test';

import { AppService } from './app.service';

describe('AppService', () => {
  it('returns only the startup placeholder', () => {
    const service = new AppService();

    deepEqual(service.getStartupPlaceholder(), {
      status: 'ok',
      message: 'Meal Diary API scaffold is running.',
    });
  });
});
