import { observable, action } from 'mobx';

export default class TodoItem {
  @observable id;
  @observable title;
  @observable description;
  @observable isCompleted;

  static get defaultAttributes() {
    return {
      id: '',
      title: '',
      description: '',
      isCompleted: false,
    };
  }

  constructor(attributes = {}, todoItemsStore) {
    const mergedAttributes = Object.assign(TodoItem.defaultAttributes, attributes);

    this.id = mergedAttributes.id;
    this.title = mergedAttributes.title;
    this.description = mergedAttributes.description;
    this.isCompleted = mergedAttributes.isCompleted;

    this.todoItemsStore = todoItemsStore;
  }

  @action('Toggle Todo Item Completed State')
  toggleCompleted = () => {
    this.isCompleted = !this.isCompleted;
  };

  save = () => {
    this.todoItemsStore.addTodo(this);
  };

  destroy = () => {
    this.todoItemsStore.removeTodo(this);
  };
}
