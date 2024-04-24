import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HtmlParser } from '@angular/compiler';
import { Task } from './../../models/task.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tasks_signal = signal<Task[]>([
    {
      id: Date.now(),
      title: 'Jugar Xbox',
      completed: false
    },
    {
      id: Date.now(),
      title: 'Estudiar Angular',
      completed: false
    }
  ]);

  changeHandler(event: Event){
    const input = event.target as HTMLInputElement;
    const newTask = input.value;
    this.addTask(newTask);
  }

  addTask(title: string){
    const addNewTask = 
    {
      id: Date.now(),
      title: title,
      completed: false
    }
    this.tasks_signal.update((tasks_signal)=>[...tasks_signal,addNewTask]);
  }

  deleteTask(index: number){
    this.tasks_signal.update((tasks_signal)=> tasks_signal.filter((task,position)=> position !== index));
  }

}
