import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule, NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';


const routes:Routes = [
{path: 'home', component: HomeComponent},
{path: 'committees', component: CommitteesComponent},
{path: 'dates', component: DatesComponent},
{path: 'registration', component: RegistrationComponent},
{path: 'fee', component: FeeComponent},
{path: 'accomodation', component: AccommodationComponent},
{path: 'agenda', component: AgendaComponent},
{path: 'novisad', component: AboutNSComponent},
{path: 'contact', component: ContactComponent},
{path: '', redirectTo: 'home', pathMatch:'full'},
]


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
    RouterModule.forRoot(routes),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
