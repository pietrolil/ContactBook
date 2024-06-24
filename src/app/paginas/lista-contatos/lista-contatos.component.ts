import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { ContainerComponent } from '../../componentes/container/container.component';
import { CabecalhoComponent } from '../../componentes/cabecalho/cabecalho.component';
import { SeparadorComponent } from '../../componentes/separador/separador.component';
import { ContatoComponent } from '../../componentes/contato/contato.component';
import { FormularioComponent } from '../formulario/formulario.component';
import { ContatoService } from '../../services/contato.service';
import { Contato } from '../../componentes/contato/contato';

@Component({
  selector: 'app-lista-contatos',
  standalone: true,
  imports: [
	ContainerComponent,
	CabecalhoComponent,
	SeparadorComponent,
	ContatoComponent,
	FormsModule,
	FormularioComponent,
	RouterLink,
  ],
  templateUrl: './lista-contatos.component.html',
  styleUrl: './lista-contatos.component.css'
})
export class ListaContatosComponent implements OnInit {
	alfabeto: string = 'abcdefghijklmnopqrstuvwxyz';
	contatos: Contato[] = [];

	filtroPorTexto: string = '';

	constructor(private contatoService: ContatoService) {}

	ngOnInit() {
		this.contatos = this.contatoService.obterContatos();
	}

	private removerAcentos(texto: string): string {
		return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
	}

	filtrarContatosPorTexto(): Contato[] {
		if (!this.filtroPorTexto){
			return this.contatos;
		}

		return this.contatos.filter(contato => {
			return this.removerAcentos(contato.nome).toLowerCase().includes(this.filtroPorTexto.toLowerCase());
		});
	}

	filtrarContatosPorLetraInicial(letra: string) : Contato[] {
		return this.filtrarContatosPorTexto().filter( contatos => {
			return this.removerAcentos(contatos.nome).toLowerCase().startsWith(letra);
		});
	}
}
