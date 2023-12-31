
/**
 * Converts an email Sender String into three values
 * @param {String} senderStr - The sender name from emails, ex: "Paul <paul@example.com>"
 * @returns {String[]} - [Name, Email, Email Domain]
 */
function parseSender(senderStr) {
  var cleanStr = senderStr || '';
  var splitMatch = cleanStr.match(/<([^>]+)>/);
  var results = ['', '', ''];

  if (splitMatch) {
    let splitName = cleanStr.split('<').shift();
    let splitEmail = splitMatch[1];
    let splitDomain = (splitEmail || '')
      .split('@').pop();
    
    results = [splitName, splitEmail, splitDomain]
      .map(s => s.trim());
  }
  return results;
}
