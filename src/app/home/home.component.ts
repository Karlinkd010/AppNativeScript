import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application,Dialogs } from '@nativescript/core'
import { TNSFancyAlert, TNSFancyAlertButton } from "@nstudio/nativescript-fancyalert";
import { Feedback, FeedbackType, FeedbackPosition } from "nativescript-feedback";
import { Color } from "tns-core-modules/color";

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  private feedback: Feedback;

  numero2:number;
  numero1:number;
  res:number;
  constructor() {
    this.feedback = new Feedback();
  }
  ngOnInit(): void {

  }
  
  onButtonClick(){

    if(this.numero1 ==undefined || this.numero1 ==NaN || this.numero2 ==undefined || this.numero2==NaN){
      this.feedback.error({
        title: "¡Ups!, ¡Ocurrio un error!",
        message: "¡Campos vacios, no se puede realizar la operación!",
        duration: 1000
      })

    }else{
      TNSFancyAlert.showSuccess(
        "Success!",
        "Resultado: " +this.multi(this.numero1,this.numero2),
        "Aceptar!"
      ).then(() => {

      });

    }

   
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
