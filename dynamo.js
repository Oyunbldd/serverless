'use strict';
const AWS= require('aws-sdk');
AWS.config.update({
    region:'us-west-1'
})
let dynamodb = new AWS.DynamoDB.DocumentClient();
//usign marshall
// let dynamodb = new AWS.DynamoDB({apiVersion:"2012-08-10"});
// module.exports.hello = async (event) => {
//     const marshalledData = AWS.DynamoDB.Converter.marshall({
//         user_id:'u123',
//         game_id:'csgo',
//         player_score:10,
//         timestamp:'03/04/2022'
//     });
//     let params = {
//         Item:{
//             ...marshalledData,
//         },
//         TableName:'Games'
//     }
//     dynamodb.putItem(params, function(err, data) {
//         if (err) console.log(err, err.stack); // an error occurred
//         else     console.log(data);           // successful response
//       });
// };

// module.exports.hello = async (event) => {
//     var params = {
//         TableName : 'Games',
//         Item: {
//            user_id: 'zpo',
//            game_id:'dota2',
//            player_score : 1,
//            timestamp:'02/04/2022'
//         }
//       };
//       dynamodb.put(params, function(err, data) {
//         if (err) console.log(err);
//         else console.log(data);
//       });
// };


//DynamoDb Table read all data using Scan  =>https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html#scan-property
// module.exports.hello = async (event) => {
//   let params={
//       TableName:'Games'
//   };
//    dynamodb.scan(params,function(err,data){
//        if(err) console.log(err);
//        else console.log(data);
//    })
// };
//read data  keycondition
// module.exports.hello = async (event) => {
//     let params={
//         TableName:'Games',
//         KeyConditionExpression : 'user_id = :value',
//         ExpressionAttributeValues : {':value': "Oyunbold"},
//     };
//      dynamodb.query(params,function(err,data){
//          if(err) console.log(err);
//          else console.log(data);
//      })
//   };
module.exports.hello = async (event) => {
    let params={
        TableName:'Games',
        IndexName:'user_id-player_score-index',
        KeyConditionExpression : 'user_id = :value and player_score  between :min_score and :max_score   ',
        ExpressionAttributeValues : {':value': "Oyunbold",":min_score":12,":max_score":20},
    };
     dynamodb.query(params,function(err,data){
         if(err) console.log(err);
         else console.log(data);
     })
  };
  