var CardJS = {};

CardJS.DEFAULT_AMOUNT = 52;
CardJS.DEFAULT_DUPLICATES = 1;

// Card names format: {CARD_VALUE}{CARD_SUIT}
CardJS.CARD_VALUE = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
CardJS.CARD_SUIT = ['H', 'C', 'S', 'D'];

/**
 * Deck Object for CardJS
 */
CardJS.Deck = function(amount, duplicates, valueChoice, suitChoice){
    this.amount = amount || CardJS.DEFAULT_AMOUNT;
    this.duplicates = duplicates || CardJS.DEFAULT_DUPLICATES;

    this.valueChoice = valueChoice || CardJS.CARD_VALUE;
    this.suitChoice = suitChoice || CardJS.CARD_SUIT;

    // Multidimensional array to store locations and the cards within the areas.
    this.cardStorage = [[]];

    this.getCardCount = function(cardName){
        var count = 0;
        for(var i=0;i<this.cardStorage.length;i++){
            for(var j=0;j<this.cardStorage[i].length;j++){
                if(this.cardStorage[i][j] == cardName)
                    count ++;
            }
        }
        return count;
    };

    this.deckContains = function(card){
        for(var i=0;i<this.cardStorage[0].length;i++){
            if(this.cardStorage[0][i] == card)
                return true;
        }
        return false;
    }

    this.drawCard = function(location){
        var card;
        while(this.getCardCount((card = this.randomCard())) >= this.duplicates){}
        this.cardStorage[location].push(card);
        console.log("Drew card : " + card);
    };

    this.randomCard = function(){
        return this.valueChoice[Math.floor(Math.random()*this.valueChoice.length)] + "" + this.suitChoice[Math.floor(Math.random()*this.suitChoice.length)];
    };
};

CardJS.Action = function(onActionUse, requirements){
    this.onActionUse = onActionUse || function(){};
    this.requirements = requirements || function(pl){ return true; };
};

CardJS.PlayerInfo = function(location, startScore){
    this.location = location;
    this.score = startScore || 0;
};

CardJS.Game = function(){
    this.actions = [];
    this.deck = new CardJS.Deck(52, 1);

    this.playerInfo = [];

    this.addPlayer = function(){
        this.playerInfo.push(new CardJS.PlayerInfo(this.deck.cardStorage.length));
    }
}

// TEST
{
    var deck = new CardJS.Deck(52, 1);
    for(var i=0;i<52;i++){
        deck.drawCard(1);
    }
}
