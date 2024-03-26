const AWS = require("aws-sdk");
AWS.config.update({ region: "REGION" });
var ddb = new AWS.DynamoDB({ apiVersion: "2012-08-10" });

// tables from env vars
const USER_TABLE = process.env.USER_TABLE;
const CHATROOM_TABLE = process.env.CHATROOM_TABLE;

exports.handler = async (event, context) => {
  console.log(event);
  console.log(context);

  // user ID
  const userID = event.arguments.userID;

  // topic id
  const kbID = event.arguments.topicID;

  // current date, refrence to see when user created profile
  let date = new Date();

  // get user data, analyze, return a priority
  const getUserPriority = async (userID) => {
    let params = {
      TableName: USER_TABLE,
      Key: {
        id: userID,
      },
    };
    await ddbClient.getItem(params, function (err, data) {
      if (err) {
        console.log("Error", err);
      } else {
        console.log("Success", data.Item);
        return data.Item;
      }
    });
  };

  // get chat rooms, rank them into tier system

  // input user and rooms, get the KB to place user into
};
