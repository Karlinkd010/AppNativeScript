import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application } from '@nativescript/core'
import * as SocialShare from "@nativescript/social-share";


@Component({
  selector: 'Browse',
  templateUrl: './browse.component.html',
})
export class BrowseComponent implements OnInit {

  a:string;
	b:string;
  constructor() {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Init your component properties here.
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }

  send(){
    console.log(this.a);
   console.log(this.b);
   // SocialShare.shareUrl('https://www.nativescript.org/', this.asunto, this.text);
   SocialShare.shareUrl('https://www.nativescript.org/'+this.b, 'Home of NativeScript'+this.a, 'How would you like to share this url');
  }
}
