import { observable, action } from 'mobx';
import TodoItem from '../models/TodoItem';

export default class TodoFormStore {
  @observable todoItem;

  constructor() {
    this.resetForm();
  }

  @action('Reset Todo Form State')
  resetForm = () => {
    this.todoItem = new TodoItem();
  };

  @action('Set Editable Todo Item')
  setEditableTodo = (todoItem) => {
    this.todoItem = todoItem;
  };
}