import { Route, Switch } from "react-router-dom"

import './App.css';
import GifList from "./components/GifList";
import Heading from "./components/Heading"
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

import { ContextProvider } from "./context/GlobalContext"

function App() {
  return (
    <div>
      <div>
        <div>
          <ContextProvider>
            <Heading className="header" />
            <Switch>
              <Route path="/tasks" component={TaskList} />
              <Route path="/add" component={TaskForm} />
              <Route path="/edit/:id" component={TaskForm} />
              <Route path="/" component={GifList} exact></Route>
            </Switch>


          </ContextProvider>

        </div>
      </div>

    </div>
  );
}

export default App;
