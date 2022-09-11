import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Card } from '../_shared/models/card';
import { Deck } from '../_shared/models/deck';
import { Player } from '../_shared/models/player';

@Injectable({
	providedIn: 'root'
})
export class HeartsService {


	player1$ : BehaviorSubject<Player> = new BehaviorSubject<Player>(new Player("Rapha"))
	player2$ : BehaviorSubject<Player> = new BehaviorSubject<Player>(new Player("Mimi"))
	player3$ : BehaviorSubject<Player> = new BehaviorSubject<Player>(new Player("Chico"))
	player4$ : BehaviorSubject<Player> = new BehaviorSubject<Player>(new Player("Zizi"))

  	mainDeck$ : BehaviorSubject<Deck> = new BehaviorSubject<Deck>(new Deck())
	roundDeck$ : BehaviorSubject<Deck> = new BehaviorSubject<Deck>(new Deck())


	// Trun Control - Hearts has 13 turns on every round
	leftTrade:number[] = [1,5,9,13]
	rightTrade:number[]= [2,6,10]
	frontTrade:number[]= [3,7,11]
	dontTrade:number[]= [4,8,12]

	currentRound = 1


	constructor() { }

	gameInit(){

		this.deckDeal()
		this.roundDeck$.value.emptyDeck()

		console.log('1 :',this.player1$.getValue())
		console.log('2 :',this.player2$.getValue())
		console.log('3 :',this.player3$.getValue())
		console.log('4 :',this.player4$.getValue())
	}

 	deckDeal(){
		while(!this.mainDeck$.value.isEmpty()){
			this.player1$.value.newCard(this.mainDeck$.value.pickCard())
			this.player2$.value.newCard(this.mainDeck$.value.pickCard())
			this.player3$.value.newCard(this.mainDeck$.value.pickCard())
			this.player4$.value.newCard(this.mainDeck$.value.pickCard())
		}
	}

	passCards(selectedForTrade:Array<Card>):void{
		if (this.leftTrade.includes(this.currentRound)){

		}

		else if (this.rightTrade.includes(this.currentRound)){

		}

		else{

		}

	}




}
