function createTimeDrivenTriggers() {
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
}