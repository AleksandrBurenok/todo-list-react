import React from 'react';
import ReactDOM from 'react-dom';
import 'assets/styles/global.scss';

import './App.scss';

const App = () => (
  <main className="App">
    <section className="App-form">
      <h2>Form</h2>
    </section>
    <section className="App-content">
      <h2>Content</h2>
    </section>
  </main>
);

ReactDOM.render(<App />, global.document.querySelector('#app'));
