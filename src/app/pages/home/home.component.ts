import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HtmlParser } from '@angular/compiler';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tasks_signal = signal(['jugar','Estudiar','Trabajar','Leer']);

  changeHandler(event: Event){
    const input = event.target as HTMLInputElement;
    const newTask = input.value;
    this.tasks_signal.update((tasks_signal)=>[...tasks_signal,newTask]);
  }

}
