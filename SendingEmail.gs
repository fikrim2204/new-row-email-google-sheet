function sendEmails() { 
  // Get the sheet where the data is, in sheet 'system' 
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1") 
  // Get last row on the sheet
  var lastRow = sheet.getLastRow();
  // Get range from first row, first column, number of row, number of columns
  var dataRange = sheet.getRange(lastRow, 1, 1, 5);
  // Get value from data range
  var value = dataRange.getValues();
  for (var row in value) {
    for (var col in value[row]) {
      var emailAddress = "email responder";
      // value of row 1 column 3
      var subject = value[0][3];
      // value of row 1 column 2
      var message = "Dari : " + value[0][1] 
      // value of row 1 column 3
                    + "\n" + "Email : " + value[0][2]
      // value of row 1 column 5
                    + "\n" + value[0][4];
    }
  }
  // Sending Email
  MailApp.sendEmail(emailAddress, subject, message);
}
