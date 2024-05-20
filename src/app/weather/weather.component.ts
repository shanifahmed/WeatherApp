import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule,FormsModule,MatProgressSpinnerModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent {
  city: string = ''; 
  weatherData: any;
  loading: boolean = false;
  temperatureMessage: string = '';
  messageClass: string = '';

  constructor(private weatherService: WeatherService) { }
  

  ngOnInit(): void {
    this.getWeather();
  }

  
  getWeather() {
    this.loading = true; 
    this.weatherService.getWeather(this.city).subscribe(
      (data) => {
        this.weatherData = data;
        this.setTemperatureMessage(data.main.temp);
      },
      (error) => {
        console.error('Error fetching weather data:', error);
      },
      () => {
        this.loading = false; 
      }
    );
  }

  onCityChange(newCity: string): void {
    this.city = newCity;
    this.getWeather();
    this.weatherData = null;
    this.temperatureMessage = '';
    this.messageClass = '';
  }
  setTemperatureMessage(temp: number) {
    if (temp > 35) {
      this.temperatureMessage = 'High temperature!';
      this.messageClass = 'high-temp';
    } 
    else if (temp >= 20) {
      this.temperatureMessage = 'Medium temperature';
      this.messageClass = 'medium-temp';
    } 
    else {
      this.temperatureMessage = 'Low temperature';
      this.messageClass = 'low-temp';
    }
  }
  

}
