import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('myForm') as HTMLFormElement;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const search = (document.getElementById('search') as HTMLInputElement).value;

    console.log('Pesquisa:', search);


  });
});
