import {Injectable} from '@angular/core'
import { Router } from '@angular/router';
import { SecureStorage } from '@nativescript/secure-storage';
require( "nativescript-localstorage" );
@Injectable({
    providedIn:"root"

})
export class LoginService{
    secureStorage =  new SecureStorage();

    constructor(private router: Router){

    }

    getToken() {
      this.secureStorage.get({
          key: "id"
        }).then(
          function(value) {
            console.log("Got value: " + value);
          }
        );

        var value = this.secureStorage.getSync({
          key: "id"
        });

        console.log(value)
        return value;
      }
    
      isLoggednIn() {
        return this.getToken() !== null;
      }
    
      logout() {
        localStorage.removeItem("LoggedInUser");
        this.router.navigate(["login"]);
      }

      sendToken(token:string){
      console.log("tokkkkkeekehjkhjd  "+token);
      this.secureStorage.set({
        key: 'id',
        value: token
      }).then(success => console.log("Successfully set a value? " + success)
    );

	}
  sendToken1(token: string) {
    localStorage.setItem("LoggedInUser", token)
  }

  getToken1() {
    return localStorage.getItem("LoggedInUser")
  }

  isLoggednIn1() {
    return this.getToken1() !== null;
  }

  logout1() {
    localStorage.removeItem("LoggedInUser");
    this.router.navigate(["login"]);
  }
    

}