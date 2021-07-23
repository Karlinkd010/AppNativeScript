import { Component, OnInit } from '@angular/core';
import { Application } from '@nativescript/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { UserService } from '../service/user.service';
import { UserModel } from '../model/user.model';
import { RouterExtensions } from '@nativescript/angular';

@Component({
	moduleId: module.id,
	selector: 'inf-user',
	templateUrl: './inf-user.component.html',
	styleUrls: ['./inf-user.component.css'],
	providers: [UserService]
})

export class InfUserComponent implements OnInit {

	email:string;
	name:string;
	username:string;
	phone:number;


	constructor(private user: UserService,private routerExtensions: RouterExtensions) { }

	ngOnInit() { 
		this.user.getUser().subscribe((response)=>{
			let json= JSON.stringify(response);
			console.log(json);
			let usermodel:UserModel=JSON.parse(json);
			this.name=usermodel.name;
			this.email=usermodel.email;
			this.username=usermodel.username;
			this.phone=usermodel.phone;


		}, error=>console.log(error));
	}

	onDrawerButtonTap(): void {
		const sideDrawer = <RadSideDrawer>Application.getRootView()
		sideDrawer.showDrawer()
	  }
	  eComponent(){
		this.routerExtensions.navigate(['/edit-perfil'], {  transition: {
			name: 'slide',
		  }, });

	  }
}