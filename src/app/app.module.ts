import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RUTAS } from "app.routes";
import { Routes, RouterModule } from '@angular/router';

// COMPONENTES:
import { AppComponent } from './app.component';
import { HomeComponent } from "app/components/home/home.component";
import { GruposComponent } from './components/grupos/grupos.component';
import { LlamadasComponent } from './components/llamadas/llamadas.component';
import { ResaltadoDirective } from './directives/resaltado.directive';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GruposComponent,
    LlamadasComponent,
    ResaltadoDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(RUTAS)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
