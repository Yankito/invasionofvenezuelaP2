import { Component } from '@angular/core';
import {Router, RouterLink, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule, NgIf, NgOptimizedImage} from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-estudiante-admin',
  standalone: true,
  imports: [RouterModule, RouterLink, FormsModule, NgIf, CommonModule, HttpClientModule, NgOptimizedImage],
  templateUrl: './estudiante-admin.component.html',
  styleUrl: './estudiante-admin.component.css'
})
export class EstudianteAdminComponent {

  visible = false;

  estudiantes = [
    { matricula: '2021407020',
      nombre: 'Gustavo Torres',
      cursos: ['Construcción de Software','Redes de Computadores','Responsabilidad social','Ingeniería Comercial'],
      mostrarAsignaturas: false },

    { matricula: '2021407019',
      nombre: 'Mapote Palote',
      cursos:  ['Teoría de sistemas','Modelos discretos'],
      mostrarAsignaturas: false },

    { matricula: '2020407020',
      nombre: 'Franco Bessolo',
      cursos: ['Física General','Fundamentos de Administración','Construcción de Software','Redes de Computadores','Sistemas Operativos','Máquinas Abstractas'],
      mostrarAsignaturas: false},

    { matricula: '2022451016',
      nombre: 'Anais Saavedra',
      cursos: ['Derecho Penal','Derecho Administrativo','Derecho del Trabajo','Drechos Reales','Derecho Procesal','Contexto Cultural'],
      mostrarAsignaturas: false},
  ];
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
      //this.getEstudiantes();
      console.log('Estudiantes: ',this.estudiantes);
  }

  getEstudiantes(): void {
    this.http.get<any[]>('http://localhost:8080/estudiante/getall')
      .subscribe(
        (data: any[]) => {
          console.log('Estudiantes obtenidos', data);

          this.estudiantes = data;
        },
        (error: any) => {
          console.error('Error al obtener los estudiantes', error);
        }
      );
  }

  navegarAdministrador() {
    this.router.navigate(['/administrador']);
  }

  abrirModal() {
    this.visible = true;
  }

  cerrarModal() {
    this.visible = false;
  }
}
