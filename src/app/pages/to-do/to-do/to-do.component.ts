import { Component, OnInit } from '@angular/core';
import { ToDoItem } from '../../../shared/model/to-do-item';
import { AuthService } from '../../../shared/services/auth.service';
import { DataService } from '../../../shared/services/data.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss'],
})
export class ToDoComponent implements OnInit {
  todoList: ToDoItem[] = [new ToDoItem()];

  constructor(
    private authService: AuthService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {}

  addToDo() {
    this.todoList.push(new ToDoItem());
  }

  removeToDo(todoIndex: number) {
    if (this.todoList.length >= todoIndex) {
      const todo = this.todoList[todoIndex];
      this.dataService
        .deleteItem(todo)
        .subscribe(() => this.todoList.splice(todoIndex, 1));
    }
    if (!this.todoList.length) {
      this.addToDo();
    }
  }

  logout() {
    this.authService.logout();
  }
}
