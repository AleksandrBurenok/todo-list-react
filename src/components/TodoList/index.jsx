import React from 'react';
import { inject, observer, PropTypes as MobxPropTypes } from 'mobx-react';
import ListItem from './ListItem';

import './TodoList.scss';

const TodoList = ({ todoItems }) => (
  <ul className="TodoList">
    {todoItems.map(todoItem => (
      <ListItem
        key={todoItem.id}
        todoItem={todoItem}
      />
    ))}
  </ul>
);

TodoList.propTypes = {
  todoItems: MobxPropTypes.arrayOrObservableArray.isRequired,
};

export default inject(({ todoItemsStore: { todoItems } }) => ({
  todoItems,
}))(observer(TodoList));
