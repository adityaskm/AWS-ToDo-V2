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
import { DataService } from 'src/app/shared/services/data.service';

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

  constructor(private dataService: DataService) {}

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
    const toDoItemTempTitle = this.toDoItemTempTitle.trim();
    const toDoItemTempSubTitle = this.toDoItemTempSubTitle.trim();
    if (toDoItemTempTitle || toDoItemTempSubTitle) {
      if (toDoItemTempTitle) {
        //  Save the Todo
        this.toDoItem.title = toDoItemTempTitle;
      } else {
        setTimeout(() => {
          this.toDoItemTempTitle = this.toDoItem.title;
        }, 200);
      }
      if (toDoItemTempSubTitle) {
        this.toDoItem.subtitle = toDoItemTempSubTitle;
      } else {
        setTimeout(() => {
          this.toDoItemTempSubTitle = this.toDoItem.subtitle;
        }, 200);
      }
      this.dataService.editItem(this.toDoItem);
    } else {
      setTimeout(() => {
        this.toDoItemTempTitle = this.toDoItem.title;
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
