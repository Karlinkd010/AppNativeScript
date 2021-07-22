import { Component, OnInit } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'
import { RouterExtensions } from '@nativescript/angular'
require( "nativescript-localstorage" );
import {
  DrawerTransitionBase,
  RadSideDrawer,
  SlideInOnTopTransition,
} from 'nativescript-ui-sidedrawer'
import { filter } from 'rxjs/operators'
import { Application,Dialogs } from '@nativescript/core'
import { TNSFancyAlert } from '@nstudio/nativescript-fancyalert';

@Component({
  selector: 'ns-app',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  private _activatedUrl: string
  private _sideDrawerTransition: DrawerTransitionBase

  constructor(private router: Router, private routerExtensions: RouterExtensions) {
    // Use the component constructor to inject services.
  }

  ngOnInit(): void {
    this._activatedUrl = '/home'
    this._sideDrawerTransition = new SlideInOnTopTransition()

    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => (this._activatedUrl = event.urlAfterRedirects))
  }

  get sideDrawerTransition(): DrawerTransitionBase {
    return this._sideDrawerTransition
  }

  isComponentSelected(url: string): boolean {
    return this._activatedUrl === url
  }

  onNavItemTap(navItemRoute: string): void {
    this.routerExtensions.navigate([navItemRoute], {
      transition: {
        name: 'fade',
      },
    })

    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.closeDrawer()
  }
  onClose() {
    Dialogs.confirm({
      title: "Salir",
      message: "¿Estas seguro de salir de la aplicación?",
      okButtonText: "Si",
      cancelButtonText: "No",
      
  }).then(function (result) {
      // result argument is boolean
      console.log("Dialog result: " + result);
      localStorage.removeItem("LoggedInUser");
      this.routerExtensions.navigate(['/inf-user']);
      console.log("hola");
     
  });
  }

  close(){
   
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.closeDrawer()


    TNSFancyAlert.showWarning(
      "Salir",
      "¿Estas seguro de salir de la aplicación?: ",
      "Aceptar",
    ).then(() => {
      this.onCloseNavigate();

    });
   
  }

  onCloseNavigate(){
    localStorage.removeItem("LoggedInUser"); 
    this.routerExtensions.navigate(['/inf-user'], { clearHistory: true  , transition: {
      name: 'slide',
    }, });

  }
}
