export interface Card {
	suit: string;
	value: string;
}

export interface Player {
	id: number
	name: string
	cards: Card[]
	points: number
	nextPlayer?: Player
	isHuman: boolean
}

