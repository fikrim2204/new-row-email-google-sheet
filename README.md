# new-row-email-google-sheet
Automatically sending email when new row added

Copy paste this code : 
```
function sendEmails() { 
  // Get the sheet where the data is, in sheet 'system' 
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1") 

  var lastRow = sheet.getLastRow();
  var dataRange = sheet.getRange(lastRow, 1, 1, 5);
  var value = dataRange.getValues();
  for (var row in value) {
    for (var col in value[row]) {
      var emailAddress = "maulsana25@gmail.com";
      var subject = value[0][3];
      var message = "Dari : " + value[0][1] 
                    + "\n" + "Email : " + value[0][2]
                    + "\n" + value[0][4];
    }
  }
  MailApp.sendEmail(emailAddress, subject, message);
}
```
<br> And then call this in another script or trigger to run it.

For explanation click [this](https://github.com/fikrim2204/new-row-email-google-sheet/blob/main/SendingEmail.gs)
