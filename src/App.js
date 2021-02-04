import React, {useState} from 'react'
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInput] = useState('');
  const [todos, setTodos]= useState([])
  return (
    <div className="App">
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInput={setInput}/>
      <TodoList/>
    </div>
  );
}

export default App;
