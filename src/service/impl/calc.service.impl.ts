import { inject, injectable } from "inversify";
import { CalcLogic } from '../../logic/calc.logic';

@injectable()
export class CalcServiceImpl implements CalcService {
  private calcLogic: CalcLogic;
  
  constructor(
    @inject(Symbol.for("CalcLogic")) calcLogic: CalcLogic
  ) {
    this.calcLogic = calcLogic;
  }

  calcAll(): void {
  }
}
