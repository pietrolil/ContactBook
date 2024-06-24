import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from '../../componentes/container/container.component';
import { SeparadorComponent } from '../../componentes/separador/separador.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ContatoService } from '../../services/contato.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [
	CommonModule,
	ContainerComponent,
	SeparadorComponent,
	ReactiveFormsModule,
	RouterLink
  ],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent implements OnInit {

	contatoForm!: FormGroup;

	constructor(
		private contatoService: ContatoService,
		private router : Router,
	) {

	}

	ngOnInit() {
		this.inicializarForm();
	}

	inicializarForm() {
		this.contatoForm = new FormGroup({
			nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
			telefone: new FormControl('', [Validators.required, Validators.minLength(11)]),
			email: new FormControl('', [Validators.required, Validators.email]),
			aniversario: new FormControl(''),
			redes: new FormControl(''),
			observacoes: new FormControl(''),
		})
	}

	salvarContato() {
		const novoContato = this.contatoForm.value;

		this.contatoService.salvarContato(novoContato);

		this.contatoForm.reset();

		this.router.navigateByUrl('/home');
	}

	cancelar() {
		this.contatoForm.reset();
	}
}
