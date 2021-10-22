import { Route, Switch } from "react-router-dom"

import './App.css';
import GifList from "./components/GifList";
import Heading from "./components/Heading"
import Login from "./components/Login";
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

import { ContextProvider } from "./context/GlobalContext"

function App() {
  return (
    <div>
      <div>
        <div>
          <ContextProvider>
            {/* <Heading className="header" /> */}
            <Switch>
              <Route path="/tasks" render={(props) => <div> <Heading className="header" /><TaskList {...props} /> </div>} />
              <Route path="/add" render={(props) => <div> <Heading className="header" /><TaskForm {...props} /> </div>} />
              <Route path="/edit/:id" render={(props) => <div> <Heading className="header" /><TaskForm {...props} /> </div>} />
              <Route path="/login" component={Login} exact></Route>
              <Route path="/" render={(props) => <div> <Heading className="header" /><GifList {...props} /> </div>} exact></Route>
            </Switch>


          </ContextProvider>

        </div>
      </div>

    </div>
  );
}

export default App;
