import { AttendVO } from '../vo/attend.vo';

export class CalcLogic {
  calc(attend: AttendVO): number {
    return (((attend.end.getTime() - attend.start.getTime()) / 1000) / 60 / 60) - attend.rest;
  }

}
