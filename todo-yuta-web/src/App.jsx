/* eslint-disable react/jsx-pascal-case */
import './App.scss';
import Todo_list from './todo_list';

function App() {
  return (
    <div className="App">
      <header　className="App-header">
        <div>
          <p　className="page-title">今日のやることリスト</p>
        </div>
      </header>
      <main className="main-container">
        <Todo_list />
      </main>
    </div>
  );
}

export default App;
