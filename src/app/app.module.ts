import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonaCompComponent } from './persona-comp/persona-comp.component';
import { PortfolioContenidoComponent } from './portfolio-contenido/portfolio-contenido.component';
import { PortfolioHeaderComponent } from './portfolio-header/portfolio-header.component';
import { PortfolioFooterComponent } from './portfolio-footer/portfolio-footer.component';
import { PortfolioContactFormComponent } from './portfolio-contact-form/portfolio-contact-form.component';
import { PortfolioCertificacionComponent } from './portfolio-certificacion/portfolio-certificacion.component';
import { PortfolioEducacionComponent } from './portfolio-educacion/portfolio-educacion.component';
import { PortfolioBioComponent } from './portfolio-bio/portfolio-bio.component';
import { PortfolioScrollToTopComponent } from './portfolio-scroll-to-top/portfolio-scroll-to-top.component';
import { FormsModule } from '@angular/forms';
import { PortfolioLoginComponent } from './portfolio-login/portfolio-login.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonaCompComponent,
    PortfolioContenidoComponent,
    PortfolioHeaderComponent,
    PortfolioFooterComponent,
    PortfolioContactFormComponent,
    PortfolioCertificacionComponent,
    PortfolioEducacionComponent,
    PortfolioBioComponent,
    PortfolioScrollToTopComponent,
    PortfolioLoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
