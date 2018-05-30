import { observable, action } from 'mobx';
import TodoItem from '../models/TodoItem';

export default class TodoFormStore {
  @observable todoItem;

  constructor(todoItemsStore) {
    this.todoItemsStore = todoItemsStore;
    this.resetForm();
  }

  @action('Reset Todo Form State')
  resetForm = () => {
    this.todoItem = new TodoItem({}, this.todoItemsStore);
  };

  @action('Set Editable Todo Item')
  setEditableTodo = (todoItem) => {
    this.todoItem = todoItem;
  };

  @action('Update Todo Item')
  onChange = ({ target }) => {
    this.todoItem[target.name] = target.value;
  };

  onSubmit = (event) => {
    event.preventDefault();
    if (!this.todoItem.id) {
      this.todoItem.save();
    }
    this.resetForm();
  };
}
