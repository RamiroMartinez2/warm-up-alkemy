import "./App.css";
import Login from "./components/Login/Login";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { Home } from "./components/Home/Home";


function App() {
  return (
    <>
    <BrowserRouter>
    <Switch>
      <Route exact path='/login'>
          <Login/>
      </Route>
      <Route exact path='/'>
          <Home/>
      </Route>
    </Switch>
    </BrowserRouter>
  
    </>
  );
}

export default App;
