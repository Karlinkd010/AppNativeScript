import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { firebase } from '@nativescript/firebase';
import { Feedback } from 'nativescript-feedback';
import { UserModel } from '~/app/model/user.model';

@Component({
	moduleId: module.id,
	selector: 'registro',
	templateUrl: './registro.component.html',
	styleUrls: ['./registro.component.css']
})

export class RegistroComponent implements OnInit {
	private feedback: Feedback;
	
	public model: UserModel;
	

	constructor( private router: RouterExtensions) { 
		this.feedback = new Feedback();
		this.model=new UserModel();
		this.model.email="";
		this.model.password="";
	}

	ngOnInit() { }

		///metodo create -----
	Create(){
		firebase.createUser({
			email: this.model.email,
			password: this.model.password,
		}).then((user)=>{
			this.feedback.success({
			title:"Excelente",
			message: "Se ha registrado corectamente, Inicia sessión"
		});
		console.dir(user);
		this.login1();
		},
		(error) =>{
			this.feedback.warning({
				title:"Error",
				message: "Error al registrarse "+ error
			});
		});
	}	

	login1(){
		this.router.navigate(['/login']);
	}
}