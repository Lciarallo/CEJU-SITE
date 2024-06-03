import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Corrigido styleUrl para styleUrls
})
export class LoginComponent {
  textLogin = new FormControl('');
  textSenha = new FormControl('');

  constructor() {
    this.textLogin.valueChanges.subscribe(value => {
      console.log('Login: ', value);
    });
    this.textSenha.valueChanges.subscribe(value => {
      console.log('Senha: ', value);
    });
    
  }

  salvar(): void {

    const data = {
        login: this.textLogin.value,
        senha: this.textSenha.value
    }
    console.log(data);
}
}
