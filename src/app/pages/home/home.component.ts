import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  person = {
    name: "Orlando Escobar",
    age: 27,
    country: "Colombia",
    pasaport: "https://img.freepik.com/vector-gratis/avatar-personaje-empresario-aislado_24877-60111.jpg?t=st=1713899982~exp=1713900582~hmac=c294841c72cd8241c34fd930797fd939a7b34b19c140a7e8fa257fe09b24bacd"
  }

}
