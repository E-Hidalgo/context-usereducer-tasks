import { Route, Switch } from "react-router-dom"

import './App.css';
import Heading from "./components/Heading"
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  return (
    <div>
      <div>
        <div>
          <Heading />

          <Switch>
            <Route path="/" component={TaskList} exact />
            <Route path="/add" component={TaskForm} />
          </Switch>
        </div>
      </div>

    </div>
  );
}

export default App;
