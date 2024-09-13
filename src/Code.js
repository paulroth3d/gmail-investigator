// Use this code for Google Docs, Slides, Forms, or Sheets.
function onOpen() {
  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
      .createMenu('Gmail Explorer')
      .addItem('Fetch Query', 'fetchMail')
      .addItem('Fetch Next', 'fetchNext')
      .addSeparator()
      .addItem('Clear', 'clearAndReset')
      //.addItem('Increment Page', 'incrementPage')
      //.addItem('Test Alert', 'showAlert')
      .addToUi();
}

function clearAndReset() {
  var optionSettings = getOptionsSettings();
  optionSettings.set('Page Offset', 0);
  setOptionsSettings(optionSettings);

  clearAllResults();
}

function showAlert() {
  var optionSettings = getOptionsSettings();
  var optionsEntries = [...optionSettings.entries()];
  SpreadsheetApp.getUi().alert('OptionsMap:' + JSON.stringify(optionsEntries));
}

/**
 * Fetches the list of mail items
 */
function fetchMail() {
  promptGmail();
}

function fetchNext() {
  retrieveNext();
}

function incrementPage() {
  var optionSettings = getOptionsSettings();
  optionSettings.set('Page Offset', optionSettings.get('Page Offset') + 1);
  setOptionsSettings(optionSettings);
}

/*
function openDialog() {
  var html = HtmlService.createHtmlOutputFromFile('Index');
    SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
      .showModalDialog(html, 'Dialog title');
}
*/

function showPrompt() {
  var ui = SpreadsheetApp.getUi(); // Same variations.
  var promptTitle = getPromptTitle();
  var promptMessage = getPromptMessage();

  var result = ui.prompt(
      promptTitle,
      promptMessage,
      ui.ButtonSet.OK_CANCEL);

  // Process the user's response.
  var button = result.getSelectedButton();
  var text = result.getResponseText();
  if (button == ui.Button.OK) {
    // User clicked "OK".
    ui.alert('Your name is ' + text + '.');
  } else if (button == ui.Button.CANCEL) {
    // User clicked "Cancel".
    ui.alert('I didn\'t get your name.');
  } else if (button == ui.Button.CLOSE) {
    // User clicked X in the title bar.
    ui.alert('You closed the dialog.');
  }
}