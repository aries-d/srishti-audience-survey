const SPREADSHEET_ID = '17B5MPqeBEhuw1qYQDjmJhwVHKPFrZPBebcP209BDF60';
function doPost(e) {
  const payload = JSON.parse(e.postData.contents);
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheetByName(payload.sheet) || ss.insertSheet(payload.sheet);
  if (sheet.getLastRow() === 0) sheet.appendRow(Object.keys(payload));
  const headers = sheet.getRange(1,1,1,sheet.getLastColumn()).getValues()[0];
  sheet.appendRow(headers.map(h => payload[h] || ''));
  return ContentService.createTextOutput(JSON.stringify({ok:true})).setMimeType(ContentService.MimeType.JSON);
}
function setup() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  [['Audience Responses',['sheet','craft','feeling','format','action','completed_at']],['Post Ideas Responses',['sheet','idea1','idea2','hook','more','gap','completed_at']]].forEach(([name,headers]) => {
    const s=ss.getSheetByName(name)||ss.insertSheet(name);
    if(s.getLastRow()===0)s.appendRow(headers);
  });
}