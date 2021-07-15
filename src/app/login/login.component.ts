import { Component, OnInit } from '@angular/core';
import { Application, Frame, login } from '@nativescript/core';
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

	constructor( private router: RouterExtensions) { 
		this.feedback = new Feedback();
		this.model=new UserModel();
		this.model.email="";
		this.model.password="";
	}

	ngOnInit() { 
		
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
            title: "Reestablecer la  contraseña",
            message: "Escribe tu correo electrónico",
            okButtonText: "OK",
            cancelButtonText: "Cancel",
            cancelable: true,
            inputType: inputType.text, // email, number, text, password, or email
            capitalizationType: capitalizationType.sentences // all. none, sentences or words
        };
		Dialogs.prompt(options).then((result: PromptResult) => {
			this.resetPassword(result.text);
            console.log("Correo enviado, " + result.text);
        });
	}
	
	public resetPassword(mail:string){
		firebase.sendPasswordResetEmail(mail)
		.then(() => 
					
					this.feedback.success({
						title:"Excelente",
						message: "Se ha enviado un correo para reestablecer la contraseña"
						
					})

		)
		.catch(error => this.feedback.error({
						title:"Erroe",
						message: "Verifique su correo electronico"
						
					})
					

		);
	}
	registro(){
		this.router.navigate(['/registro']);
	}
}



