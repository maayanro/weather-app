import React from 'react';
import { Provider } from 'react-redux'
import './App.css';
import { Weather } from './components/Weather';
import { store } from './store/store'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to weather App</h1>
        <Weather />
      </header>
    </div>
    </Provider>
  );
}

export default App;
