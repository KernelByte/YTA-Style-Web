import { NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [NgFor,CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'YTA Style';
  fullname = signal("Oscar Martinez Zuluaga");
  tasks = ['jugar','Estudiar','Trabajar','Leer'];
  tasks_signal = signal(['jugar','Estudiar','Trabajar','Leer']);
  person = {
    name: "Orlando Escobar",
    age: 27,
    country: "Colombia",
    pasaport: "https://img.freepik.com/vector-gratis/avatar-personaje-empresario-aislado_24877-60111.jpg?t=st=1713899982~exp=1713900582~hmac=c294841c72cd8241c34fd930797fd939a7b34b19c140a7e8fa257fe09b24bacd"
  }

  clickHandler(){
    alert("¿Hola como estas?")
  }

  changehandler(event: Event){
    console.log(event)
  }

  changehandlerkey(event: KeyboardEvent){
    const input = event.target as HTMLInputElement;
    console.log(input.value)
  }

  changehandlerFinal(event: Event){
    const input = event.target as HTMLInputElement;
    const valueInput = input.value;
    this.fullname.set(valueInput)
  }

}
