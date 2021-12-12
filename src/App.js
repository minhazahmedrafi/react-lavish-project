import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer';
import Home from './components/pages/Home';
import Services from './components/pages/Services'
import Products from './components/pages/Products'
import SignUp from './components/pages/SignUp'


function App() {
  return (
      <Router>
       <Navbar></Navbar>
       <Switch>
         <Route path="/" exact component={Home}></Route>
         <Route path="/services" component={Services}></Route>
         <Route path="/products" component={Products}></Route>
         <Route path="/sign-up" component={SignUp}></Route>
       </Switch>
       <Footer></Footer>
      </Router>
  );
}

export default App;
