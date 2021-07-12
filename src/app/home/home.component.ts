import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application,Button,Dialogs, EventData } from '@nativescript/core'
import { TNSFancyAlert, TNSFancyAlertButton } from "@nstudio/nativescript-fancyalert";
import { Feedback, FeedbackType, FeedbackPosition } from "nativescript-feedback";
import { RouterExtensions } from '@nativescript/angular';


@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  private feedback: Feedback;

  numero2:number;
  numero1:number;
  res:number;
  constructor(   private routerExtensions: RouterExtensions,) {
    this.feedback = new Feedback();

  }
  ngOnInit(): void {

  }

  onTap(args: EventData) {
    let button = args.object as Button;

    if(this.numero1 ===null ||  this.numero2===null){
      this.feedback.error({
        title: "¡Ups!, ¡Ocurrio un error!",
        message: "¡Campos vacios, no se puede realizar la operación!",
        duration: 1000
      })

    }else{

    switch (button.id) {
        case "btn-suma":
          this.suma();
         
            break;
        case "btn-resta":
          this.resta();
            
            break;
        case "btn-multi":
          this.multiplicacion();
            
            break;
        case "btn-divi":
          this.division();
           
            break;
    }
    this.routerExtensions.navigate(["/home"]);

  }
}
  
  multiplicacion(){
      TNSFancyAlert.showSuccess(
        "Multiplicación!",
        "Resultado: " +this.multi(this.numero1,this.numero2),
        "Aceptar!"
      ).then(() => {
       

      });

    }

   
  

  division(){

    this.res=(this.numero1 / this.numero2);
    TNSFancyAlert.showSuccess(
      "División!",
      "Resultado: " +this.res.toString(),
      "Aceptar!"
    ).then(() => {
    });
   }

   suma(){
    this.res=parseFloat(this.numero1.toString()) + parseFloat(this.numero2.toString());
 
    TNSFancyAlert.showInfo(
      "Suma!",
      "Resultado: " +this.res.toString(),
      "Aceptar!"
    ).then(() => {
    });
   }

   resta(){
    this.res=(this.numero1 - this.numero2);
 
    TNSFancyAlert.showInfo(
      "Resta!",
      "Resultado: " +this.res.toString(),
      "Aceptar!"
    ).then(() => {
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
