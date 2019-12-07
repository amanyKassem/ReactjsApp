import React , {Component} from 'react';
import './App.css';
import Greet from './components/Greet'
import Message from './components/Message'
import Form from './components/Form'
import Nav from './components/Nav'
import LifecycleA from './components/LifecycleA'
import Table from './components/Table'
import ParentComp from './components/ParentComp'
import RefsDemo from './components/RefsDemo'
import FocusInput from './components/FocusInput'
import FRParentInput from './components/FRParentInput'
import PortalDemo from './components/PortalDemo'
import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
 render() {
  return (
      // wrap all components with <Router> that i want the routing functionality to be available in
    <Router>
        <div className="App">
            {/*<Greet name ='amany'/>*/}
            <Nav />
            {/*<Switch> it kinda stop the whole process of going through all of this routes
            as soon as it goes to one and it matches the URL it's gonna stop and it's gonna only render that component*/}
            <Switch>
                {/*<Route> it renders out component based on the url*/}
                <Route path='/' exact component={Home}/>
                <Route path='/greet' component={(props) => <Greet {...props} name='amany' />}/>
                <Route path='/form' component={Form}/>
            </Switch>

            {/*<LifecycleA/>*/}
            {/*<Table/>*/}
            {/*<ParentComp/>*/}
            {/*<RefsDemo/>*/}
            {/*<FocusInput/>*/}
            {/*<FRParentInput/>*/}
            {/*<PortalDemo/>*/}
            <ClickCounter name={'amany'}/>
            <HoverCounter name={'amany'}/>

        </div>
    </Router>
  );
 }
}

const Home = () => {
    return(
        <div>
            <h1>Home page</h1>
        </div>
    )
}

export default App;
