import { Component, OnInit } from '@angular/core';
import { Application } from '@nativescript/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { Feedback, FeedbackType, FeedbackPosition } from "nativescript-feedback";
import { firebase } from '@nativescript/firebase';
import { UserModel } from '../model/user.model';
import { capitalizationType, Dialogs, inputType, PromptOptions, PromptResult } from "@nativescript/core";
import { RouterExtensions } from '@nativescript/angular';

@Component({
	moduleId: module.id,
	selector: 'Login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
	private feedback: Feedback;
	public model: UserModel;
	isLoggingIn = true;

	constructor( private router: RouterExtensions) { 
		this.feedback = new Feedback();
		this.model=new UserModel();
		this.model.email="";
		this.model.password="";
	}

	ngOnInit() { 

		//this.feedback.warning({
		//	title:"Aviso",
		//	message: "Aun no has iniciado sesión, "
		//  });
		
	
		
	}
	toggleForm() {
		this.isLoggingIn = !this.isLoggingIn;
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
			this.feedback.success({
				title:"Bienvenido",
				message: "Inició sessión correctamente "
				
			  });

			this.router.navigate(['/home']);
		
			
		}, (error)=>{
			console.log(error);
			this.feedback.error({
				title:"Error",
				message: "No se pudo iniciar sessión "
				
			  });


	
		});
	}
	forgotPassword() {

		let options: PromptOptions = {
            title: "Reestablecer contraseña",
            message: "Escribe tu correo electrónico",
            okButtonText: "OK",
            cancelButtonText: "Cancel",
            cancelable: true,
            inputType: inputType.text, // email, number, text, password, or email
            capitalizationType: capitalizationType.sentences // all. none, sentences or words
        };

        Dialogs.prompt(options).then((result: PromptResult) => {
            console.log("Hello, " + result.text);
        });
	  }

	  submit() {
		if (this.isLoggingIn) {
			this.auth();
		} else {
			// Perform the registration
		}
	  }

	  
}