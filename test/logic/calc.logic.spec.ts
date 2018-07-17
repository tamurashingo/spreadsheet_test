import { AttendVO } from '../../src/vo/attend.vo';
import { CalcLogic } from '../../src/logic/calc.logic';

describe('CalcLogic', () => {
  describe('calc', () => {
    test('10:00-18:00 rest 1 hour must be 7', () => {
      const attend = new AttendVO();
      attend.start = new Date(2018, 7, 17, 10, 0, 0);
      attend.end = new Date(2018, 7, 17, 18, 0, 0);
      attend.rest = 1;
      var logic = new CalcLogic();
      expect(logic.calc(attend)).toBe(7);
    });
    test('10:00-18:30 rest 1 hour must be 7.5', () => {
      const attend = new AttendVO();
      attend.start = new Date(2018, 7, 17, 10, 0, 0);
      attend.end = new Date(2018, 7, 17, 18, 30, 0);
      attend.rest = 1;
      var logic = new CalcLogic();
      expect(logic.calc(attend)).toBe(7.5);
    });
  });
});
