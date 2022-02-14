import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos!: Todo[];
  inputTodo: string = '';
  constructor() {}

  ngOnInit(): void {
    this.todos = [
      { content: 'first todo', completed: false },
      { content: 'second todo', completed: true },
    ];
  }
  toggleDone(id: number) {
    this.todos.map((val, i) => {
      if (i == id) {
        val.completed = !val.completed;
      }
      return val;
    });
  }
  deleteTodo(id: number) {
    this.todos = this.todos.filter((val, i) => i !== id);
  }
  addTodo() {
    this.todos.push({
      content: this.inputTodo,
      completed: false,
    });
    this.inputTodo = '';
  }
}
