import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'
import { NativeScriptFormsModule } from "@nativescript/angular";
import { UserService} from './service/user.service'
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular'
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import {LoginComponent} from './login/login.component'
import {RegistroComponent} from './login/registro/registro.component'
import {InfUserComponent} from './inf-user/inf-user.component'
import {CalculadoraComponent} from './calculadora/calculadora.component'
import {Restablecer_passComponent} from './login/restablecer_pass/restablecer_pass.component'


@NgModule({
  bootstrap: [AppComponent],
  imports: [AppRoutingModule,
            NativeScriptFormsModule,
            NativeScriptModule, 
            NativeScriptUISideDrawerModule,
            FormsModule,
            HttpClientModule
            ],
  declarations: [AppComponent,
                LoginComponent,
                InfUserComponent,
                CalculadoraComponent,
                RegistroComponent,
                Restablecer_passComponent
              ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [UserService],
})
export class AppModule {}
