// import WebSocket from 'ws';
// import axios from "axios";

const axios = require('axios')
const WebSocketClient = require('websocket').client;

const client = new WebSocketClient();

axios.defaults.headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bot NzEwNzAxODUwNjY3Nzc4MDc5.Xr4SrQ.4iTsDqjvj4wVmZUnlF5Ep9ELCNE'
}

let initialCheck = [
    {
      "id": "usr_19cb993d-2403-49bf-b6ec-a86211e4070f",
      "username": "t5chyon",
      "displayName": "Fluzzy Kitty",
      "bio": "Fluzzy Kitty＃9445\nMute‚ Likes Headpat",
      "currentAvatarImageUrl": "https://api.vrchat.cloud/api/1/file/file_2b7483d5-329c-47a3-8886-f47f584f19c3/1/file",
      "currentAvatarThumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_2b7483d5-329c-47a3-8886-f47f584f19c3/1/256",
      "fallbackAvatar": "avtr_281bce02-b952-4fd7-a7bc-01b9a7337da1",
      "userIcon": "",
      "profilePicOverride": "",
      "last_platform": "standalonewindows",
      "tags": [
        "system_world_access",
        "system_trust_basic",
        "system_avatar_access",
        "system_feedback_access",
        "system_trust_known",
        "system_trust_trusted"
      ],
      "developerType": "none",
      "status": "ask me",
      "statusDescription": "OwO",
      "friendKey": "89b9bd3629033a3e93fa7d8f00593d38",
      "last_login": "2021-10-30T09:45:28.334Z",
      "isFriend": true,
      "location": "private"
    },
    {
      "id": "usr_b3482b2b-47f9-4f59-8b25-69bd0fc59b75",
      "username": "s̳l̳u̳g̳s̳v̳r̳",
      "displayName": "S̳l̳u̳g̳s̳V̳R̳",
      "bio": "MamaSpoon ≺ 3 ․gg⁄div Ｄｉｖｉｎｉｔｙ\nKuhmmuinity Kuh",
      "currentAvatarImageUrl": "https://api.vrchat.cloud/api/1/file/file_b534823a-da5c-4aea-b365-9277b1e63778/1/file",
      "currentAvatarThumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_b534823a-da5c-4aea-b365-9277b1e63778/1/256",
      "fallbackAvatar": "avtr_392fe1f2-5ba0-4c82-86c7-ad537d744ad4",
      "userIcon": "",
      "profilePicOverride": "",
      "last_platform": "standalonewindows",
      "tags": [
        "system_avatar_access",
        "system_world_access",
        "system_trust_basic"
      ],
      "developerType": "none",
      "status": "ask me",
      "statusDescription": "Ɛ ≻ S ＋ S ≺ 3 ․gg⁄div",
      "friendKey": "3ea6c46db26d3c9b5218b90f0a20e938",
      "last_login": "2021-10-30T04:23:15.770Z",
      "isFriend": true,
      "location": "private"
    },
    {
      "id": "usr_34db9e8b-4058-42fd-8ab3-71c02e26e58c",
      "username": "lil_spoon13",
      "displayName": "Lil_Spoon",
      "bio": "Lil_Spoon13＃0347\n\nDaddy Slugs ≺3\n\nShawty Ray my twin ≺3\n\nd༙྇ɨ༙྇s༙྇c༙྇i༙྇p༙྇l༙྇e༙྇s\n\nCuhmmunity Cuh\n\n6ix ＆Akuurz support buddies＃2\n\nHMU for a moan n go or a lick n split or a spit in dipǃǃǃ",
      "currentAvatarImageUrl": "https://api.vrchat.cloud/api/1/file/file_0e8c4e32-7444-44ea-ade4-313c010d4bae/1/file",
      "currentAvatarThumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_0e8c4e32-7444-44ea-ade4-313c010d4bae/1/256",
      "fallbackAvatar": "avtr_392fe1f2-5ba0-4c82-86c7-ad537d744ad4",
      "userIcon": "https://api.vrchat.cloud/api/1/file/file_3e70552b-e889-4077-b129-023d8ff98444/1/",
      "profilePicOverride": "https://api.vrchat.cloud/api/1/file/file_5979d981-2576-4661-9ef2-ff68e36007bb/1/",
      "last_platform": "android",
      "tags": [
        "system_world_access",
        "system_feedback_access",
        "system_avatar_access",
        "system_trust_basic",
        "system_early_adopter",
        "system_supporter",
        "system_trust_known",
        "system_trust_trusted"
      ],
      "developerType": "none",
      "status": "ask me",
      "statusDescription": "≺3 S ＆ S ≺3",
      "friendKey": "4f7c1ba7b5759ef5cb01c4c460e9546f",
      "last_login": "2021-10-30T01:14:02.248Z",
      "isFriend": true,
      "location": "private"
    },
    {
      "id": "usr_ee8379dd-b425-40de-b6ad-8d6738e27baa",
      "username": "sleepyheadsh",
      "displayName": "SleepyHeadSF",
      "bio": "I play uke and guitar \n\nAromantic - So if I flirt with you don't expect anything\n\nI'm 20",
      "currentAvatarImageUrl": "https://api.vrchat.cloud/api/1/file/file_0e8c4e32-7444-44ea-ade4-313c010d4bae/1/file",
      "currentAvatarThumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_0e8c4e32-7444-44ea-ade4-313c010d4bae/1/256",
      "fallbackAvatar": "avtr_ded62af3-4c09-48e0-8c56-60b0aebf0383",
      "userIcon": "https://api.vrchat.cloud/api/1/file/file_5919b6e4-6986-4f32-9315-e373816925a1/1/",
      "profilePicOverride": "https://api.vrchat.cloud/api/1/file/file_9ef2ea71-9f60-4068-91b4-bcd6ca506b9e/1/",
      "last_platform": "android",
      "tags": [
        "system_world_access",
        "system_avatar_access",
        "system_trust_basic",
        "system_early_adopter",
        "system_feedback_access",
        "system_trust_known",
        "language_eng",
        "language_spa",
        "language_ase",
        "system_trust_trusted",
        "system_supporter"
      ],
      "developerType": "none",
      "status": "active",
      "statusDescription": "Background Character",
      "friendKey": "940884e0274b55959857f451ed33a05d",
      "last_login": "2021-10-29T20:31:00.055Z",
      "isFriend": true,
      "location": ""
    },
    {
      "id": "usr_81b4215b-ce3a-43cf-bc1a-1ad405cea710",
      "username": "reesechan",
      "displayName": "reesechan",
      "bio": "PH 18 she⁄her\ndc˸ reeseblabla＃5241\nig˸ bemayleymae",
      "currentAvatarImageUrl": "https://api.vrchat.cloud/api/1/file/file_ef9cbfc0-f8fc-4f3c-8eaa-29aee25e32be/2/file",
      "currentAvatarThumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_ef9cbfc0-f8fc-4f3c-8eaa-29aee25e32be/2/256",
      "fallbackAvatar": "avtr_44c0a091-8a98-4467-af04-a2f6110391ae",
      "userIcon": "",
      "profilePicOverride": "",
      "last_platform": "standalonewindows",
      "tags": [
        "system_world_access",
        "system_avatar_access",
        "system_trust_basic"
      ],
      "developerType": "none",
      "status": "ask me",
      "statusDescription": "shawty lil baddie",
      "friendKey": "50179b069f5177579289f89c03a5d696",
      "last_login": "2021-10-16T13:17:35.298Z",
      "isFriend": true,
      "location": "private"
    },
    {
      "id": "usr_521ff962-a526-4dfa-a448-a11f8b16bb8a",
      "username": "qickpool",
      "displayName": "Qickpool",
      "bio": "Discord˸ Qickpool＃2965",
      "currentAvatarImageUrl": "https://api.vrchat.cloud/api/1/file/file_7e4bffc5-6b2e-48a6-b1a5-f776a2821959/2/file",
      "currentAvatarThumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_7e4bffc5-6b2e-48a6-b1a5-f776a2821959/2/256",
      "fallbackAvatar": "avtr_2d22f38c-4d6e-4abb-afee-a4ae274f95dc",
      "userIcon": "",
      "profilePicOverride": "",
      "last_platform": "standalonewindows",
      "tags": [
        "system_world_access",
        "system_avatar_access",
        "system_trust_basic",
        "system_feedback_access",
        "system_trust_known",
        "system_early_adopter",
        "language_eng",
        "system_trust_trusted"
      ],
      "developerType": "none",
      "status": "active",
      "statusDescription": "",
      "friendKey": "f3b68cb49339e7f7994213ef75a0c716",
      "last_login": "2021-08-29T10:36:47.986Z",
      "isFriend": true,
      "location": "wrld_5be99c77-c734-4326-b15a-d5c01ac9b09a:45205~hidden(usr_ee8379dd-b425-40de-b6ad-8d6738e27baa)~nonce(259557E703AF28EB948F2A855404527242188CD7DD5FD3A3)"
    }
  ]

let results = initialCheck.map((user) => {
      if (user.location.length > 1) {
          return user.displayName
      }
  })

  console.log(results)

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
        content = JSON.parse(content);
        console.log(type)

        if (type == "friend-offline") {
            console.log(`ID: ${content.userId} has gone offline.`)
        }
        
        if (type == "friend-online") {
            let {displayName} = content.user;
            console.log(displayName);
            axios({
                method: 'post',
                url: 'https://discord.com/api/channels/903579590797168661/messages',
                data: {
                    "content": `${displayName} has come online.`
                }
            });
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