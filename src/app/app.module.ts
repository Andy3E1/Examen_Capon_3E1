import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ventana1Component } from './Componentes/ventana1/ventana1.component';
import { Ventana2Component } from './Componentes/ventana2/ventana2.component';

@NgModule({
  declarations: [
    AppComponent,
    Ventana1Component,
    Ventana2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
