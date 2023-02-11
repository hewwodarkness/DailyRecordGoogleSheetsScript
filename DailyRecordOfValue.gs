/*function createTimeDrivenTriggers() {
  // Trigger every 6 hours.
  ScriptApp.newTrigger('myFunction')
      .timeBased()
      .everyHours(1)
      .create();
};
function copyA1toA2onSameSheet() {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.getRange("C:C").setValue(sheet.getRange("J12").getValue());
};

function moveData() {
  // Get handles to Daily and Archive sheets
  var dailySheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Daily');
  var appendSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Archive');
  
  // Create range strings for the rows in Daily and Archive sheets
  var dailySheetRange = "Daily!2:" + dailySheet.getLastRow();
  var archiveLastRow = dailySheet.getLastRow() + appendSheet.getLastRow();
  var archiveAppendRange = "Archive!" + (appendSheet.getLastRow() + 1) + ":" + archiveLastRow;
  
  // Get range of data to copy
  var destRange = dailySheet.getRange(archiveAppendRange);
  
  // Copy the data to the archive sheet
  var sourceDataValues = dailySheet.getRange(dailySheetRange).copyTo(destRange);
  
  // Delete the data from the daily sheet
  dailySheet.getRange(dailySheetRange).deleteCells(SpreadsheetApp.Dimension.ROWS);
}*/

function dailyLog() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sourceSheet = ss.getSheetByName('Daily');
  var logSheet = ss.getSheetByName('Archive');
  var lastRow = logSheet.getLastRow();
  //logSheet.getRange(lastRow + 1, 1).setValue(new Date());  // insert timestamp
  var range = sourceSheet.getDataRange();
  range.copyTo(logSheet.getRange(lastRow + 1, 1), {contentsOnly: true});

  var sourceSheet1 = ss.getSheetByName('DailyS');
  var logSheet1 = ss.getSheetByName('ArchiveS');
  var lastRow1 = logSheet1.getLastRow();
  //logSheet.getRange(lastRow + 1, 1).setValue(new Date());  // insert timestamp
  var range1 = sourceSheet1.getDataRange();
  range1.copyTo(logSheet1.getRange(lastRow1 + 1, 1), {contentsOnly: true});

var sourceSheet2 = ss.getSheetByName('DailyA');
  var logSheet2 = ss.getSheetByName('ArchiveA');
  var lastRow2 = logSheet2.getLastRow();
  //logSheet.getRange(lastRow + 1, 1).setValue(new Date());  // insert timestamp
  var range2 = sourceSheet2.getDataRange();
  range2.copyTo(logSheet2.getRange(lastRow2 + 1, 1), {contentsOnly: true});

var sourceSheet3 = ss.getSheetByName('DailyScore');
  var logSheet3 = ss.getSheetByName('ArchiveScore');
  var lastRow3 = logSheet3.getLastRow();
  //logSheet.getRange(lastRow + 1, 1).setValue(new Date());  // insert timestamp
  var range3 = sourceSheet3.getDataRange();
  range3.copyTo(logSheet3.getRange(lastRow3 + 1, 1), {contentsOnly: true});
}




