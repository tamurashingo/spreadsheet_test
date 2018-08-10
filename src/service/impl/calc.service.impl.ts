import { CalcLogic } from '../../logic/calc.logic';
import { AttendVO } from '../../vo/attend.vo';

export class CalcServiceImpl implements CalcService {
  private calcLogic: CalcLogic;
  
  constructor(calcLogic: CalcLogic) {
    this.calcLogic = calcLogic;
  }

  calcAll(): void {
    var attendVOs: AttendVO[] = this.calcLogic.getAllAttends();

    attendVOs.forEach((attendVO) => {
      var result = this.calcLogic.calc(attendVO);
      this.calcLogic.save(result);
    });
  }
}
