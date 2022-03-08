import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { MoveChange, NgxChessBoardComponent, NgxChessBoardView } from 'ngx-chess-board';

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
    
  }

  


  public moveCallback(move: MoveChange): void {   
    console.log("player just made a move", move, " in window", window.name);


    window.parent.postMessage(move,"*");
    window.parent.postMessage(window.name,"*");
    
  }


  // move after recieving back from mainpage
  public moveManual(): void {
    window.addEventListener("message", () =>{
      console.log("message came back");
      this.boardManager.move('d2d4');
    })
  }









  

    ngAfterContentChecked() {
    this.ref.detectChanges();
    }

  


}




