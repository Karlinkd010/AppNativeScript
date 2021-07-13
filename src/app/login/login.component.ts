import { Component, OnInit } from '@angular/core';
import { Application } from '@nativescript/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { Feedback, FeedbackType, FeedbackPosition } from "nativescript-feedback";
import { firebase } from "@nativescript/firebase";

@Component({
	moduleId: module.id,
	selector: 'Login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
	private feedback: Feedback;
	user:string;
	password:string;

	constructor() { 
		this.feedback = new Feedback();

		

		  firebase.init({
			// Optionally pass in properties for database, authentication and cloud messaging,
			// see their respective docs.
		  }).then(
			() => {
			  console.log("firebase.init done");
			},
			error => {
			  console.log(`firebase.init error: ${error}`);
			}
		  );
	}

	ngOnInit() { 

		this.feedback.warning({
			title:"Aviso",
			message: "Aun no has iniciado sesión, "
		  });
	}

	onDrawerButtonTap(): void {
		const sideDrawer = <RadSideDrawer>Application.getRootView()
		sideDrawer.showDrawer()
	  }
}