import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";

import { Home } from "./pages";
import { Header } from "./components";

export default class App extends Component {  
	render() {
		return (
            <Container>
                <Router>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/:subreddit" component={Home} />
                    </Switch>
                </Router>
            </Container>
		);
	}
}