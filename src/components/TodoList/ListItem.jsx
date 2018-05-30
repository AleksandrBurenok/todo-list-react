/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import classNames from 'classnames';
import { observer, PropTypes as MobxPropTypes } from 'mobx-react';
import Button from '../Button';

const TodoListItem = ({ todoItem }) => {
  const itemClassName = classNames('TodoList-item', {
    'TodoList-item--completed': todoItem.isCompleted,
  });

  const handleDelete = () => {
    if (global.confirm('Are you sure?')) {
      todoItem.destroy();
    }
  };
  
  return (
    <li className={itemClassName}>
      <div className="TodoList-itemContent">
        <div className="TodoList-itemTitle">{todoItem.title}</div>
        <div className="TodoList-itemDescription">{todoItem.description}</div>
      </div>
      <div className="TodoList-itemActions">
        <div className="TodoList-itemAction">
          <label className="TodoList-itemCbx">
            <span>Complete:</span>
            <input
              type="checkbox"
              checked={todoItem.isCompleted}
              onChange={todoItem.toggleCompleted}
            />
          </label>
        </div>
        <div className="TodoList-itemAction">
          <Button disabled={todoItem.isCompleted}>Edit</Button>
        </div>
        <div className="TodoList-itemAction">
          <Button
            accentColor="danger"
            disabled={todoItem.isCompleted}
            onClick={handleDelete}
          >Delete
          </Button>
        </div>
      </div>
    </li>
  );
};

TodoListItem.propTypes = {
  todoItem: MobxPropTypes.objectOrObservableObject.isRequired,
};

export default observer(TodoListItem);
