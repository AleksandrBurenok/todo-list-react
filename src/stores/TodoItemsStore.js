import { observable, action } from 'mobx';
import UUID from 'uuid/v4';
import TodoItem from '../models/TodoItem';

export default class TodoItemsStore {
  @observable todoItems = [];

  @action('Add Todo Item')
  addTodo = (payload) => {
    const todoItem = (payload instanceof TodoItem) ?payload : new TodoItem(payload, this);
    todoItem.id = UUID();
    this.todoItems.push(todoItem);
    return this;
  };

  @action('Remove Todo Item')
  removeTodo = (todoItem) => {
    this.todoItems = this.todoItems.filter(anItem => anItem.id !== todoItem.id);
    return this;
  };
}
