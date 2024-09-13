
/**
 * Converts an email Sender String into three values
 * @param {String} senderStr - The sender name from emails, ex: "Paul <paul@example.com>"
 * @returns {String[]} - [Name, Email, Email Domain]
 */
function parseSender(senderStr) {
  var cleanStr = senderStr || '';
  var splitMatch = cleanStr.match(/<([^>]+)>/);
  var results = ['', '', ''];
  var findDomain = (str) => str.split('.').slice(-2).join('.');

  let splitName = '';
  let splitEmail = senderStr;

  if (splitMatch) {
    splitName = cleanStr.split('<').shift();
    splitEmail = splitMatch[1];
  }
  let splitDomain = (splitEmail || '')
    .split('@').pop();
  
  let mainDomain = (splitDomain || '').split('.').slice(-2).join('.');
  
  results = [splitName, splitEmail, splitDomain, mainDomain]
    .map(s => s.trim());

  return results;
}

function createArray(len, fillFn) {
    var results = new Array(len).fill();
    return (fillFn) ? results.map(fillFn) : results;
}

/**
 * Transpose an aray of values
 * @param (String[][]) array2d -
 * @returns {String[][]}
 */
function transpose(array2d) {
  var cleanArray = Array.isArray(array2d[0]) ? array2d : [array2d];
  var oldRowCount = cleanArray.length;
  var oldColCount = cleanArray[0].length;
  var newRowCount = oldColCount;
  var newColCount = oldRowCount;
  var results = createArray(newRowCount, () => createArray(newColCount, null));
  for (var i = 0; i < oldRowCount; i++) {
    for (var j = 0; j < oldColCount; j++) {
      //console.log({ i, j, results: results[j][i], cleanArray: cleanArray[i][j] });
      results[j][i] = cleanArray[i][j];
    }
  }
  return results;
}
