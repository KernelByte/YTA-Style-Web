import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({required:true}) duration = 0;
  @Input({required:true}) message = '';

  constructor(){
    // NO ASYNC
    //Before render
    //console.log('constructor');
    //console.log('-'.repeat(10));
  }

  /* ngOnChanges(changes: SimpleChanges){
    //Before and During render
    //console.log('ngOnChanges');
    //console.log('-'.repeat(10));
    //console.log(changes);

    const duration = changes[this.duration];

    if(duration && duration.currentValue !== duration.previousValue){
      this.doSomeTings();
    }
  }

  ngOnInit(){
    // after render 
    //Una vez
    //async, then, subs

    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('duration =>',this.duration);
    console.log('message =>',this.message);
  }

  ngAfterViewInit(){
    //After render
    //Hijos ya fueron pintados
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
  }

  ngOnDestroy(){
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));
  }

  doSomeTings(){
    console.log('Ejecutado logica de negocio');
  }*/
}
