import { Injectable } from '@angular/core';
import { Card, Player } from '../interfaces/general';
import { DeckService } from './deck.service';
import { Subject, Observable, firstValueFrom } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class GameService {

	private player1: Player
	private player2: Player
	private player3: Player
	private player4: Player

	private currentPlayer: Player
	private roundCardWinner?: Card
	private roundWinner?: Player

	tableRoundCards: Card[] = []
	openCard: Card | undefined
	heartsBroken: boolean = false

	round: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 = 1

	private humanPlayedCardSource = new Subject<Card>();
	public humanPlayedCard$: Observable<Card> = this.humanPlayedCardSource.asObservable();


	constructor(private deckService: DeckService) {
		this.player1 = { name: 'Player 1', cards: [], points: 0, isHuman: true, id: 1 }
		this.player2 = { name: 'Player 2', cards: [], points: 0, isHuman: false, id: 2 }
		this.player3 = { name: 'Player 3', cards: [], points: 0, isHuman: false, id: 3 }
		this.player4 = { name: 'Player 4', cards: [], points: 0, isHuman: false, id: 4 }
		this.currentPlayer = this.player1

		this.player1.nextPlayer = this.player2
		this.player2.nextPlayer = this.player3
		this.player3.nextPlayer = this.player4
		this.player4.nextPlayer = this.player1

	}

	async startGame() {

		this.clearPoints()
		this.dealCards()
		this.findFirstPlayer()

		for (let i = 1; i < 14; i++) {
			await this.runRound()
		}
	}

	async runRound() {
		for (let i = 0; i < 4; i++) {

			let cardToPlay: Card | undefined

			if (this.currentPlayer.isHuman) {

				do {
					console.log("Turno Player1. Aguardando input carta . . .");
					cardToPlay = await firstValueFrom(this.humanPlayedCard$);
				} while (!this.isValidMove(cardToPlay));

				console.log(`${this.currentPlayer.name} jogou: ${cardToPlay?.value} ${cardToPlay?.suit}`);

			} else {
				await new Promise(resolve => setTimeout(resolve, 500));
				cardToPlay = this.robotPlayCard()
			}


			if (cardToPlay) {
				this.removeCardFromPlayer(this.currentPlayer, cardToPlay)
				this.tableRoundCards[this.currentPlayer.id] = cardToPlay

				if (this.currentPlayer.nextPlayer) {
					this.currentPlayer = this.currentPlayer.nextPlayer
				}

				// Define a carta que abriu a rodada
				if (i == 0) {
					this.openCard = cardToPlay
				}
			}

			this.debug()

		}

		this.findRoundWinner()
		this.round += 1


	}

	removeCardFromPlayer(player: Player, removed: Card) {
		player.cards = player.cards.filter(card => {
			return card.value !== removed.value || card.suit !== removed.suit
		})
	}

	dealCards() {
		this.deckService.generateDeck();
		this.deckService.shuffleDeck();

		let tempCard: any

		for (let i = 0; i < 13; i++) {
			tempCard = this.deckService.pickCard()
			if (tempCard != null) {
				this.player1.cards.push(tempCard);
			}
			tempCard = this.deckService.pickCard()
			if (tempCard != null) {
				this.player2.cards.push(tempCard);
			}
			tempCard = this.deckService.pickCard()
			if (tempCard != null) {
				this.player3.cards.push(tempCard);
			}
			tempCard = this.deckService.pickCard()
			if (tempCard != null) {
				this.player4.cards.push(tempCard);
			}
		}

		const sortFn = (a: Card, b: Card) => {
			if (a.suit !== b.suit) {
				return a.suit.localeCompare(b.suit);
			}
			return Number(a.value) - Number(b.value);
		};

		this.player1.cards.sort(sortFn);
		this.player2.cards.sort(sortFn);
		this.player3.cards.sort(sortFn);
		this.player4.cards.sort(sortFn);
	}

	findFirstPlayer() {
		const searchCard: Card = { suit: 'clubs', value: '2' }
		const player1Card = this.player1.cards.find(card => card.value === searchCard.value && card.suit === searchCard.suit)
		const player2Card = this.player2.cards.find(card => card.value === searchCard.value && card.suit === searchCard.suit)
		const player3Card = this.player3.cards.find(card => card.value === searchCard.value && card.suit === searchCard.suit)
		const player4Card = this.player4.cards.find(card => card.value === searchCard.value && card.suit === searchCard.suit)

		if (player1Card) {
			this.currentPlayer = this.player1
		} else if (player2Card) {
			this.currentPlayer = this.player2
		} else if (player3Card) {
			this.currentPlayer = this.player3
		} else if (player4Card) {
			this.currentPlayer = this.player4
		}
	}

	playCard(card: Card) {
		console.log('Playing card: ', card)
		this.humanPlayedCardSource.next(card);
	}

	robotPlayCard(): Card | undefined {
		if (this.tableRoundCards.length !== 0 || this.round !== 1) {
			if (this.hasSuit(this.openCard?.suit!)) {
				let choices: Array<Card> = this.currentPlayer.cards.filter(card => card.suit === this.openCard?.suit)
				choices = choices.sort((a, b) => a.value.localeCompare(b.value))
				return choices[0]
			}
			else {
				if (this.heartsBroken) {
					if (this.hasSuit(this.openCard?.suit!)) {
						let choices: Array<Card> = this.currentPlayer.cards.filter(card => card.suit === this.openCard?.suit)
						choices = choices.sort((a, b) => Number(a.value) - Number(b.value))
						return choices[0]
					} else {
						let choices: Array<Card> = this.currentPlayer.cards.sort((a, b) => Number(a.value) - Number(b.value))
						return choices[0]
					}
				}
				else {
					let choices: Array<Card> = this.currentPlayer.cards.filter(card => card.suit !== 'hearts')
					choices = choices.sort((a, b) => Number(a.value) - Number(b.value))
					return choices[0]
				}
			}
		}
		else {
			console.log('robot played card: ', { suit: 'clubs', value: '2' })
			return { suit: 'clubs', value: '2' }
		}


	}

	// TODO - validar as jogadas
	isValidMove(card: Card): boolean {
		// Primeira jogada deve ser 2 de copas
		if (this.tableRoundCards.length === 0 && this.round === 1) {
			if (card.value !== '2' || card.suit !== 'clubs') {
				console.log('Na Primeira rodada, a primeira carta deve ser o 2 de paus')
				return false
			}
		}
		else {
			if (this.hasSuit(this.openCard?.suit!)) {
				let choices: Array<Card> = this.currentPlayer.cards.filter(card => card.suit === this.openCard?.suit)
				if (choices.includes(card)) {
					return true
				}
				else {
					console.log('Carta inválida. Você deve jogar uma carta do mesmo naipe da carta de abertura')
					return false
				}

			}
			else {
				if (!this.heartsBroken) {
					if (card.suit === 'hearts') {
						console.log('Carta inválida. Cartas de copas não podem ser jogadas antes de quebrar copas')
						return false
					}
					else {
						return true
					}
				}
				else {
					return true
				}

			}
		}

		return true
	}

	hasSuit(suit: string): boolean {
		return this.currentPlayer.cards.some(card => card.suit === suit)
	}

	findRoundWinner() {

		let maxCard: Card = this.openCard!
		let hasSuit: boolean = this.tableRoundCards.some(card => card.suit === this.openCard?.suit)
		let winnerIndex: number = 0
		let roundPoints: number = 0

		if (hasSuit) {
			for (let i = 1; i < 5; i++) {
				if (this.tableRoundCards[i].suit === this.openCard?.suit) {

					if (parseInt(this.tableRoundCards[i].value) > parseInt(maxCard.value)) {
						maxCard = this.tableRoundCards[i]
						winnerIndex = i
					}
				}

			}
		} else {
			maxCard = this.openCard!
			for (let i = 1; i < 5; i++) {
				if (this.openCard === this.tableRoundCards[i]) {
					winnerIndex = i
				}
			}
		}

		this.roundWinner = this.getPlayerById(winnerIndex)
		this.currentPlayer = this.getPlayerById(winnerIndex)
		this.roundCardWinner = maxCard
	}

	clearPoints() {
		this.player1.points = 0
		this.player2.points = 0
		this.player3.points = 0
		this.player4.points = 0
	}

	roundPoints() {
		this.tableRoundCards.forEach(card => {
			if (card.suit === 'hearts') {
				this.roundWinner!.points += 1
			}
			else if (card.suit === 'spades' && card.value === '12') {
				this.roundWinner!.points += 13
			}
		})

	}

	// Accessors
	getPlayerById(id: number): Player {
		return [this.player1, this.player2, this.player3, this.player4].find(player => player.id === id)!;
	}

	debug() {
		console.log('===============================')
		console.log('Round: ', this.round)

		console.log(this.player1)
		console.log(this.player2)
		console.log(this.player3)
		console.log(this.player4)

		console.log('Jogador Atual :', this.currentPlayer)
		console.log('Carta aberta: ', this.openCard)
		console.log('Cartas na mesa: ', this.tableRoundCards)

	}
}
