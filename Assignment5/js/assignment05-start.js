/*
Take note of the comments throughout this page
Follow their directions as to what to code and where
*/


/*
PART 1a
---------------------------------------
DEFINE A Card OBJECT (following BONUS instructions)*
---------------------------------------
*/
class Card {
    constructor(face, value, suit) {
        this.face = face;
        this.value = value;
        this.suit = suit;
    }

    describeSelf() {
        const faceFile = this.face.toString().toLowerCase();
        const suitFile = this.suit.toLowerCase();
        const filename = `${faceFile}_of_${suitFile}.svg`;

        return `<img src="card-images/${filename}" alt="${this.face} of ${this.suit}, Value: ${this.value}" class="card-img">`;
    }
}




/*
PART 1b
INSTANTIATE A Card OBJECT and 
display the value returned by the describeSelf() function
*/
const outputDiv = document.getElementById("output");
const exampleCard = new Card("Queen", 10, "Hearts");
outputDiv.innerHTML += "<h2>Example Card Using Card Object</h2>" + exampleCard.describeSelf();





/*
PART 2a
---------------------------------------
DEFINE A Deck OBJECT
---------------------------------------
Note: Most of the Deck class code should
      not be modified in any way. The only
      Deck code that needs changing is inside the 
      constructor() function. Change nothing else in Deck. 
*/
class Deck{
    constructor(){
        
        //build a deck of Card objects
        //prepare arrays for all the aspects of a Card
        this.faces   = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];        
        this.values  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];        
        this.suits   = ["Spades","Clubs","Hearts","Diamonds"];  
        
        //prepare an array to store the Cards in
        this.cards = [];

        //use nested 'for' loops
        //build the Deck of Cards
        //one iteration for each suit
        //one iteration for each face/value pair
        //each time, instantiate a new Card Object
        //add new cards to the using Array.push()        
        for (let i = 0; i < this.suits.length; i++) {
            for (let j = 0; j < this.faces.length; j++) {
                this.cards.push(new Card(this.faces[j], this.values[j], this.suits[i]));
            }
        }

    }
}

/*
DEFINING Deck OBJECT FUNCTIONS
no changes need to be made 
in the rest of this Deck class definition.
*/
Deck.prototype.dealCard = function(){
     //remove and return the first item in array
    //and shift the index of remaining items 
    const card = this.cards.shift();
    //if we have run out of cards...
    if(card === undefined){
        return 'No more cards';
    }else{
        //return the next card in the array
        return card;
    }         
}
Deck.prototype.shuffle = function(){
 
    let j, x, i;
    //loop through the entire array
    for (i = this.cards.length - 1; i > 0; i--) {
        //randomly select a card
        j = Math.floor(Math.random() * (i + 1));
        x = this.cards[i];
        //resort cards
        this.cards[i] = this.cards[j];
        this.cards[j] = x;
    }
    //return the randomly sorted array
    return this.cards;       
}
Deck.prototype.describeSelf = function(){
    let description = "";
    description += `This deck of cards has ${this.cards.length} card(s) in it`;
    //return the above statement 'description'
    return description;
}
/*
---------------------------------------
end Deck class
---------------------------------------
*/



/*
PART 2b
INVOKE AND DISPLAY Deck OBJECT FUNCTIONS
*/
outputDiv.innerHTML += "<h2>Dealing Card Object using Deck Object</h2>";

const myDeck = new Deck();

//invoke and display the Deck function describeSelf() here...
outputDiv.innerHTML += myDeck.describeSelf()

//randomize the cards in the deck using shuffle()
myDeck.shuffle();

//take the next card from the deck using dealCard()
const dealt1 = myDeck.dealCard();
outputDiv.innerHTML += `<p>You've been dealt:</p>${dealt1.describeSelf()}`;

//invoke and display the Deck function describeSelf() AGAIN here...
outputDiv.innerHTML += `<br>${myDeck.describeSelf()}`;

//take the next card from the deck using dealCard()
const dealt2 = myDeck.dealCard();
outputDiv.innerHTML += `<p>You've been dealt:</p>${dealt2.describeSelf()}`;

//invoke and display the Deck function describeSelf() AGAIN here...
outputDiv.innerHTML += `<br>${myDeck.describeSelf()}`;




/*
PART 3a
---------------------------------------
DEFINE A Player OBJECT
---------------------------------------
*/
class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
    }

    addCardToHand(card) {
        this.hand.push(card);
    }

    describeSelf() {
        let output = `<div class="player"><h2>${this.name}'s Hand:</h2><div class="hand">`;
        for (let card of this.hand) {
            output += card.describeSelf();
        }
        output += "</div></div>";
        return output;
    }
}



/*
PART 3b
Instantiate at least two Player OBJECTs
Instantiate a new Deck and shuffle() it
Deal five Cards to each Player
Display each players hand to the browser
*/
outputDiv.innerHTML += "<h2>Dealing Card Object Using Deck Object, to Player Objects</h2>";

const gameDeck = new Deck();
gameDeck.shuffle();

const jill = new Player("Jill");
const joe = new Player("Joe");
const jane = new Player("Jane");

for (let i = 0; i < 5; i++) {
    jill.addCardToHand(gameDeck.dealCard());
    joe.addCardToHand(gameDeck.dealCard());
    jane.addCardToHand(gameDeck.dealCard());
}

outputDiv.innerHTML += jill.describeSelf();
outputDiv.innerHTML += joe.describeSelf();
outputDiv.innerHTML += jane.describeSelf();