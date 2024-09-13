
function getOptionsSettings() {
  var optionsSearch = SpreadsheetApp
    .getActiveSpreadsheet()
    .getSheetByName('Options');
  
  var resultsRange = optionsSearch.getRange('D1:G2').getValues();
  var optionsMap = new Map(transpose(resultsRange));
  return optionsMap;
}

function setOptionsSettings(optionsMap) {
  optionsMap.set('Query Offset', optionsMap.get('Page Size') * optionsMap.get('Page Offset'));

  var mapResults = [...optionsMap.entries()];
  var mapResultsTransposed = transpose(mapResults);

  var optionsSearch = SpreadsheetApp
    .getActiveSpreadsheet()
    .getSheetByName('Options');

  optionsSearch.getRange('D1:G2').setValues(mapResultsTransposed);
}

function clearAllResults() {
  var resultsSheet = SpreadsheetApp
    .getActiveSpreadsheet()
    .getSheetByName('results');

  //resultsSheet.appendRow(cleanValues);
  var resultsRange = resultsSheet.getRange('C2:M');
  resultsRange.clearContent();
}

/**
 * Writes the results to the results sheet.
 * @param {String[][]} valuesToPush - values to write
 * @param {Number} pageOffset - which page we are currently on
 * @param {Number} pageSize - how many rows per page
 */
function writeToResults(valuesToPush, pageOffset, pageSize) {
  var cleanValues = valuesToPush && valuesToPush.length > 0
    ? valuesToPush
    : [['A man', 'a Plan', 'Panama']];

  var resultsSheet = SpreadsheetApp
    .getActiveSpreadsheet()
    .getSheetByName('results');

  var resultsRange = resultsSheet.getRange('C2');

  var firstRow = cleanValues[0];
  var width = firstRow.length;
  var height = cleanValues.length;

  var rowOffset = pageOffset * pageSize;

  resultsRange = resultsRange.offset(rowOffset, 0, height, width);
  //resultsRange = resultsSheet.getRange(`C2:M${valuesToPush.length + 1}`);

  resultsRange.setValues(cleanValues);
}
