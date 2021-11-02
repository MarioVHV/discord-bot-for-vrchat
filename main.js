import dotenv from "dotenv";
import websocket from 'websocket'
import axios from "axios";
import vrchat from "vrchat";
import moment from 'moment';

dotenv.config();
axios.defaults.headers = {
    'Content-Type': 'application/json',
    Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`
}

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

const updateDiscord = () => {
    axios({
        method: 'patch',
        url: `https://discord.com/api/channels/${process.env.DISCORD_CHANNEL_ID}/messages/${process.env.DISCORD_MESSAGE_ID}`,
        data: {
            "content": `Currently Online (Last Updated: ${moment().format('LTS')}): ${onlineFriends.map((friend) => {
                return `<:6164lightgreensmalldot:904307577192607754>${friend}`
            })}`
        }
    });
}

AuthenticationApi.getCurrentUser()
    .then(() => {
        FriendsApi.getFriends()
            .then(({ data: friends }) => {
                friends.map((friend) => {
                    friendId[friend.id] = friend.displayName;
                    if (friend.location.length > 0) {
                        onlineFriends.push(friend.displayName);
                    }
                })
                console.log(onlineFriends);
                updateDiscord();
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
        let parsed = JSON.parse(message.utf8Data);
        let { type, content } = parsed;
        content = JSON.parse(content);

        if (type === "friend-offline") {
            console.log(`${friendId[content.userId]} has gone offline.`);
            onlineFriends = onlineFriends.filter((friend) => {
                return friend !== `${friendId[content.userId]}`;
            })
            console.log(onlineFriends);
            updateDiscord();
        }

        if (type === "friend-online") {
            console.log(`${content.user.displayName} has gone online.`);
            onlineFriends.push(content.user.displayName)
            console.log(onlineFriends)
            updateDiscord();
        }

        if (type === "friend-active") {
            console.log(`${content.user.displayName} has gone active.`)
        }
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

