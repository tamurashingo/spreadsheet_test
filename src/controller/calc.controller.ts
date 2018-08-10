export class CalcController {
  private calcService: CalcService;

  constructor(calcService: CalcService) {
    this.calcService = calcService;
  }

  calcAll() {
    this.calcService.calcAll();
  }
}