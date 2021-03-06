import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Project from './components/Project';
import SinglePost from './components/SinglePost';
import Post from './components/Post';
import Nav from './components/Nav';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route component={Home} exact path='/'></Route>
        <Route component={About} path='/about'></Route>
        <Route component={SinglePost} path='/post/:slug'></Route>
        <Route component={Post} path='/post'></Route>
        <Route component={Project} path='/project'></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
