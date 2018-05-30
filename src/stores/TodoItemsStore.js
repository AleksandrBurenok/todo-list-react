import { observable, action, reaction, toJS } from 'mobx';
import UUID from 'uuid/v4';
import TodoItem from '../models/TodoItem';

export default class TodoItemsStore {
  static defaultStorageName = 'todo-items';
  @observable todoItems = [];

  constructor(storageName = TodoItemsStore.defaultStorageName) {
    this.storageName = storageName;
    this.load().setupReactions();
  }

  @action('Add Todo Item')
  addTodo = (payload) => {
    const todoItem = (payload instanceof TodoItem) ? payload : new TodoItem(payload, this);
    todoItem.id = UUID();
    this.todoItems.push(todoItem);
    return this;
  };

  @action('Remove Todo Item')
  removeTodo = (todoItem) => {
    this.todoItems = this.todoItems.filter(anItem => anItem.id !== todoItem.id);
    return this;
  };

  setupReactions = () => {
    reaction(() => toJS(this.todoItems), this.save);
  };

  save = () => {
    const plainItems = toJS(this.todoItems).map(item => item.toPlainObj());
    global.localStorage.setItem(this.storageName, JSON.stringify(plainItems));
  };

  load = () => {
    let loadedItems;

    try {
      loadedItems = JSON.parse(global.localStorage.getItem(this.storageName)) || [];
    } catch (ex) {
      loadedItems = [];
    }

    this.todoItems = loadedItems.map(atts => new TodoItem(atts, this));
    return this;
  };
}
