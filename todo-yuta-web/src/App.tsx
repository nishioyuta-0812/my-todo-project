/* eslint-disable react/jsx-pascal-case */
import './App.scss';
import Task from './components/pages/task';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
        <ToastContainer  />
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
