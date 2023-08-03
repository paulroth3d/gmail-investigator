
function writeLatestSearch(str) {
  var optionsSearch = SpreadsheetApp
    .getActiveSpreadsheet()
    .getSheetByName('Options');
  
  var resultsRange = optionsSearch.getRange('B2');
  resultsRange.setValue(str);
}

/**
 * Writes the results to the results sheet.
 * @param {String[][]} valuesToPush - values to write
 */
function writeToResults(valuesToPush) {
  var cleanValues = valuesToPush && valuesToPush.length > 0
    ? valuesToPush
    : [['A man', 'a Plan', 'Panama']];

  var resultsSheet = SpreadsheetApp
    .getActiveSpreadsheet()
    .getSheetByName('results');

  //resultsSheet.appendRow(cleanValues);
  var resultsRange = resultsSheet.getRange('C2:M');
  resultsRange.clearContent();

  resultsRange = resultsSheet.getRange('C2');

  var firstRow = valuesToPush[0];
  var width = firstRow.length;
  var height = valuesToPush.length;

  resultsRange = resultsRange.offset(0, 0, height, width);
  //resultsRange = resultsSheet.getRange(`C2:M${valuesToPush.length + 1}`);

  resultsRange.setValues(cleanValues);
}
