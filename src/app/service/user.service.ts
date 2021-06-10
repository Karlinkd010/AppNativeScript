
import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core'
@Injectable({
    providedIn:"root"

})
export class UserService{

    constructor(private http:HttpClient){

    }

    getUser(){

        return this.http.get("https://jsonplaceholder.typicode.com/users/1");
    }


}

