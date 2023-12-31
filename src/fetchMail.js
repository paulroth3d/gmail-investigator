
/**
 * Fetches the list of mail items
 */
function fetchMail() {
  promptGmail();
}

function promptGmail() {
  var ui = SpreadsheetApp.getUi(); // Same variations.
  var promptTitle = getPromptTitle();
  var promptMessage = getPromptMessage();

  var result = ui.prompt(
    promptTitle,
    promptMessage,
    ui.ButtonSet.OK_CANCEL);
  
  var button = result.getSelectedButton();
  var text = result.getResponseText();

  if (!text) {
    text = getDefaultQuery();
  }

  if (button == ui.Button.OK) {
    queryGmail(text);
  }
}

function queryGmail(query) {
  var threads = GmailApp.search(query);//, 0, 999);
  var results = threads.map(thread => {
    let messages = thread.getMessages();

    let lastMessage = messages[0]; // messages[messages.length - 1];
    let sender = lastMessage.getFrom();
    let senderList = parseSender(sender);
    let senderName = senderList[0];
    let senderEmail = senderList[1];
    let senderDomain = senderList[2];
    
    return [
      thread.getId(),
      lastMessage.getHeader("Message-ID") || lastMessage.getId(),
      thread.getLastMessageDate().toISOString(),
      thread.getFirstMessageSubject(),
      sender,
      senderName,
      senderEmail,
      senderDomain,
      lastMessage.getReplyTo(),
      thread.getMessageCount(),
      thread.getLabels().map(label => label.getName())
    ];
  });
  writeLatestSearch(query);
  writeToResults(results);
}
