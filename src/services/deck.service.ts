import { Injectable } from '@angular/core';
import { Card } from '../interfaces/general';

@Injectable({
	providedIn: 'root'
})
export class DeckService {

	private deck: Card[] = [];
	private turnTable: Card[] = [];

	constructor() { }

	generateDeck() {
		const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
		const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'];

		for (let suit of suits) {
			for (let value of values) {
				this.deck.push({ suit: suit, value: value });
			}
		}
	}

	shuffleDeck() {
		for (let i = this.deck.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			const temp = this.deck[i];
			this.deck[i] = this.deck[j];
			this.deck[j] = temp;
		}
	}

	pickCard() {
		return this.deck.pop();
	}



	/* TODO - NOT FOR THIS GAME */
	regenerateDeck() {
		this.deck = [];
		this.generateDeck();
	}

	returnDeck() {
		return this.deck;
	}


}
