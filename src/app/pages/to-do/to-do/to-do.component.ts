import { Component, OnInit } from '@angular/core';
import { ToDoItem } from '../../../shared/model/to-do-item';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss'],
})
export class ToDoComponent implements OnInit {
  todoList: ToDoItem[] = [new ToDoItem()];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  addToDo() {
    this.todoList.push(new ToDoItem());
  }

  removeToDo(todoIndex: number) {
    if (this.todoList.length >= todoIndex) {
      this.todoList.splice(todoIndex, 1);
    }
    if (!this.todoList.length) {
      this.addToDo();
    }
  }

  logout() {
    this.authService.logout();
  }
}
