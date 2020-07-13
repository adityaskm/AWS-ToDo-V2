import { Injectable } from '@angular/core';
import { ToDoItem } from '../model/to-do-item';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private httpService: HttpService) {}

  getItemList() {
    return this.httpService.get<ToDoItem[]>('');
  }

  addItem(item: ToDoItem) {
    return this.httpService.post<ToDoItem>('', item);
  }

  editItem(item: ToDoItem) {
    return this.httpService.post<ToDoItem>(item.id, item);
  }

  deleteItem(item: ToDoItem) {
    return this.httpService.delete<any>(item.id);
  }
}
