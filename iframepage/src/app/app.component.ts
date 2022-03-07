import { Component } from '@angular/core';
import { MoveChange } from 'ngx-chess-board';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'iframepage';
  red = 'rgb(100, 0, 0)'

  public moveCallback(move: MoveChange): void {
    console.log("player just made a move", move);
    console.log(document.getElementById("iframe1"), document.getElementById("iframe2"));
    window.parent.postMessage("player moved", "*");

  }

  constructor(){
    console.log(window.name);
    window.addEventListener("message", (ev)=>{
      console.log("iframe sent message", ev);
    })
  }


}




