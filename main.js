import dotenv from "dotenv";
import websocket from 'websocket'
import vrchat from "vrchat";

dotenv.config();

const WebSocketClient = websocket.client
const client = new WebSocketClient();

const configuration = new vrchat.Configuration({
    username: `${process.env.VRC_USERNAME}`,
    password: `${process.env.VRC_PASSWORD}`
});

const AuthenticationApi = new vrchat.AuthenticationApi(configuration);
const FriendsApi = new vrchat.FriendsApi(configuration);

let onlineFriends = [];
let friendId = {};
AuthenticationApi.getCurrentUser()
    .then(() => {
        FriendsApi.getFriends()
            .then(({ data: friends }) => {
                friends.map((friend) => {
                    if (friend.location.length > 0) {
                        friendId[friend.id] = friend.displayName;
                        onlineFriends.push(friend.displayName)
                    }
                })
                console.log(onlineFriends)
            })
    })

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

