import React from 'react';
import Main from './App/screens/Main';
import About from './App/screens/About';
import {Route, Switch, HashRouter} from "react-router-dom";

function App() {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route exact path="/about" component={About}/>
            </Switch>
        </HashRouter>
    );
}

export default App;
