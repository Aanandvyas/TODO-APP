import { useState } from 'react';
import { Todos } from './components/Todos';
import { CreateTodo } from './components/CreateToDo';

// useEffect hook
function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </div>
  )
}

export default App
