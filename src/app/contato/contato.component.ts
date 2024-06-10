import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      textbox: ['', Validators.required]
    });
  }
  ngOnInit(): void {}


  salvar(): void {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
    }
  }

}


