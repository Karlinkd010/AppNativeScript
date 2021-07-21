import { Component, OnInit } from '@angular/core';
import { Feedback, FeedbackType, FeedbackPosition } from "nativescript-feedback";
import { firebase } from '@nativescript/firebase';
import { UserModel } from '../model/user.model';
import { RouterExtensions } from '@nativescript/angular';
import { LoginService } from '../service/login.service';

@Component({
	moduleId: module.id,
	selector: 'Login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
	private feedback: Feedback;	
	public model: UserModel;
	

	constructor( private router: RouterExtensions,private login: LoginService) { 
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
			this.login.sendToken1(user.uid);
			this.router.navigate(['/home']);
		
			
		}, (error)=>{
			console.log(error);
			this.feedback.error({
				title:"Error",
				message: "No se pudo iniciar sessión "
				
			});


	
		});
	}

	registro(){
		this.router.navigate(['/registro']);
	}

	restablecer(){
		this.router.navigate(['/restablcer']);
	}





	
}



