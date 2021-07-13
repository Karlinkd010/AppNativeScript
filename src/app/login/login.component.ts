import { Component, OnInit } from '@angular/core';
import { Application } from '@nativescript/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { Feedback, FeedbackType, FeedbackPosition } from "nativescript-feedback";
import { firebase } from '@nativescript/firebase';
import { UserModel } from '../model/user.model';

@Component({
	moduleId: module.id,
	selector: 'Login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

	name:string;
    email:string;
    phone:number;
    username:string;
    password:string;
    foto:string;
	private feedback: Feedback;

	public model: UserModel;


	constructor( ) { 
		this.feedback = new Feedback();
		this.model=new UserModel();
		this.model.email="karlinkd010@gmail.com";
		this.model.password="karlin";


	}

	ngOnInit() { 

		//this.feedback.warning({
		//	title:"Aviso",
		//	message: "Aun no has iniciado sesión, "
		//  });
		
	
		
	}

	onDrawerButtonTap(): void {
		const sideDrawer = <RadSideDrawer>Application.getRootView()
		sideDrawer.showDrawer()
	  }

	Create(){
		firebase.createUser({
			email: "jorgeucano@gmail.com",
			password: "micanal"
		}).then((user)=>{
			console.dir(user);
		}, (error) =>{
			this.feedback.warning({
				title:"Error",
				message: "Aun no has iniciado sesión, "+ error
				
			  });
		});

	}

	auth(){
		firebase.login({
			type: firebase.LoginType.PASSWORD,
			email: this.model.email,
			password: this.model.password
		}).then((user)=>{
			console.dir(user);
		}, (error)=>{
			this.feedback.error({
				title:"Error",
				message: "No se pudo iniciar sessión "+error
				
			  });
	
		});
	}

	  
}