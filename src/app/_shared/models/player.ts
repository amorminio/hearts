import { Card } from "./card"

export class Player{

	private name:string = ''
	private avatar:string = ''
	private email:string = ''
	private id:number = 0
	private points:Number = 0
	private hand:Array<Card> =[]	


	constructor(name:string){
		this.name = name  
	}

	public get getAvatar():string{
		return this.avatar
	}

	public get getId():Number{
		return this.id
	}
	
	public get getHand():Array<Card>{
		return this.hand
	}
	
	public set setHand(cards:Array<Card>){
		this.hand = cards
	}
	
	public set setPoints(points:Number){
		this.points = points
	}

	/**
	 * Add a new card on players hand
	 */
	newCard(newCard:Card){
		this.hand.push(newCard)
	}


	/**
	 * Logs the user hand
	 */
	exposeHand(){
		console.log(this.hand)
	}

  
  
  }