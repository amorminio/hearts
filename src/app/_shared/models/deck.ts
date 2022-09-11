import { Card } from "./card"

export class Deck{


	constructor(
		public cards:Array<Card> = [
			{id: 'a', suit: 'hearts'},  {id: '2', suit: 'hearts'},  {id: '3', suit: 'hearts'},  {id: '4', suit: 'hearts'},  {id: '5', suit: 'hearts'},  {id: '6', suit: 'hearts'},  {id: '7', suit: 'hearts'},  {id: '8', suit: 'hearts'},  {id: '9', suit: 'hearts'},  {id: '10', suit: 'hearts'},  {id: 'j', suit: 'hearts'},  {id: 'q', suit: 'hearts'},  {id: 'k', suit: 'hearts'},
			{id: 'a', suit: 'diamonds'},  {id: '2', suit: 'diamonds'},  {id: '3', suit: 'diamonds'},  {id: '4', suit: 'diamonds'},  {id: '5', suit: 'diamonds'},  {id: '6', suit: 'diamonds'},  {id: '7', suit: 'diamonds'},  {id: '8', suit: 'diamonds'},  {id: '9', suit: 'diamonds'},  {id: '10', suit: 'diamonds'},  {id: 'j', suit: 'diamonds'},  {id: 'q', suit: 'diamonds'},  {id: 'k', suit: 'diamonds'},
			{id: 'a', suit: 'clubs'},  {id: '2', suit: 'clubs'},  {id: '3', suit: 'clubs'},  {id: '4', suit: 'clubs'},  {id: '5', suit: 'clubs'},  {id: '6', suit: 'clubs'},  {id: '7', suit: 'clubs'},  {id: '8', suit: 'clubs'},  {id: '9', suit: 'clubs'},  {id: '10', suit: 'clubs'},  {id: 'j', suit: 'clubs'},  {id: 'q', suit: 'clubs'},  {id: 'k', suit: 'clubs'},
			{id: 'a', suit: 'spades'},  {id: '2', suit: 'spades'},  {id: '3', suit: 'spades'},  {id: '4', suit: 'spades'},  {id: '5', suit: 'spades'},  {id: '6', suit: 'spades'},  {id: '7', suit: 'spades'},  {id: '8', suit: 'spades'},  {id: '9', suit: 'spades'},  {id: '10', suit: 'spades'},  {id: 'j', suit: 'spades'},  {id: 'q', suit: 'spades'},  {id: 'k', suit: 'spades'}
		]
	){
  
	}
  
	get getCards():Array<Card>{
	  return this.cards
	}

	set setCards(newCards:Array<Card>){
		this.cards = newCards
	}

	/**
	 *
	 * Pick a random card on the deck
	 *
	 * @returns randomCard - CardComponent Object
	 */
	 pickCard():Card{

		const random = Math.floor(Math.random() * this.cards.length)
		let randomCard:Card = this.cards[random]
		this.cards.splice(random,1)

		return randomCard
	}

	emptyDeck():void{
		this.cards = []
	}

	isEmpty():boolean{
		return this.cards.length === 0
	}

	showRemainingCards(){
		console.log(this.cards)
	}
  
	
  
  
  
  }