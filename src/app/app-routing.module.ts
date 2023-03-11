import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PortfolioContactFormComponent } from './portfolio-contact-form/portfolio-contact-form.component';
import { PortfolioContenidoComponent } from './portfolio-contenido/portfolio-contenido.component';
import { PortfolioHeaderComponent } from './portfolio-header/portfolio-header.component';
import { PortfolioLoginComponent } from './portfolio-login/portfolio-login.component';

const routes: Routes = [
  //{path: '', component:AppComponent,pathMatch:'full'},
  {path: 'contact-form', component: PortfolioContactFormComponent},
  {path: 'login', component: PortfolioLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
