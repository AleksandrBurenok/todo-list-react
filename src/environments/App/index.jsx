import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import 'assets/styles/global.scss';

import './App.scss';

import TodoFormStore from '../../stores/TodoFormStore';
import TodoItemsStore from '../../stores/TodoItemsStore';

import TodoForm from '../../components/TodoForm';
import TodoList from '../../components/TodoList';

const todoItemsStore = new TodoItemsStore();
const todoFormStore = new TodoFormStore();

todoItemsStore.addTodo({
  title: 'Test',
  description: 'Test Todo Description',
}).addTodo({
  title: 'Completed',
  description: 'Completed Todo Description',
  isCompleted: true,
});
const App = () => (
  <Provider todoItemsStore={todoItemsStore} todoFormStore={todoFormStore}>
    <main className="App">
      <section className="App-form">
        <h2>Form</h2>
        <TodoForm />
      </section>
      <section className="App-content">
        <h2>Content</h2>
        <TodoList />
      </section>
    </main>
  </Provider>
);

ReactDOM.render(<App />, global.document.querySelector('#app'));
