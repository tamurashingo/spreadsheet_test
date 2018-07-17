/**
 * 勤怠情報
 */
export class AttendVO {
  /** 開始日時 */
  start: Date;
  /** 終了日時 */
  end: Date;
  /** 休憩時間(昼休みを含む) */
  rest: number;
}
