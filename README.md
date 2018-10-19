# MR Fox

## How to Run

Using an Alexa Echo, say one of the following: 
* "Alexa, Open Mr Fox"
* "Alexa, ask Mr Fox What time is it"

## How to Build

Goto "cd lambda/custom"

Run "npm install"

## How to Delpoy
AWS
https://console.aws.amazon.com/lambda/home?region=us-east-1

ASK SDK for Node.js
https://github.com/alexa/alexa-skills-kit-sdk-for-nodejs

## SDK Docs
ASK SDK for Node.js Docs https://ask-sdk-for-nodejs.readthedocs.io/en/latest/Developing-Your-First-Skill.html


## Game Rules

### Start

One player, the "fox", stands on one side of the room while eveyone else stands on the oppisite side of the room.  The Fox stats with his back turned. The game starts by all the opther players ask together "What time is it Mr. Fox?".

### Game Play

When the players ask "What time is it Mr. Fox?", the Fox replies with a time of the day of his/her choosing.  If the Fox says 4 O'Clock everyone takes 4 steps forward.  The Fox keeps his back turned.

### End

The game end when the Fox replies "Lunch Time!" and turns around and chases the players.  The player the Fox tags(eats) will be the next fox.


## Alexa Commands
* "Open Mr Fox" - mini instructions and start the game
* "How to play" - Detailed instuction on how to play 
* "What time is it Mr. Fox?" - A random time will be dictated and the game will continue or "Lunch time" and ends the game

## Alexa Game Flow
1. Open skill -> mini instructions and request to ask it what time is it mr fox
2. What time is it Mr fox -> 5 O'Clock - Take 5 step forward 1, 2, 3, 4, 5
3. What time is it Mr fox -> 3 O'Clock - Take 3 step forward 1, 2, 3
4. ...
4. What time is it Mr fox -> Lunch Time! Run!
5. End

