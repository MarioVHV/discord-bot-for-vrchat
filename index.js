import axios from "axios";
import websocket from "websocket"
import vrchat from "vrchat";
import moment from 'moment';
const WebSocketClient = websocket.client
const client = new WebSocketClient();

axios.defaults.headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bot NzEwNzAxODUwNjY3Nzc4MDc5.Xr4SrQ.bo26iYQjJtdGBjVeElxq7DvwOIQ'
}

const configuration = new vrchat.Configuration({
    username: "alex.garay94@gmail.com",
    password: "Wl44735MVNEq"
});

const AuthenticationApi = new vrchat.AuthenticationApi(configuration);
const FriendsApi = new vrchat.FriendsApi(configuration);

let initialCheck = []
let onlineFriends = [];
let friendsIds = {};

AuthenticationApi.getCurrentUser().then(() => {
    FriendsApi.getFriends()
        .then(({ data }) => {
            initialCheck = data;
            initialCheck.map((user) => {
                if (user.location.length > 1 && user.displayName !== "xero_chris" && user.displayName !== "Alfafles c3a1" && user.displayName !== "S̳l̳u̳g̳s̳V̳R̳" && user.displayName !== "ShortyPebbles20" && user.displayName !== "XenoRyoga" && user.displayName !== "Spartan81000" && user.displayName !== "Tayッ a421") {
                    friendsIds[user.id] = user.displayName;
                    onlineFriends.push(user.displayName)
                }
            })
            // Both Axios Requests are being triggered at the same time, rate limiting us!
            // Rename channel with number of current online friends
            // axios({
            //     method: 'patch',
            //     url: 'https://discord.com/api/channels/904567854312091648',
            //     data: {
            //         "name": `${onlineFriends.length}-friends-online`
            //     }
            // });
            // Edit channel message with current online friends
            axios({
                method: 'patch',
                url: 'https://discord.com/api/channels/904567854312091648/messages/904569695062065172',
                data: {
                    "content": `Currently Online (Last Updated: ${moment().format('LTS')}): ${onlineFriends.map((friend) => {
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
        let { type, content } = parsed;
        content = JSON.parse(content); // Possible crash - content may come already as JSON
        console.log(type)

        if (type === "friend-offline") {
            // console.log(friendsIds);
            // console.log(content.userId);
            console.log(`${friendsIds[content.userId]} has gone offline.`);
            // axios({
            //     method: 'post',
            //     url: 'https://discord.com/api/channels/903579590797168661/messages',
            //     data: {
            //         "content": `${friendsIds[content.userId]} has gone offline.`
            //     }
            // });
            AuthenticationApi.getCurrentUser().then(() => {
                FriendsApi.getFriends()
                    .then(({ data }) => {
                        initialCheck = data;
                        onlineFriends = [];
                        initialCheck.map((user) => {
                            if (user.location.length > 1 && user.location.length > 1 && user.displayName !== "xero_chris" && user.displayName !== "Alfafles c3a1" && user.displayName !== "S̳l̳u̳g̳s̳V̳R̳" && user.displayName !== "ShortyPebbles20" && user.displayName !== "XenoRyoga" && user.displayName !== "Spartan81000" && user.displayName !== "Tayッ a421") {
                                friendsIds[user.id] = user.displayName;
                                onlineFriends.push(user.displayName)
                            }
                        })
                        // axios({
                        //     method: 'patch',
                        //     url: 'https://discord.com/api/channels/904567854312091648',
                        //     data: {
                        //         "name": `${onlineFriends.length}-friends-online`
                        //     }
                        // });
                        axios({
                            method: 'patch',
                            url: 'https://discord.com/api/channels/904567854312091648/messages/904569695062065172',
                            data: {
                                "content": `Currently Online (Last Updated: ${moment().format('LTS')}): ${onlineFriends.map((friend) => {
                                    return `<:6164lightgreensmalldot:904307577192607754>${friend}`
                                })}`
                            }
                        });
                        // console.log(onlineFriends)
                        // console.log(friendsIds)
                    })
            });
        }

        if (type === "friend-online") {
            console.log(`${content.user.displayName} has gone online.`);
            AuthenticationApi.getCurrentUser().then(() => {
                FriendsApi.getFriends()
                    .then(({ data }) => {
                        initialCheck = data;
                        onlineFriends = [];
                        initialCheck.map((user) => {
                            if (user.location.length > 1 && user.location.length > 1 && user.displayName !== "xero_chris" && user.displayName !== "Alfafles c3a1" && user.displayName !== "S̳l̳u̳g̳s̳V̳R̳" && user.displayName !== "ShortyPebbles20" && user.displayName !== "XenoRyoga" && user.displayName !== "Spartan81000" && user.displayName !== "Tayッ a421") {
                                friendsIds[user.id] = user.displayName;
                                onlineFriends.push(user.displayName)
                            }
                        })
                        // axios({
                        //     method: 'patch',
                        //     url: 'https://discord.com/api/channels/904567854312091648',
                        //     data: {
                        //         "name": `${onlineFriends.length}-friends-online`
                        //     }
                        // });
                        axios({
                            method: 'patch',
                            url: 'https://discord.com/api/channels/904567854312091648/messages/904569695062065172',
                            data: {
                                "content": `Currently Online (Last Updated: ${moment().format('LTS')}): ${onlineFriends.map((friend) => {
                                    return `<:6164lightgreensmalldot:904307577192607754>${friend}`
                                })}`
                            }
                        });
                        // console.log(onlineFriends)
                        // console.log(friendsIds)
                    })
            });
            // let {displayName} = content.user;
            // console.log(displayName);
            // axios({
            //     method: 'post',
            //     url: 'https://discord.com/api/channels/903579590797168661/messages',
            //     data: {
            //         "content": `${displayName} has come online.`
            //     }
            // });
        }
    });
})

client.connect(
    "wss://pipeline.vrchat.cloud/?authToken=authcookie_b0c235a4-37a9-490e-9910-cc8b0df06b6f",
    "echo-protocol",
    null,
    {
        "User-Agent": "Mozilla/5.0 (platform; rv:geckoversion) Gecko/geckotrail Firefox/firefoxversion"
    }
);