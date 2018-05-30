import React from 'react';
import { Form, Field } from './Form';

const TodoForm = () => (
  <Form>
    <Field
      name="title"
      label="Todo Title:"
    />
    <Field
      name="description"
      textArea
      label="Todo Title:"
    />
  </Form>
);

export default TodoForm;
