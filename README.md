
# Discord VRCHAT BOT: Show Online Friends

Using VRCHAT's websocket notifications, the bot will check notification types for "friend-online" and "friend-offline" to keep track of current online users.
Using Discord's API, the bot will update a message when there is a new online or offline friend.

## Setup & Deployment

You will need to rename "sample.env" to ".env" and edit it with your values.
```bash
DISCORD_BOT_TOKEN=TOKEN
DISCORD_CHANNEL_ID=ID
DISCORD_MESSAGE_ID=ID
VRC_USERNAME=USERNAME
VRC_PASSWORD=PASSWORD
VRC_AUTH_TOKEN=AUTH_TOKEN
```
To install the dependencies, you will need to run the following command in your terminal.
```bash
  npm install
```
To start the bot, you will need to run the following command in your terminal.
```bash
  npm start
```


## FAQ

#### How do I get a discord bot token?

You will need to go to https://discord.com/developers/applications and create a new application. If you go to the "bot" tab, there will be a copy button below "token".

#### Do I need to enable "Developer Mode" on the discord application?

Yes, you will need to go to Settings > Advanced > and toggle "Developer Mode".

#### How do I get a channel ID?

With "Developer Mode" enabled, you can right click on any channel and it will give you the option to copy the channel ID.

#### How do I get a message ID?

With "Developer Mode" enabled, you can  right click on any message and it will give you the option to copy the channel ID.

#### How do I get a vrc auth token?

You will need to login using https://vrchatapi.github.io/tutorials/getting-started/ and the auth token should be saved as one of your cookies.
