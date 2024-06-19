import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-preinscricao',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './preinscricao.component.html',
  styleUrl: './preinscricao.component.css'
})
export class PreinscricaoComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      opcoes: ['', Validators.required]
    });
  }
  ngOnInit(): void {}


  salvar(): void {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
    }
  }
}
