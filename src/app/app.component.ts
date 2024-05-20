import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { MatSortModule} from '@angular/material/sort';
import { MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import {  MatPaginatorModule } from '@angular/material/paginator';

import { WeatherComponent } from './weather/weather.component';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";

export interface dataElement{
  completed:boolean;
  id:number;
  title:string;
  
}


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, MatTableModule, MatSortModule, HttpClientModule, MatPaginatorModule, WeatherComponent, HeaderComponent, FooterComponent]
})
export class AppComponent {
  title = 'my-app';
 

  
  constructor() {}
  ngOnInit(): void {
    
    
   
  }
}
