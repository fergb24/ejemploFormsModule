import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { PerfilUsuarioComponent } from "./perfil-usuario/perfil-usuario.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, FormsModule, PerfilUsuarioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejemplo-formulario';
  name = new FormControl('');
  apellido = new FormControl('');

  updateName() {
    this.name.setValue('Nancy');
  }
}