/* eslint-disable react/jsx-pascal-case */
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Todo_items from './components/todo_items';
import CreateTask from './components/create_task';

function App() {
  return (
    <div className="App">
      <Router>
        <header　className="App-header">
          <div>
            <p　className="page-title">TODO APP</p>
          </div>
        </header>
        <main className="main-container">
          <Route exact path='/'><Todo_items/></Route>
          <Route exact path='/create-task'><CreateTask/></Route>
        </main>
      </Router>
    </div>
  );
}

export default App;
