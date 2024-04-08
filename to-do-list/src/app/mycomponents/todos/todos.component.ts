import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';  //Todo.ts file se import kiye
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {
  localItem: string | null;

  // ye 'todos' name ka array hai 'Todo' type ka.
  todos: Todo[];
  constructor() {

    //jb bhi meri aap refresh karengi ....
    this.localItem = localStorage.getItem("todos");
    if (this.localItem == null) {
      this.todos = [];
    }
    else {
      this.todos = JSON.parse(this.localItem);

    }
  }

  deleteTodo(todo: Todo) {
    console.log(todo);

    //This line calculates the index of the todo object within the todos array. 
    //If found, the index variable will hold the index value; otherwise, it will be -1.
    const index = this.todos.indexOf(todo);   //ye stack overflow se copy kiya hu 
    this.todos.splice(index, 1);      //splice method one element remove karenga

    //After removing the todo from the todos array, ye line update karenga local storage ko with the modified array.
    //JSON.stringify function is used to convert the array to a JSON string before storing it in local storage. 
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  addTodo(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  CheckTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}
