import { AttendVO } from '../../vo/attend.vo';
import { AttendDAO } from '../../repository/attend.dao';
import { CalcLogic } from '../calc.logic';

export class CalcLogicImpl implements CalcLogic {
  private attendDAO: AttendDAO;

  constructor(attendDAO: AttendDAO) {
    this.attendDAO = attendDAO;
  }

  calc(attend: AttendVO): AttendVO {
    var worktime = (((attend.end.getTime() - attend.start.getTime()) / 1000) / 60 / 60) - attend.rest;
    var result = AttendVO.copy(attend);
    result.work = worktime;
    return result;
  }

  getAllAttends(): AttendVO[] {
    return this.attendDAO.selectAllAttends();
  }

  save(attendVO: AttendVO): void {
    this.attendDAO.update(attendVO);
  }

}

