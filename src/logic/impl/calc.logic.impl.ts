import { inject, injectable } from 'inversify';

import { AttendVO } from '../../vo/attend.vo';
import { CalcLogic } from '../calc.logic';
import { CalcDAO } from '../../repository/calc.dao';

import 'reflect-metadata';

@injectable()
export class CalcLogicImpl implements CalcLogic {
  private calcDAO: CalcDAO;

  constructor(
    @inject(Symbol.for("CalcDAO")) calcDAO: CalcDAO
  ) {
    this.calcDAO = calcDAO;
  }

  calc(attend: AttendVO): number {
    return (((attend.end.getTime() - attend.start.getTime()) / 1000) / 60 / 60) - attend.rest;
  }

  readAllAttends(): AttendVO[] {
    return this.calcDAO.readAllAttends();
  }

  saveAttend(attendVO: AttendVO): void {

  }

}

