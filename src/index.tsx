//1st-Party React
import React from "react";
import ReactDOM from "react-dom";

//3rd-Party React
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import Header from "./tlc/header/header";
import Welcome from "./tlc/home/home";

function Routes() {
    return (
        <Router>
            <Header />

            <div id="background">
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
