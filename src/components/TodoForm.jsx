import React, { Fragment } from 'react';
import { inject, observer, Observer, PropTypes as MobxPropTypes } from 'mobx-react';
import { Form, Field } from './Form';

const TodoForm = ({ todoFormStore }) => (
  <Form
    onSubmit={todoFormStore.onSubmit}
    onReset={todoFormStore.resetForm}
  >
    <Field
      name="title"
      label="Todo Title:"
      onChange={todoFormStore.onChange}
      value={todoFormStore.todoItem.title}
      required
    />
    <Field
      name="description"
      textArea
      label="Todo Title:"
      onChange={todoFormStore.onChange}
      value={todoFormStore.todoItem.description}
      required
    />
  </Form>
);

TodoForm.propTypes = {
  todoFormStore: MobxPropTypes.objectOrObservableObject.isRequired,
};

export default inject('todoFormStore')(observer(TodoForm));
