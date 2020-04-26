//1st-Party React
import React from 'react';
import ReactDOM from 'react-dom';

//3rd-Party React
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Components
import Header from './tlc/header/header';
import Welcome from './tlc/home/home';
import About from './tlc/about/about';
import Toolbox from './tlc/toolbox/toolbox';

import LongPage from './tlc/long_page/long_page';


function Routes() {
    return (
        <Router>
            <Header />

            <div id='background'>
                <div id='content-area'>
                    <Switch>
                        <Route path='/long'>
                            <LongPage />
                        </Route>
                        <Route path='/toolbox'>
                            <Toolbox />
                        </Route>
                        <Route path='/about'>
                            <About />
                        </Route>
                        <Route path='/'>
                            <Welcome />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    )
}


ReactDOM.render(<Routes />, document.getElementById("root"));