import 'jest';

import { AttendVO } from '../../../src/vo/attend.vo';
import { CalcLogicImpl } from '../../../src/logic/impl/calc.logic.impl';
import { CalcDAO } from '../../../src/repository/calc.dao';

import { Container, injectable } from 'inversify';


@injectable()
class CalcDAOMock implements CalcDAO {
  readAllAttends(): AttendVO[] {
    return null;
  }
  writeWorkHour(idx: number, hour: number): void {
  }
}

const myContainer = new Container();
myContainer.bind<CalcDAO>(Symbol.for("CalcDAO")).to(CalcDAOMock);
myContainer.bind<CalcLogicImpl>(Symbol.for("CalcLogic")).to(CalcLogicImpl);


describe('CalcLogic', () => {
  describe('calc', () => {
    test('10:00-18:00 rest 1 hour must be 7', () => {
      const attend = new AttendVO();
      attend.start = new Date(2018, 7, 17, 10, 0, 0);
      attend.end = new Date(2018, 7, 17, 18, 0, 0);
      attend.rest = 1;
      var logic = myContainer.get<CalcLogicImpl>(Symbol.for("CalcLogic"));
      expect(logic.calc(attend)).toBe(7);
    });
    test('10:00-18:30 rest 1 hour must be 7.5', () => {
      const attend = new AttendVO();
      attend.start = new Date(2018, 7, 17, 10, 0, 0);
      attend.end = new Date(2018, 7, 17, 18, 30, 0);
      attend.rest = 1;
      //var logic = new CalcLogicImpl(new CalcDAOMock());
      var logic = myContainer.get<CalcLogicImpl>(Symbol.for("CalcLogic"));
      expect(logic.calc(attend)).toBe(7.5);
    });
  });
});
