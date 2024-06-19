import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BannerComponent } from './banner/banner.component';
import { ContatoComponent } from './contato/contato.component';
import { PreinscricaoComponent } from './preinscricao/preinscricao.component';

export const routes: Routes = [
    {path: '', component: BannerComponent},
    {path: 'login', component: LoginComponent},
    {path: 'contato', component: ContatoComponent},
    {path: 'preinscricao', component: PreinscricaoComponent}
];
