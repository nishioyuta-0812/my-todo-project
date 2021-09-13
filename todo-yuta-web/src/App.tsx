/* eslint-disable react/jsx-pascal-case */
import './App.scss';
import Task from './components/pages/task';

function App() {
  return (
    <div className="App">
        <header　className="App-header">
          <div>
            <h1　className="page-title">TODO APP</h1>
          </div>
        </header>
        <main className="main-container">
          <Task></Task>
        </main>
    </div>
  );
}

export default App;
