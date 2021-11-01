import axios from "axios";
import websocket from "websocket"
import vrchat from "vrchat";
const WebSocketClient = websocket.client
const client = new WebSocketClient();

axios.defaults.headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bot xx.Xr4SrQ.xx'
}

const configuration = new vrchat.Configuration({
    username: "xxx",
    password: "xx"
});

const AuthenticationApi = new vrchat.AuthenticationApi(configuration);
const FriendsApi = new vrchat.FriendsApi(configuration);

let initialCheck = []
let onlineFriends = [];
let friendsIds = {};

AuthenticationApi.getCurrentUser().then(() => {
    FriendsApi.getFriends()
    .then(({data}) => {
        initialCheck = data;
        initialCheck.map((user) => {
            if (user.location.length > 1) {

                friendsIds[user.id] = user.displayName;
                onlineFriends.push(user.displayName)
            }
        })
        axios({
            method: 'patch',
            url: 'https://discord.com/api/channels/xxx/messages/xxx',
            data: {
                "content": `Currently Online: ${onlineFriends.map((friend) => {
                        return `<:6164lightgreensmalldot:904307577192607754>${friend}`
                })}`
            }
        });
        // console.log(onlineFriends)
        // console.log(friendsIds)
    })
});

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
        let {type, content} = parsed;
        content = JSON.parse(content); // Possible crash - content may come already as JSON
        console.log(type)

        if (type === "friend-offline") { // Need to create condition to check if user location isn't empty (active)
            // console.log(friendsIds);
            // console.log(content.userId);
            // console.log(`${friendsIds[content.userId]} has gone offline.`);
            // axios({
            //     method: 'post',
            //     url: 'https://discord.com/api/channels/xxx/messages',
            //     data: {
            //         "content": `${friendsIds[content.userId]} has gone offline.`
            //     }
            // });
            AuthenticationApi.getCurrentUser().then(() => {
                FriendsApi.getFriends()
                .then(({data}) => {
                    initialCheck = data;
                    onlineFriends = [];
                    initialCheck.map((user) => {
                        if (user.location.length > 1) {
                            friendsIds[user.id] = user.displayName;
                            onlineFriends.push(user.displayName)
                        }
                    })
                    if (content.user.location.length > 0) {
                        axios({
                            method: 'patch',
                            url: 'https://discord.com/api/channels/xxxx/messages/xxxx',
                            data: {
                                "content": `Currently Online: ${onlineFriends.map((friend) => {
                                        return `<:6164lightgreensmalldot:904307577192607754>${friend}`
                                })}`
                            }
                        });
                    }
                    // console.log(onlineFriends)
                    // console.log(friendsIds)
                })
            });
        }

        if (type === "friend-online") {
            AuthenticationApi.getCurrentUser().then(() => {
                FriendsApi.getFriends()
                .then(({data}) => {
                    initialCheck = data;
                    onlineFriends = [];
                    initialCheck.map((user) => {
                        if (user.location.length > 1) {
                            friendsIds[user.id] = user.displayName;
                            onlineFriends.push(user.displayName)
                        }
                    })
                    if (content.user.location.lenght > 0) {
                        axios({
                            method: 'patch',
                            url: 'https://discord.com/api/channels/xxx/messages/xxx',
                            data: {
                                "content": `Currently Online: ${onlineFriends.map((friend) => {
                                        return `<:6164lightgreensmalldot:904307577192607754>${friend}`
                                })}`
                            }
                        }); 
                    }
                    // console.log(onlineFriends)
                    // console.log(friendsIds)
                })
            });
            // let {displayName} = content.user;
            // console.log(displayName);
            // axios({
            //     method: 'post',
            //     url: 'https://discord.com/api/channels/xxxx/messages',
            //     data: {
            //         "content": `${displayName} has come online.`
            //     }
            // });
        }
    });
})

client.connect(
    "wss://pipeline.vrchat.cloud/?authToken=authcookie_xxxx",
    "echo-protocol",
    null,
    {
        "User-Agent": "Mozilla/5.0 (platform; rv:geckoversion) Gecko/geckotrail Firefox/firefoxversion"
    }
);