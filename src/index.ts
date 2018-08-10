import { AttendDAOImpl } from "./repository/impl/attend.dao.impl";
import { CalcServiceImpl } from "./service/impl/calc.service.impl";
import { CalcLogicImpl } from "./logic/impl/calc.logic.impl";
import { CalcController } from "./controller/calc.controller";

declare var global: any;

var attendDAO = new AttendDAOImpl();
var calcLogic = new CalcLogicImpl(attendDAO);
var calcService = new CalcServiceImpl(calcLogic);
var calcController = new CalcController(calcService);

global.calc = (): void => {
  calcController.calcAll();
};


global.onOpen = (): void => {
  var ui = SpreadsheetApp.getUi();
  var menu = ui.createMenu('勤怠管理');
  menu.addItem('計算', 'calc');
  menu.addToUi();
};
