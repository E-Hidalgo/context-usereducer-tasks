import './App.css';
import Heading from "./components/Heading"
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  return (
    <div>
      <Heading />
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
