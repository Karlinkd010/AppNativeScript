import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { firebase } from '@nativescript/firebase';
import { TNSFancyAlert } from '@nstudio/nativescript-fancyalert';
import { Feedback } from 'nativescript-feedback';
import { UserModel } from '~/app/model/user.model';

@Component({
	moduleId: module.id,
	selector: 'restablecer_pass',
	templateUrl: './restablecer_pass.component.html',
	styleUrls: ['./restablecer_pass.component.css']
})

export class Restablecer_passComponent implements OnInit {

	private feedback: Feedback;
	
	public model: UserModel;
	enviado:boolean=false;
	

	constructor( private router: RouterExtensions) { 
		this.feedback = new Feedback();
		this.model=new UserModel();
		this.model.email="";
		
	}

	ngOnInit() { }

		
	public resetPassword(){
		firebase.sendPasswordResetEmail(this.model.email)
		.then(() =>
			this.mensaje_enviado()
		).catch(error =>
			this.mensaje_noenviado()
		);
	}

	login1(){
		this.router.navigate(['/login']);
	}

	mensaje_enviado(){
		TNSFancyAlert.showSuccess(
			"Correo enviado",
			"Se ha enviado una liga a su correo para restablecer la contraseña",
			"Aceptar"
		  ).then(() => {
			  this.login1();
		  });
	}
	mensaje_noenviado(){
		TNSFancyAlert.showError(
			"Correo no enviado",
			"Verifique su correo electronico",
			"Aceptar!"
		  ).then(() => {
		  });
	}



}