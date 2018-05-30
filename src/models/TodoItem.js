import { observable } from 'mobx';

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

  constructor(attributes = {}) {
    const mergedAttributes = Object.assign(TodoItem.defaultAttributes, attributes);

    this.id = mergedAttributes.id;
    this.title = mergedAttributes.title;
    this.description = mergedAttributes.description;
    this.isCompleted = mergedAttributes.isCompleted;
  }
}
