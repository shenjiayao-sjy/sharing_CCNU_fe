import React from "react";
import ReactDOM from "react-dom";
import SrDataCard from "./components/SrDataCard/SrDataCard"
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import HomePage from "./pages/homepage/HomePage"
import Search from "./pages/search/search"
import Upload from "./pages/upload/index"
import Login from "./pages/login/index"
import SignUp from "./pages/signUp/index"
import Sort from "./pages/sort/index"
import Course from "./pages/course/Course"
import Personal from "./pages/personal/index"
import Material from "./pages/material/index"

ReactDOM.render(
    <Router>
        <Switch>
        <Redirect exact from="/" to="/homepage" />
        <Route path="/homepage" component={HomePage} />
        <Route path="/sort" component={Sort} />
        <Route path="/search" component={Search} />
        <Route path="/upload" component={Upload} />
        <Route path="/login" component={Login} />
        <Route path="/signUp" component={SignUp} />
        <Route path="/course/:id" component={Course} />
        <Route path="/personal" component={Personal} />
        <Route path="/material/:id" component={Material} />
        </Switch>
    </Router>
        , document.getElementById("root"));
