import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeartsService } from 'src/app/_services/hearts.service';
import { Subject, takeUntil } from 'rxjs';
import { animations } from 'src/app/_shared/animations';

@Component({
  selector: 'the-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  animations   : animations,
})
export class TableComponent implements OnInit,OnDestroy {

      private _unsubscribeAll : Subject<any> = new Subject<any>();
      _player1:any
      _player2:any
      _player3:any
      _player4:any

      cardHover:boolean=false

    constructor(private _heartsService:HeartsService) {

    }

    ngOnInit(): void {
        this.gameInit()

      this._heartsService.player1$
        .pipe(takeUntil(this._unsubscribeAll))
          .subscribe((p1)=>{
            this._player1 = p1
          })
      this._heartsService.player2$
        .pipe(takeUntil(this._unsubscribeAll))
          .subscribe((p2)=>{
            this._player2 = p2
          })
      this._heartsService.player3$
        .pipe(takeUntil(this._unsubscribeAll))
          .subscribe((p3)=>{
            this._player3 = p3
          })
      this._heartsService.player4$
        .pipe(takeUntil(this._unsubscribeAll))
          .subscribe((p4)=>{
            this._player4 = p4
          })

          console.log(this._player1)
          console.log(this._player2)
          console.log(this._player3)
          console.log(this._player4)

    }

    ngOnDestroy(): void {
      this._unsubscribeAll.next(null);
      this._unsubscribeAll.complete();
    }

    gameInit(){
      this._heartsService.gameInit()
    }

    setAnimation(){
      console.log("entrou ?")
      this.cardHover = !this.cardHover
    }

    get cardHoverState__(){
      console.log("Hover ? : ",this.cardHover, ' : ', this.cardHover ? 'select' : 'cancel' )
      return this.cardHover ? 'select' : 'cancel'
    }

}
