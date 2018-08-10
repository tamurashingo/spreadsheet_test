import 'jest';

import { AttendDAO } from '../../../src/repository/attend.dao';
import { AttendVO } from '../../../src/vo/attend.vo';
import { CalcLogicImpl } from '../../../src/logic/impl/calc.logic.impl';

describe('CalcLogic', () => {
  describe('calc', () => {
    test('10:00-18:00 rest 1 hour must be 7', () => {
      const attend = new AttendVO();
      attend.start = new Date(2018, 7, 17, 10, 0, 0);
      attend.end = new Date(2018, 7, 17, 18, 0, 0);
      attend.rest = 1;
      var logic = new CalcLogicImpl({} as AttendDAO);
      var result = logic.calc(attend);
      expect(result).toBeInstanceOf(AttendVO);
      expect(result.work).toBe(7);
    });
    test('10:00-18:30 rest 1 hour must be 7.5', () => {
      const attend = new AttendVO();
      attend.start = new Date(2018, 7, 17, 10, 0, 0);
      attend.end = new Date(2018, 7, 17, 18, 30, 0);
      attend.rest = 1;
      var logic = new CalcLogicImpl({} as AttendDAO);
      var result = logic.calc(attend);
      expect(result).toBeInstanceOf(AttendVO);
      expect(result.work).toBe(7.5);
    });
  });
});
