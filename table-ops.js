const AWS = require("aws-sdk");
AWS.config.update({region: 'us-east-2'});


const dynamodb = new AWS.DynamoDB();

/* dynamodb.listTables(function (err, data) {
    if (err) {
        console.error(err);
    } else {
        console.log("Tables: ", data);
    }
}); */


/* dynamodb.createTable({
    TableName: "td_notes_sdk",
    AttributeDefinitions: [
        {
            AttributeName: "user_id",
            AttributeType: "S"
        },
        {
            AttributeName: "timestamp",
            AttributeType: "N"
        }
    ],
    KeySchema: [
        {
            AttributeName: "user_id",
            KeyType: "HASH"
        },
        {
            AttributeName: "timestamp",
            KeyType: "RANGE"
        }
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1
    }
}, function (err, data) {
    if (err) {
        console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
    }
}); */

const docClient = new AWS.DynamoDB.DocumentClient();
/* docClient.put({
    TableName: "td_notes_sdk",
    Item: {
        user_id: "887854hjhjhb",
        timestamp: 1585699503,
        title: "Second Value",
        content: "Random text"
    }
}, function (err, data) {
    if (err) {
        console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Added item:", JSON.stringify(data, null, 2));
    }
});  */

/* docClient.update({
    TableName: "td_notes_sdk",
    Key: {
        user_id: "887854hjhjhb",
        timestamp: 1585699503
    },
    UpdateExpression: "set title = :t, content = :c",
    ExpressionAttributeValues: {
        ":t": "Updated Title",
        ":c": "Updated content"
    }
}, function (err, data) {
    if (err) {
        console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
    }
}); */
