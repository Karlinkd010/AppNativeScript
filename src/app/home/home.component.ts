import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application,Button,Dialogs, EventData } from '@nativescript/core'
import { TNSFancyAlert, TNSFancyAlertButton } from "@nstudio/nativescript-fancyalert";
import { Feedback, FeedbackType, FeedbackPosition } from "nativescript-feedback";
import { RouterExtensions } from '@nativescript/angular';

import { firebase } from "@nativescript/firebase";


@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  

  constructor( ) {
   

    

  }
  ngOnInit(): void {

  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }






 
}


