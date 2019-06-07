import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NavbarComponent } from './CORE/navbar/navbar.component';
import { HeaderComponent } from './CORE/header/header.component';
import { FooterComponent } from './CORE/footer/footer.component';
import { HomeComponent } from './KMMNS/home/home.component';
import { CommitteesComponent } from './KMMNS/committees/committees.component';
import { DatesComponent } from './KMMNS/dates/dates.component';
import { RegistrationComponent } from './KMMNS/registration/registration.component';
import { FeeComponent } from './KMMNS/fee/fee.component';
import { AccommodationComponent } from './KMMNS/accommodation/accommodation.component';
import { AgendaComponent } from './KMMNS/agenda/agenda.component';
import { AboutNSComponent } from './KMMNS/about-ns/about-ns.component';
import { ContactComponent } from './KMMNS/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CommitteesComponent,
    DatesComponent,
    RegistrationComponent,
    FeeComponent,
    AccommodationComponent,
    AgendaComponent,
    AboutNSComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
