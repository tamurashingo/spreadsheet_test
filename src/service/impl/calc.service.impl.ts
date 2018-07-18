import { injectable, inject } from "inversify";

@injectable()
export class CalcServiceImpl implements CalcService {
  private calcDAO: CalcDAO;

  constructor(
    @inject(Symbol.for("CalcDAO")) calcDAO: CalcDAO
  ) {
    this.calcDAO = calcDAO;
  }

  calcAll(): void {
  }
}