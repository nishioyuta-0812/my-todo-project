/* eslint-disable react/jsx-pascal-case */
import './App.scss';
import Task from './components/pages/task';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Clock from './components/clock';
import  Weather  from './components/weather';

function App() {
  return (
    <div className="App">
        <ToastContainer  />
        <header　className="App-header">
          <div >
            <h1　className="page-title">TODO APP</h1>
          </div>
          <Weather></Weather>
        </header>
        <main className="main-container">
          <Clock></Clock>
          <Task></Task>
        </main>
    </div>
  );
}

export default App;
