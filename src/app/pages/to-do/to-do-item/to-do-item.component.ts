import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { ToDoItem, ToDoItemStatus } from '../../../shared/model/to-do-item';
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: '[app-to-do-item]',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.scss'],
})
export class ToDoItemComponent implements OnInit {
  @ViewChild('toDoTitleInput') toDoTitleInput: ElementRef<HTMLInputElement>;
  @ViewChild('toDoSubTitleInput') toDoSubTitleInput: ElementRef<
    HTMLInputElement
  >;

  @Input() toDoItem: ToDoItem;
  @Output() toDoItemDelete = new EventEmitter();

  toDoItemTempTitle = '';
  toDoItemTempSubTitle = '';

  constructor() {}

  ngOnInit(): void {}

  editToDo() {
    this.toDoItemTempTitle = this.toDoItem.title;
    this.toDoItemTempSubTitle = this.toDoItem.subtitle;
    this.toDoItem.editing = true;
  }

  editToDoComponent(input: HTMLInputElement) {
    // To be able to integrate the click outside functionality as well
    setTimeout(() => {
      input.classList.add('to-do-item-title-editing');
      this.editToDo();
    }, 1);
  }

  saveToDo() {
    this.removeFocusFromInputs();
    this.toDoItem.editing = false;
    if (this.toDoItemTempTitle.trim()) {
      //  Save the Todo
      this.toDoItem.title = this.toDoItemTempTitle;
    } else {
      setTimeout(() => {
        this.toDoItemTempTitle = this.toDoItem.title;
      }, 200);
    }
    if (this.toDoItemTempSubTitle.trim()) {
      this.toDoItem.subtitle = this.toDoItemTempSubTitle;
    } else {
      setTimeout(() => {
        this.toDoItemTempSubTitle = this.toDoItem.subtitle;
      }, 200);
    }
  }

  removeFocusFromInputs() {
    [this.toDoTitleInput, this.toDoSubTitleInput].forEach((inputRef) =>
      inputRef.nativeElement.classList.remove('to-do-item-title-editing')
    );
  }

  deleteToDo() {
    this.toDoItemDelete.emit();
  }

  setToDoItemComplete(event: MatRadioChange) {
    console.log(event);
    this.toDoItem.status = event.value
      ? ToDoItemStatus.completed
      : ToDoItemStatus.open;
  }
}
