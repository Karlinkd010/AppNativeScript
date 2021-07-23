import { Component, OnInit } from '@angular/core';
import { UserModel } from '~/app/model/user.model';
import * as imagepicker from '@nativescript/imagepicker'

@Component({
	moduleId: module.id,
	selector: 'edit-perfil',
	templateUrl: './edit-perfil.component.html',
	styleUrls: ['./edit-perfil.component.css']
})

export class EditPerfilComponent implements OnInit {
	public model: UserModel;

	constructor() { 
		this.model=new UserModel();
		
	}
	context = imagepicker.create({
		mode: 'single' // use "multiple" for multiple selection
	  })

	ngOnInit() { }


}