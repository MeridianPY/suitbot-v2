![logo](https://repository-images.githubusercontent.com/406747355/0c0fcbbd-8dab-4259-a5d6-d8cc5069ef37)

[![Invite](https://img.shields.io/static/v1?style=for-the-badge&logo=discord&label=Invite&message=SuitBot&color=000000)](https://discord.com/oauth2/authorize?client_id=887122733010411611&scope=bot%20applications.commands&permissions=2167425024)
[![Discord](https://shields.io/discord/610498937874546699?style=for-the-badge&logo=discord&label=discord)](https://discord.gg/qX2CBrrUpf)
[![Heroku](https://img.shields.io/static/v1?label=Hosted%20with&message=Heroku&color=7056bf&style=for-the-badge&logo=heroku)](https://www.heroku.com)
[![License](https://img.shields.io/github/license/MeridianGH/suitbot?logo=gnu&style=for-the-badge)](https://github.com/MeridianGH/suitbot/blob/main/LICENSE.md)

# SuitBot

> A lightweight music and general purpose bot with dashboard, that uses slash commands and buttons to be as user-friendly as possible!



[![Dashboard](https://img.shields.io/static/v1?style=for-the-badge&logo=google%20chrome&label=&message=Dashboard&color=212121)](https://suitbot.xyz)
[![Progress Board](https://img.shields.io/static/v1?style=for-the-badge&logo=trello&label=&message=Progress%20Board&color=212121)](https://github.com/MeridianGH/suitbot/projects/1)
[![Discord Server](https://img.shields.io/static/v1?style=for-the-badge&logo=discord&label=&message=Discord%20Server&color=212121)](https://discord.gg/qX2CBrrUpf)

<details>
<summary style="cursor: pointer"><b>Table of Contents</b></summary>

- [Invite](#invite)
- [Commands](#commands)
- [Installation](#installation)
- [Stats](#stats)
- [Licensing](#licensing)
</details>

---

## Invite
> Disclaimer: The bot is still in development, so expect some bugs or features that might not work 100% yet. Please report any bugs or suggestions via the respective commands.

[![Invite](https://img.shields.io/static/v1?style=for-the-badge&logo=discord&label=&message=Invite&color=212121)](https://discord.com/oauth2/authorize?client_id=887122733010411611&scope=bot%20applications.commands&permissions=2167425024)

## Features
- Slash commands
  - Use commands directly integrated in Discord
  - No more guessing with variables
  - Quick overview of all commands


- Music
  - Supports many sources (YouTube, Spotify, Bandcamp, SoundCloud, Twitch, Vimeo or any other HTTP source)
  - Supports playlists and livestreams
  - Interactive Web Dashboard
  - Pause, Skip, Remove, Volume and more commands


- Activities
  - Create invites for Discord Activities
  - YouTube Together and a lot of fun minigames
  - Have fun with everyone in your voice channel


- Basic Moderation
  - Info commands (User, Server, Avatar)
  - Kick, Ban, Move, Slowmode and more commands
  - Permission check on commands

## Commands
SuitBot uses slash commands to integrate itself into the server. You can easily access its commands directly by typing `/` in your chat window.

<details>
<summary style="cursor: pointer"><b>Show all commands</b></summary>

### General
| Command     | Description                               |
|-------------|-------------------------------------------|
| /activity   | Creates a Discord activity.               |
| /dashboard  | Sends a link to the dashboard.            |
| /help       | Replies with help on how to use this bot. |
| /info       | Shows info about the bot.                 |
| /invite     | Sends an invite link for the bot.         |
| /language   | Changes the bots language.                |
| /ping       | Replies with the current latency.         |
| /serverinfo | Shows info about the server.              |
| /userinfo   | Shows info about a user.                  |

### Music
| Command     | Description                                                       |
|-------------|-------------------------------------------------------------------|
| /clear      | Clears the queue.                                                 |
| /filter     | Sets filter modes for the player.                                 |
| /lyrics     | Shows the lyrics of the currently playing song.                   |
| /nowplaying | Shows the currently playing song.                                 |
| /pause      | Pauses playback.                                                  |
| /play       | Searches and plays a song or playlist from YouTube or Spotify.    |
| /previous   | Plays the previous track.                                         |
| /queue      | Displays the queue.                                               |
| /remove     | Removes the specified track from the queue.                       |
| /repeat     | Sets the current repeat mode.                                     |
| /resume     | Resumes playback.                                                 |
| /search     | Searches five songs from YouTube and lets you select one to play. |
| /seek       | Skips to the specified point in the current track.                |
| /shuffle    | Shuffles the queue.                                               |
| /skip       | Skips the current track or to a specified point in the queue.     |
| /stop       | Stops playback.                                                   |
| /volume     | Sets the volume of the music player.                              |

### Moderation
| Command   | Description                                                   |
|-----------|---------------------------------------------------------------|
| /ban      | Bans a user.                                                  |
| /kick     | Kicks a user.                                                 |
| /move     | Moves the mentioned user to the specified channel.            |
| /moveall  | Moves all users from the first channel to the second channel. |
| /purge    | Clears a specified amount of messages.                        |
| /slowmode | Sets the rate limit of the current channel.                   |

### Feedback
| Command     | Description                           |
|-------------|---------------------------------------|
| /bugreport  | Reports a bug to the developer.       |
| /github     | Sends a link to the repo of this bot. |
| /suggestion | Sends a suggestion to the developer.  |
</details>

## Installation
It is not recommended to try and install SuitBot yourself. \
The bot is not designed to be easily installable and requires many complicated steps to set up.

If you want a self-hostable bot, keep looking around GitHub for better alternatives!

If you nevertheless decide to try and host a custom version of SuitBot yourself keep on reading.

<details>
<summary style="cursor: pointer"><b>Installation</b></summary>

## Local Installation

### Prerequisites
- Node.js v16.x
- FFmpeg v4.4
- Java v13.x

### Installing
```shell
git clone https://github.com/MeridianGH/suitbot.git
cd suitbot
npm install
```

### Configuration
Rename `config_example.json` to `config.json` and replace the placeholders inside with your info:
- A Discord Bot Token (**[Guide](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)**)
- Your Application ID which you can find the the `General Information` tab in your Discord application.
- Your Client Secret which is under `OAuth2` in your Discord application.
- The Guild ID of the server in which you want to test the bot. To get this ID, activate `Developer Mode` in Discord's options and right-click your server.
- Your User ID of your Discord account which will be your Admin-Account for the bot. Right-click yourself with `Developer Mode` activated.
- Get your YouTube keys like described in this **[Guide](https://github.com/Walkyst/lavaplayer-fork/issues/18)**. Once you have `PAPISID` and `PSID` set them in the config.
- Create a Genius API application **[here](https://docs.genius.com/)**, generate an access token and paste it here. Can be an empty string.
  
### Setting up
#### Discord
Go to your Discord Application and do the following:
- Go to `OAuth2` and add `http://localhost/callback` to `Redirects`.
- Go to `Bot` and enable the `Presence Intent`
  
#### Domain
Replace the domain in `dashboard.js` with your domain. \
If you want to redirect from HTTP to HTTPS, make sure to replace the domains in the function `forceDomain()` as well.

#### Database
Install PostgreSQL and set the database URL in `database.js`.

Create a table using the following command:
```
CREATE TABLE servers (
  id varchar(30) UNIQUE NOT NULL,
  locale varchar(5) NOT NULL
);
```

### Deploying
Use `node deploy-commands.js` to update and add commands in the guild you specified and `node deploy-commands.js global` to update the commands globally.\
Guild commands are refreshed instantly while global commands can take up to an hour.

Start the bot with
```shell
node main.js
```

---

## Heroku
### Prerequisites
- A Heroku account

### Installing
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

### Configuration
Refer to the configuration guide above on how to get the config variables. \
Set the variables in config vars under `Settings`.

### Setting up
#### Discord
Go to your Discord Application and do the following:
- Go to `OAuth2` and add `http://yourHerokuDomain/callback` to `Redirects`.
- Go to `Bot` and enable the `Presence Intent`

#### Domain
Replace the domain in `dashboard.js` with the domain of you Heroku app. \
If you're using a custom domain, make sure to replace the domains in the function `forceDomain()` as well.

#### Database
In your Heroku app, go to `Resources` and click on `Heroku Postgres`. \
Select `Dataclips`, create a Dataclip and give it a title. \
Paste the following command and hit `Save & Run`:
```
BEGIN;
set transaction read write;
CREATE TABLE servers (
  id varchar(30) UNIQUE NOT NULL,
  locale varchar(5) NOT NULL
);
commit;
```
Delete the Dataclip when it's done. (Click the two-arrow-symbol next to `Save & Run`)

### Deploying
Deploying on Heroku automatically deploys all commands globally. Make sure to test new commands locally before you deploy.

---
</details>

## Stats

### Size
![Lines of code](https://img.shields.io/tokei/lines/github/MeridianGH/suitbot?style=for-the-badge)
![GitHub repo size](https://img.shields.io/github/repo-size/MeridianGH/suitbot?style=for-the-badge)

### Code
![GitHub top language](https://img.shields.io/github/languages/top/MeridianGH/suitbot?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/MeridianGH/suitbot?style=for-the-badge)
[![CodeFactor](https://img.shields.io/codefactor/grade/github/MeridianGH/suitbot?style=for-the-badge)](https://www.codefactor.io/repository/github/meridiangh/suitbot)
\
![Libraries.io dependency status for GitHub repo](https://img.shields.io/librariesio/github/MeridianGH/suitbot?style=for-the-badge)
[![discord.js](https://img.shields.io/github/package-json/dependency-version/MeridianGH/suitbot/discord.js?color=44b868&logo=npm&style=for-the-badge)](https://www.npmjs.com/package/discord.js)
[![erelajs](https://img.shields.io/github/package-json/dependency-version/MeridianGH/suitbot/erela.js?color=44b868&logo=npm&style=for-the-badge)](https://www.npmjs.com/package/play-dl)

### GitHub
![GitHub issues](https://img.shields.io/github/issues/MeridianGH/suitbot?style=for-the-badge)
![GitHub pull requests](https://img.shields.io/github/issues-pr/MeridianGH/suitbot?style=for-the-badge)
\
![GitHub last commit](https://img.shields.io/github/last-commit/MeridianGH/suitbot?style=for-the-badge)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/MeridianGH/suitbot?style=for-the-badge)
\
![GitHub Repo stars](https://img.shields.io/github/stars/MeridianGH/suitbot?style=for-the-badge)
![GitHub watchers](https://img.shields.io/github/watchers/MeridianGH/suitbot?style=for-the-badge)

### Dashboard
![GitHub deployments](https://img.shields.io/github/deployments/MeridianGH/suitbot/suitbotxyz?label=Deployment&style=for-the-badge)
![Website](https://img.shields.io/website?down_message=offline&label=dashboard&style=for-the-badge&up_message=online&url=https%3A%2F%2Fsuitbot.xyz)

## Licensing
If you want to host your own version of SuitBot, with or without modifications to the source code or plan to use any part of this source code, you must disclose the source and reference this repository/license.

[![License](https://img.shields.io/github/license/MeridianGH/suitbot?logo=gnu&style=for-the-badge)](https://github.com/MeridianGH/suitbot/blob/main/LICENSE.md)
