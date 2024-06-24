import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { FormularioComponent } from './paginas/formulario/formulario.component';
import { ListaContatosComponent } from './paginas/lista-contatos/lista-contatos.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [
		CommonModule,
		RouterOutlet,
		FormularioComponent,
		ListaContatosComponent
	],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css'
})

export class AppComponent {

}
