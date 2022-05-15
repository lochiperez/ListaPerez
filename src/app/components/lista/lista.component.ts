import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  boton = 'Mostrar listado'
  showme = false
  alumnos = [{
    nombre: 'rodrigo',
    apellido: 'perez',
    nota: 10,
    trabaja: 'si',
    lenguaje: 'angular'
  },
  {
    nombre: 'federico',
    apellido: 'perez',
    nota: 5,
    trabaja: 'no',
    lenguaje: 'Java'
  }, {
    nombre: 'ruben',
    apellido: 'perez',
    nota: 3,
    trabaja: 'si',
    lenguaje: 'Vue'
  }, {
    nombre: 'marcela',
    apellido: 'perez',
    nota: 8,
    trabaja: 'no',
    lenguaje: 'React'
  }, {
    nombre: 'Maximiliano',
    apellido: 'perez',
    nota: 7,
    trabaja: 'si',
    lenguaje: 'angular'
  }, {
    nombre: 'Marisol',
    apellido: 'perez',
    nota: 1,
    trabaja: 'no',
    lenguaje: 'angular'
  }, {
    nombre: 'Victoria',
    apellido: 'perez',
    nota: 10,
    trabaja: 'si',
    lenguaje: 'Ruby'
  }, {
    nombre: 'Debora',
    apellido: 'perez',
    nota: 3,
    trabaja: 'no',
    lenguaje: 'Python'
  }, {
    nombre: 'David',
    apellido: 'perez',
    nota: 4,
    trabaja: 'si',
    lenguaje: 'Javascript'
  }, {
    nombre: 'Leandro',
    apellido: 'perez',
    nota: 6,
    trabaja: 'no',
    lenguaje: 'Vue'
  }, {
    nombre: 'Diego',
    apellido: 'perez',
    nota: 9,
    trabaja: 'si',
    lenguaje: 'React'
  }]

  mostrar() {
    if (this.showme == false) {
      this.boton = 'ocultar listado'
    } else {
      this.boton = 'mostrar listado'
    }

  }
  constructor() { }

  ngOnInit(): void {
  }

}
