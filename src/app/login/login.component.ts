import { Component, OnInit } from '@angular/core';
import { Application } from '@nativescript/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';

@Component({
	moduleId: module.id,
	selector: 'Login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

	constructor() { }

	ngOnInit() { }

	onDrawerButtonTap(): void {
		const sideDrawer = <RadSideDrawer>Application.getRootView()
		sideDrawer.showDrawer()
	  }
}