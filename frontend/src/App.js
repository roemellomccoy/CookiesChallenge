import './App.css';
import Header from './Header/Header';
import TodoContainer from './Todos/TodoContainer';

function App() {
  return (
    <div className="App">
      <Header/>
      <TodoContainer></TodoContainer>
      <footer>
      </footer>
    </div>
  );
}

export default App;
