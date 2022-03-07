import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mainpage';
  url: string = "http://localhost:4401/";
  urlSafe: any;
  sentdata(){
    console.log("test");
  }

  constructor(public sanitizer: DomSanitizer) {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    window.addEventListener("message", (ev)=>{
      console.log("message sent", ev.data);
     
      
    })

   window.addEventListener("load" , function(){      
    var iframe1: HTMLElement| any = document.getElementById("iframe1");
    if (iframe1 instanceof HTMLElement){
      iframe1.addEventListener("mouseup" , function(){
        iframe1.contentWindow.postMessage("message sent from iframe1");
        console.log("iframe1 message");
      })
    }
  
  })
    
  }

}






