import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FooterComponent } from './footer/footer.component';
import { CatalogComponent } from './catalog/catalog.component';
import { RegisterComponent } from './register/register.component';
import { PaymentComponent } from './payment/payment.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component : HomeComponent},
  {path: 'login', component : LoginComponent},
  {path: 'aboutus', component : AboutusComponent},
  {path: 'catalog', component : CatalogComponent},
  {path: 'register', component : RegisterComponent},
  {path: 'payment', component : PaymentComponent},
  {path: 'footer', component : FooterComponent},


];
