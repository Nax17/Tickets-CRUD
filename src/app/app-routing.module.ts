import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { HomeComponent } from './home/home.component';
import { ExternoComponent } from './externo/externo.component';
import { TrabajadorComponent } from './trabajador/trabajador.component';
import { PiscinaComponent } from './piscina/piscina.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'estudiante', component: EstudianteComponent },
  { path: 'trabajador', component: TrabajadorComponent },
  { path: 'externo', component: ExternoComponent },
  { path: 'piscina', component: PiscinaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
