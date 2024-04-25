import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HtmlParser } from '@angular/compiler';
import { Task } from './../../models/task.model';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
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

  newTaskCtrl = new FormControl('',{
      nonNullable: true,
      validators: [
        Validators.required,
      ]
  });

  changeHandler(){
    if(this.newTaskCtrl.valid){
      const value = this.newTaskCtrl.value;
      this.addTask(value);
      this.newTaskCtrl.setValue('');
    }
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

  updateTask(index: number){
    this.tasks_signal.update((tasks_signal) => {
      return tasks_signal.map((tasks_signal,position) => {
        if (position === index){
          return {
            ...tasks_signal,
            completed: !tasks_signal.completed
          }
        }
        return tasks_signal;
      })
    })
  }

}
