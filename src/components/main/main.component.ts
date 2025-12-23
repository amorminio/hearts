import { Component, OnInit } from '@angular/core';
import { Card, Player } from '../../interfaces/general';
import { GameService } from '../../services/game.service';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'main',
  imports: [CardComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {

  player1?: Player
  player2?: Player
  player3?: Player
  player4?: Player

  constructor(private gameService: GameService) {

  }

  ngOnInit() {
    this.gameService.startGame()
    this.player1 = this.gameService.getPlayerById(1)
    this.player2 = this.gameService.getPlayerById(2)
    this.player3 = this.gameService.getPlayerById(3)
    this.player4 = this.gameService.getPlayerById(4)
  }

  playCard(card: Card) {
    this.gameService.playCard(card)
  }

}
