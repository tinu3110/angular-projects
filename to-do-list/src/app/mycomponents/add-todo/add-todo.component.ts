import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent {
title:string | undefined;
desc:string | undefined;

// todoAdd name ka Event Emit kiya & uske sath Todo ko send kiya
//ye Emitter todos.component.ts se emit karenga 
@Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

//this method is for add todo
onSubmit(){
  const todo={
    // sno:1,
    title:this.title,
    desc: this.desc,
    active:true
   }
   this.todoAdd.emit(todo);
  }
}