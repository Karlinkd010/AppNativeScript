import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application,Dialogs } from '@nativescript/core'
@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  numero2:number;
  numero1:number;
  res:number;
  constructor() {

  }
  ngOnInit(): void {

  }
  
  onButtonClick(){
   this.res=(this.numero1*this.numero2);
    Dialogs.alert({
      title:"Resultado",
      message: this.multi(this.numero1,this.numero2),
      okButtonText: "Aceptar"
    }).then(function(){
      console.log("Dialogo");
    });
  }

  onButtonClick1(){

    this.res=(this.numero1 / this.numero2);
 
     Dialogs.alert({
       title:"Resultado",
       message:this.res.toString() ,
       okButtonText: "Aceptar"
     }).then(function(){
       console.log("Dialogo");
     });
   }
   onButtonClick2(){
    this.res=parseFloat(this.numero1.toString()) + parseFloat(this.numero2.toString());
 
     Dialogs.alert({
       title:"Resultado",
       message:this.res.toString() ,
       okButtonText: "Aceptar"
     }).then(function(){
       console.log("Dialogo");
     });
   }
   onButtonClick3(){
    this.res=(this.numero1 - this.numero2);
 
     Dialogs.alert({
       title:"Resultado",
       message:this.res.toString() ,
       okButtonText: "Aceptar"
     }).then(function(){
       console.log("Dialogo");
     });
   }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }

 multi(n1:number,n2:number){

    return (n1*n2).toString();
  }




 
}
