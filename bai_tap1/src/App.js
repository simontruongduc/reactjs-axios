import './App.css';
import Menu from "./Components/Menu/Menu";
import routes from "./Routes";
import {Switch, Route, BrowserRouter as Router} from "react-router-dom"
import React, {Component} from "react";

class App extends Component {
    showContent = (routes) => {
        let result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (<Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                />);
            });
        }
        return <Switch>{result}</Switch>;
    }

    render() {
        return (<Router>
            <div className="App">
                <Menu/>
                <div className="container">
                    <div className="row">
                        {this.showContent(routes)}
                    </div>
                </div>
            </div>
        </Router>)
    }
}

export default App;
