import { Component, ViewChild, ElementRef, ContentChild  } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MoveChange, NgxChessBoardComponent, NgxChessBoardView } from 'ngx-chess-board';
import { CoordsProvider } from 'ngx-chess-board/lib/engine/coords/coords-provider';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})

  // ngAfterViewInit() {
  //   let content = '<button id="button" class="button" >My button </button>';
  //   let doc =  this.iframe.nativeElement.contentDocument || this.iframe.nativeElement.contentWindow;
  //   doc.open();
  //   doc.write(content);
  //   doc.close();
  // }



export class AppComponent {
  @ViewChild('iframe')
  boardManager!: NgxChessBoardComponent;
  

  title = 'mainpage';
  url: string = "http://localhost:4401/";
  urlSafe: any;
  sentdata(){
    console.log("test");
  }
  

  constructor(public sanitizer: DomSanitizer) {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);                                             
    window.addEventListener("message", (event)=>{
      console.log("message sent: ", event.data);

      var iframe1 = document.getElementsByTagName("iframe")[1].contentWindow;
      console.log("x: ", iframe1);
      iframe1?.postMessage(event.data, "*");  
    }) 

    window.addEventListener("message", (ev) =>{
      console.log("message came back", ev);
      if(ev.data === "iframe1"){
        console.log("make this move on other iframe2");
        this.boardManager.move('d2d4');
      }
    })

  

  }

  

  // public moveManual(): void {
  //   window.addEventListener("message", () =>{
  //     this.boardManager.move('d2d4');
  // })

  

}











// stuff that was removed from constructor
/*
   window.addEventListener("load" , function(){      
    var iframe1: HTMLElement| any = document.getElementsByTagName("iframe1");
    if (iframe1 instanceof HTMLElement){
        iframe1.addEventListener("mouseup" , function(){
        iframe1.contentWindow.postMessage("message sent from iframe1");
        console.log("iframe1 message");
      })
    }
  
  })
*/

