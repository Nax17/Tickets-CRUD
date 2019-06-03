import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { TrabajadorComponent } from './trabajador/trabajador.component';
import { ExternoComponent } from './externo/externo.component';
import { PiscinaComponent } from './piscina/piscina.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    EstudianteComponent,
    TrabajadorComponent,
    ExternoComponent,
    PiscinaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
