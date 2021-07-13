import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application, Button, EventData } from '@nativescript/core'
import { Feedback } from 'nativescript-feedback';
import { TNSFancyAlert } from '@nstudio/nativescript-fancyalert';
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: 'Search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  private feedback: Feedback;
  
  numero2:number;
  numero1:number;
  res:number;
  constructor(  private routerExtensions: RouterExtensions) {
    this.feedback = new Feedback();

    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Init your component properties here.
  }
  onTap(args: EventData) {
    let button = args.object as Button;

    if(this.numero1 ==undefined || this.numero2==undefined){
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
