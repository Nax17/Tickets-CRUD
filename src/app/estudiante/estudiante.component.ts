import { Component, OnInit } from '@angular/core';
import { EstudianteService } from './estudiante.service';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.scss']
})
export class EstudianteComponent implements OnInit {
  estudiantes;
  constructor(service:EstudianteService) { 
    this.estudiantes = service.getEstudiantes();
  }

  ngOnInit() {
  }

}
