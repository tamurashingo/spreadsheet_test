import { AttendVO } from '../vo/attend.vo';

/**
 * 勤怠情報を扱うDAO
 */
export interface AttendDAO {

  /**
   * 全ての勤怠情報を取得する。
   */
  selectAllAttends(): AttendVO[];

  /**
   * 勤怠情報をスプレッドシートに保存する
   * @param attendVO 勤怠情報
   */
  update(attendVO: AttendVO): void;
}
