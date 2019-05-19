const AssistantV1 = require('ibm-watson/assistant/v1');

const watsonAssistant = new AssistantV1({
  version: '19-05-2019',
  iam_apikey: '0othOkVyt01CjuZBHWIYrxKrpb8m21zWxE3N3hDp5Jjh',
  url: 'https://gateway.watsonplatform.net/assistant/api'
});

module.exports = watsonAssistant;
