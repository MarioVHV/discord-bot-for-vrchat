require('dotenv').config();
const {client: WebSocketClient} = require('websocket');
const client = new WebSocketClient();

client.on("connect", (connection) => {
    console.log('WebSocket Client Connected');
    connection.on('error', function (error) {
        console.log("Connection Error: " + error.toString());
    });
    connection.on('close', function () {
        console.log('echo-protocol Connection Closed');
    });
    connection.on('message', function (message) {

    });
})

client.connect(
    `wss://pipeline.vrchat.cloud/?authToken=${process.env.VRC_AUTH_TOKEN}`,
    "echo-protocol",
    null,
    {
        "User-Agent": "Mozilla/5.0 (platform; rv:geckoversion) Gecko/geckotrail Firefox/firefoxversion"
    }
);