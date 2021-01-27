import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom"
import Home from './components/home';
import Pokemon from './components/pokemon';
import Function1 from './components/function1';
import Function2 from './components/function2';
import Function3 from './components/function3';
import Navbar from './components/navbar';
import Lists from './components/lists';

function App() {
  return (
    <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/pokemon" component={Pokemon} />
          <Route path="/function1" component={Function1} />
          <Route path="/function2" component={Function2} />
          <Route path="/function3" component={Function3} />
        </Switch>
    </Router>
  );
}

// const Home = () => {
//   return (
//     <>
//       Home
//     </>
//   )
// };

// const Pokemon = () => {
//   return (
//     <>
//       Pokemon
//     </>
//   )
// };

// const Function1 = () => {
//   return (
//     <>
//       Function1
//     </>
//   )
// };

// const Function2 = () => {
//   return (
//     <>
//       Function2
//     </>
//   )
// };

// const Function3 = () => {
//   return (
//     <>
//       Function3
//     </>
//   )
// };

export default App;
