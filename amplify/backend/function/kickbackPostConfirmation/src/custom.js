// AWS SDK for V3
const { DynamoDBClient, PutItemCommand } = require("@aws-sdk/client-dynamodb");
const ddbClient = new DynamoDBClient();

exports.handler = async (event, context) => {
	let date = new Date();

	if (event.request.userAttributes.sub) {
		let params = {
			TableName: process.env.USERTABLE,
			Item: {
				id: { S: event.request.userAttributes.sub },
				__typename: { S: "User" },
				username: { S: event.userName },
				email: { S: event.request.userAttributes.email },
				createdAt: { S: date.toISOString() },
				updatedAt: { S: date.toISOString() },
			},
		};
		try {
			const data = await ddbClient.send(new PutItemCommand(params));
			console.log({ data });
		} catch (err) {
			console.log("Error", err);
		}
	} else {
		console.log("Error: nothing written to DB");
		context.done(null, event);
	}
};
