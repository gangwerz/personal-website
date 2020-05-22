//1st-Party React
import React from "react";
import ReactDOM from "react-dom";

//3rd-Party React
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import Greeter from "./tlc/greeter";
import Welcome from "./tlc/home/home";

function Routes() {
    return (
        <Router>
            <Greeter />
            <div id="body" className="page">
                <div id="content-area">
                    <Switch>
                        <Route path="/">
                            <Welcome />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

ReactDOM.render(<Routes />, document.getElementById("root"));
