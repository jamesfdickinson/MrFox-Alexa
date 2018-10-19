class MrFox {
    constructor() {
        this.startText = `Select one person to be Mr. Fox and everyone else go to the other side of the room. To start say, "What time is it Mr Fox?".`;
        this.howToPlayText = `One player, the "fox", stands on one side of the room while everyone else stands on the opposite side of the room. 
        The Fox stats with his back turned. The game starts by all the other players ask together "What time is it Mr. Fox?".
        
        When the players ask "What time is it Mr. Fox?", the Fox replies with a time of the day of his/her choosing. 
        If the Fox says 4 O'Clock everyone takes 4 steps forward. The Fox keeps his back turned.

        The game end when the Fox replies "Lunch Time!" and turns around and chases the players. 
        The player the Fox tags(eats) will be the next fox.
        `;
        this.promptText = `Ask Mr Fox, "What time is it?"`;
        this.lunchTimePhrase = ` <prosody pitch="medium" volume="x-loud" rate="fast">
  
        Lunch Time!  
        </prosody>
      <prosody pitch="medium" volume="x-loud" rate="medium">
          Run!
          </prosody>
      <prosody pitch="high" volume="x-loud" rate="slow">
          Run!
          </prosody>
          <prosody pitch="x-high" volume="x-loud" rate="x-slow">
          Run!
          </prosody>`;
        this.lunchTimeText = `Lunch Time!`;
    }
    start() {
        return this.startText;
    }
    prompt() {
        return this.promptText;
    }
    howToPlay() {
        return this.howToPlayText;
    }
    getAnswer(turnNumber) {
        if (!turnNumber) turnNumber = -1;
        //1-max        
        let max = 3;
        let min = 1;
        let random = Math.floor(Math.random() * (max - min) + min);
        if (turnNumber === 1) {
            return this.getTimePhrase();
        }
        else if (random === 1) {
            return this.getEndPhrase();
        } else {
            return this.getTimePhrase();
        }
    }
    getEndPhrase() {
        let data = {
            phrase: this.lunchTimePhrase,
            time: this.lunchTimeText,
            isOver: true
        }
        return data;
    }
    getTimePhrase() {
        let max = 7;
        let min = 1;
        let randomTime = Math.floor(Math.random() * (max - min) + min);

        let numbers = [];

        for (var i = min; i <= randomTime; ++i)
            numbers.push(i);

        let stepCount = numbers.join(", ");
        let data = {
            phrase: `${randomTime} o'clock. Take ${randomTime} steps. ${stepCount}`,
            time: `${randomTime} o'clock`,
            isOver: false
        }
        return data;
    }

}
if (typeof module !== 'undefined' && typeof exports === 'object') { module.exports = MrFox; }
