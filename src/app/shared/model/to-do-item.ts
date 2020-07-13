export class ToDoItem {
  id = 0;
  title = '';
  subtitle = '';
  status: ToDoItemStatus = ToDoItemStatus.open;
  priority: ToDoItemPriority = ToDoItemPriority.medium;
  editing = true;
}

export enum ToDoItemStatus {
  open = 0,
  inProgress = 1,
  completed = 2,
}

export enum ToDoItemPriority {
  low,
  medium,
  high,
}
