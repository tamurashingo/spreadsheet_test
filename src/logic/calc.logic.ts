import { AttendVO } from '../vo/attend.vo';

/**
 * 勤怠関連のロジック
 */
export interface CalcLogic {
  /**
   * 勤務時間の計算を行う
   * @param attendVO 勤怠情報
   */
  calc(attendVO: AttendVO): AttendVO;

  /**
   * すべての勤怠情報を取得する
   */
  getAllAttends(): AttendVO[];

  /**
   * 勤怠情報を保存する
   * @param attendVO 勤怠情報
   */
  save(attendVO: AttendVO): void;
}

