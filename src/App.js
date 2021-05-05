import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './css/App.css';
import Home from './Home'
import AddPost from './AddPost'
import About from './About'
import Navbar from "./Navbar"
import ViewPost from './ViewPost'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/addPost">
            <AddPost/>
          </Route>
          <Route path="/posts/:id">
            <ViewPost/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
