import { Component, OnInit } from '@angular/core';
import { Application } from '@nativescript/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { Feedback, FeedbackType, FeedbackPosition } from "nativescript-feedback";

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

		this.feedback.warning({
			title:"Aviso",
			message: "Aun no has iniciado sesión, "
		  });
	}

	ngOnInit() { 

	}

	onDrawerButtonTap(): void {
		const sideDrawer = <RadSideDrawer>Application.getRootView()
		sideDrawer.showDrawer()
	  }
}