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
      console.log("parent recieves: ", event.data);

        let move = event.data[1];
        console.log("accessing move data: ", move);

        let iframe2 = document.getElementsByTagName("iframe")[1].contentWindow;
        console.log("iframe2: ", iframe2);
        iframe2?.postMessage(event.data, "*");   
          
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

