import { AttendVO } from '../vo/attend.vo';

export interface CalcLogic {
  calc(attend: AttendVO): number
}
