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

    this.drawCard = function(){

    };

    this.randomCard = function(){
        return this.valueChoice[Math.floor(Math.random()*this.valueChoice.length)] + "" + this.suitChoice[Math.floor(Math.random()*this.suitChoice.length)];
    };
};