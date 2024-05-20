import { Routes } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: '', redirectTo: '/weather', pathMatch: 'full' }, 
    
    {path:'about', component:AboutComponent},
    {path:'home', component:HomeComponent},
    {path:'contact', component:ContactComponent}
];
