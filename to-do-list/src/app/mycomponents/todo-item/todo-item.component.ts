import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  
  //this is Input decorator of type todo for accept todo
  @Input()
  todo!: Todo;

  @Input() i: number | undefined;

  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();


  //yaha pr bhi event emit kiya hu
  // ye todos.comp.ts se emit honga 
  onClick(todo: Todo) {
    this.todoDelete.emit(todo); //yaha todo delete ko emit karenge
  }
  oncheckboxClick(todo: any) {
    this.todoCheckbox.emit(todo);
  }
}
