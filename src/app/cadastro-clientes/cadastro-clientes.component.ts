import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilTemplate } from '../util/UtilTemplate';



@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css']
})
export class CadastroClientesComponent implements OnInit {
  formCadastro: FormGroup;
  conversao: string;

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formCadastro = this.fb.group({
      nome: ['', Validators.required],
      cpf: ['',Validators.required],
      email: ['',Validators.required],
      telefone: ['',Validators.required],
      dtNascimento: ['', Validators.required]
    });
  }

  cadastro(){
    if(this.formCadastro.valid){
      this.conversao = JSON.stringify(this.formCadastro.value);
      localStorage.setItem('cadastro', this.conversao);
    }else{
      console.log(this.formCadastro)
      this.formCadastro.markAllAsTouched()
      this.formCadastro.markAsDirty()

    }

  }

  // cadastro(){
  //   this.conversao = JSON.stringify(this.formCadastro.value);
  //   localStorage.setItem('cadastro', this.conversao);
  // }

}
