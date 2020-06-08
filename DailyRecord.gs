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