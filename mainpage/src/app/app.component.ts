import { Component, ViewChild, ElementRef  } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MoveChange, NgxChessBoardView } from 'ngx-chess-board';
import { CoordsProvider } from 'ngx-chess-board/lib/engine/coords/coords-provider';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})



export class AppComponent {
  title = 'mainpage';
  url: string = "http://localhost:4401/";
  urlSafe: any;
  sentdata(){
    console.log("test");
  }
  

  // @ViewChild('board', { static: false })
  // board!: NgxChessBoardView;

  // ngAfterViewInit() {
  //   let content = '<button id="button" class="button" >My button </button>';
  //   let doc =  this.iframe.nativeElement.contentDocument || this.iframe.nativeElement.contentWindow;
  //   doc.open();
  //   doc.write(content);
  //   doc.close();
  // }

  constructor(public sanitizer: DomSanitizer) {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    window.addEventListener("message", (event)=>{
      console.log("message sent: ", event.data);  
    })
    window.addEventListener("message", (event)=>{
      console.log("message sent: ", event.data);
      
      
      let iframe = document.getElementById('iframe1') as HTMLIFrameElement;
      console.log("test", iframe);
    }) 

    

  }

  


}







function jQuery(document: Document) {
  throw new Error('Function not implemented.');
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

