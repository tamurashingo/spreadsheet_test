import { injectable } from 'inversify';
import 'google-apps-script';


@injectable()
export class CalcDAOImpl implements CalcDAO {
  private spreadsheet: GoogleAppsScript.Spreadsheet.Spreadsheet;
  private sheet: GoogleAppsScript.Spreadsheet.Sheet;

  constructor() {
    this.spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    this.sheet = this.spreadsheet.getSheets()[0];
  }

  read(): void {

  }
}
