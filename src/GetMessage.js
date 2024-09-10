function getPromptTitle() {
  return 'GMail Search Query';
}

function getPromptMessage() {
  const defaultQuery = getDefaultQuery();
  return `Default is: "${defaultQuery}"`;
}

function getDefaultQuery() {
  return 'is:unread in:inbox';
}
