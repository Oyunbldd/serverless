'use strict';
var randomWords = require('random-words');
module.exports.hello = async (event) => {
let value=Number(event.queryStringParameters.word);

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        word:randomWords(value),
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
