import { AttendDAO } from '../attend.dao';
import { AttendVO } from '../../vo/attend.vo';

export class AttendDAOImpl implements AttendDAO {

  selectAllAttends(): AttendVO[] {
    var result: AttendVO[] = new Array();
    var attendRange = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0].getRange("A:D");
    var attendValues = attendRange.getValues();

    // 先頭行はヘッダなので飛ばすために1から始める
    for (var row: number = 1; row < attendRange.getLastRow(); row++) {
      var start = attendValues[row][0] as string;
      if (start == null || start.length == 0) {
        break;
      }

      var attendVO = new AttendVO();
      attendVO.rowId = row + 1; // 配列は0始まり、rangeは1始まりのため1を足しておく
      attendVO.start = new Date(start);
      attendVO.end = new Date(attendValues[row][1] as string);
      attendVO.rest = attendValues[row][2] as number;

      result.push(attendVO);
    }

    return result;
  }

  update(attendVO: AttendVO): void {
    SpreadsheetApp.getActiveSpreadsheet().getSheets()[0].getRange(attendVO.rowId, 4).setValue(attendVO.work);
  }
}
