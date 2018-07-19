import { AttendVO } from '../vo/attend.vo';

export interface CalcDAO {
  readAllAttends(): AttendVO[];
  writeWorkHour(idx: number, hour: number);
}
