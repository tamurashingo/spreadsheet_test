import { SpreadsheetVO } from './spreadsheet.vo';

/**
 * 勤怠情報
 */
export class AttendVO extends SpreadsheetVO {
  /** 開始日時 */
  start: Date;
  /** 終了日時 */
  end: Date;
  /** 休憩時間(昼休みを含む) */
  rest: number;
  /** 労働時間 */
  work: number;

  static copy(src: AttendVO): AttendVO {
    var dst = new AttendVO();
    dst.rowId = src.rowId;
    dst.start = src.start;
    dst.end = src.end;
    dst.rest = src.rest;
    dst.work = src.work;

    return dst;
  }
}
