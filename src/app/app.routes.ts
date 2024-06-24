import { Routes } from '@angular/router';
import { FormularioComponent } from './paginas/formulario/formulario.component';
import { ListaContatosComponent } from './paginas/lista-contatos/lista-contatos.component';

export const routes: Routes = [
	{
		path: 'form',
		component: FormularioComponent,
	},
	{
		path: 'home',
		component: ListaContatosComponent,
	},
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full',
	}
];
