/* eslint-disable react/jsx-pascal-case */
import './App.scss';
import Todo_items from './todo_items';

function App() {
  return (
    <div className="App">
      <header　className="App-header">
        <div>
          <p　className="page-title">TODO APP</p>
        </div>
      </header>
      <main className="main-container">
        <Todo_items />
      </main>
    </div>
  );
}

export default App;
