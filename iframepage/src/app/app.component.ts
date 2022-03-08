import { ChangeDetectorRef, Component } from '@angular/core';
import { MoveChange } from 'ngx-chess-board';

@Component({
  selector: 'app-child',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'iframepage';
  red = 'rgb(100, 0, 0)'

  

  

  constructor(private ref: ChangeDetectorRef){
    // console.log(window.name);
    // console.log(window.name.endsWith("2"));
    window.parent.postMessage(window.name,"*");

  }

  


  public moveCallback(move: MoveChange): void {

    let which = window.addEventListener("message", (event)=>{
      console.log("iframe sent message", event);
    })
    
    console.log("player just made a move", move, " in window", window.name);
    window.parent.postMessage(move,"*");
    window.parent.postMessage(window.name,"*");

  }


  // move after recieving back from mainpage











  

    ngAfterContentChecked() {
    this.ref.detectChanges();
    }

  


}




