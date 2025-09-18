function doGet() {
  var sheet =
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Giay-Chung-Nhan"); // Đổi "Sheet1" thành tên sheet của bạn
  var data = sheet.getDataRange().getValues();

  var jsonData = [];
  for (var i = 1; i < data.length; i++) {
    jsonData.push({
      Name: data[i][1], // Giả sử cột 2 là tên
      Class: data[i][2], // Giả sử cột 3 là lớp
    });
  }

  return ContentService.createTextOutput(JSON.stringify(jsonData)).setMimeType(
    ContentService.MimeType.JSON
  );
}
/* sau đấy ấn triển khai -> ứng dụng web -> triển khai
https://script.google.com/macros/s/your-api-key/exec       // your-api-key là mã ID của bạn   
*/