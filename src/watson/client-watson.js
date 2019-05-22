const AssistantV1 = require('ibm-watson/assistant/v1');

const watsonAssistant = new AssistantV1({
  version: '22-05-2019',
  iam_apikey: 'LNU3eGMtyLcjFhTUaaph-QdR403Bhe_4K2f-S1N8thFe',
  url: 'https://gateway.watsonplatform.net/assistant/api',
  disable_ssl_verification: true,
});

module.exports = watsonAssistant;
