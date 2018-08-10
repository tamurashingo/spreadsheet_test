/**
 * スプレッドシートの情報。
 * スプレッドシートの行をレコードとみなす。
 * そのデータが存在する行を保持する。
 */
export abstract class SpreadsheetVO {
  /**
   * 行。値は1始まり。(rangeで指定する値)
   * B3だったら3を保持する。
   */
  rowId: number;
}
