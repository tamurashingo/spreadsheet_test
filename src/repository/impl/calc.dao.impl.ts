import { injectable } from 'inversify';
import { CalcDAO } from '../calc.dao';
import { AttendVO } from '../../vo/attend.vo';
import 'google-apps-script';


@injectable()
export class CalcDAOImpl implements CalcDAO {
  private spreadsheet: GoogleAppsScript.Spreadsheet.Spreadsheet;
  private sheet: GoogleAppsScript.Spreadsheet.Sheet;

  constructor() {
    this.spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    this.sheet = this.spreadsheet.getSheets()[0];
  }

  readAllAttends(): AttendVO[] {
    var rowNum = this.sheet.getLastRow() - 1;
    var range = this.sheet.getRange(2, 1, rowNum);
    var values = range.getValues();
    var attendVOList: AttendVO[] = new Array();

    for (var ix = 0; ix < rowNum; ix++) {
      var attendVO = new AttendVO();
      attendVO.start = new Date(values[0][ix].toString());
      attendVO.end = new Date(values[1][ix].toString());
      attendVO.rest = Number.parseInt(values[2][ix].toString());
      attendVOList.push(attendVO);
    }

    return attendVOList;
  }

  writeWorkHour(idx: number, hour: number): void {
    // sheet: 1~
    // idx: 0~
    this.sheet.getRange(idx + 2, 4).setValue(hour);
  }


}
