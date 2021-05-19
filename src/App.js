import "./App.css";
import Login from "./components/Login/Login";
import {BrowserRouter, Switch, Route} from 'react-router-dom'


function App() {
  return (
    <>
    <BrowserRouter>
    <Switch>
      <Route exact path='/login'>
          <Login/>
      </Route>
    </Switch>
    </BrowserRouter>
  
    </>
  );
}

export default App;
