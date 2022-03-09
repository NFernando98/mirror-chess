import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { MoveChange, NgxChessBoardComponent, NgxChessBoardView } from 'ngx-chess-board';
import { Message } from 'twilio/lib/twiml/MessagingResponse';

@Component({
  selector: 'app-child',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

 

export class AppComponent {
  @ViewChild('board')
  boardManager!: NgxChessBoardComponent;
  


  title = 'iframepage';
  red = 'rgb(100, 0, 0)'

  

  constructor(private ref: ChangeDetectorRef){
    console.log(window.origin);
    // console.log(window.name.endsWith("2"));
    this.moveManual();
  }

  


  public moveCallback(move: MoveChange): void {   
    console.log("player just made a move", move, " in window", window.name);
    window.parent.postMessage({gameMove: move, player: window.name} ,"*");
    // window.parent.postMessage(window.name,"*");   
  }


  // move after recieving back from mainpage
  public moveManual(): void {
    window.addEventListener("message", (e) =>{
      if(e.data.player){
        if(e.data?.player !== window.name){
          console.log("e.data: ", e.data, window.name);
          let moveToMake = e.data.gameMove;
          console.log(moveToMake);
          this.boardManager.move(moveToMake.move);
        } 
      }
     
    })
  }









  

    ngAfterContentChecked() {
    this.ref.detectChanges();
    }

  


}




