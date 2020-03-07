import React from "react";
import PropTypes from "prop-types";
import  "./index.css";
import { render } from "@testing-library/react";
import Index from "./index/index"
import Attention from "./attention/index"
import Fans from "./fans/index"
import Message from "./message/index"
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";

const Personal  = props => {
    const { match } = props;

    return (
        <div className="router-warpper">
            <Route exact path={match.url} component={Index} />
            <Route path={`${match.url}/:id/attention`} component={Attention} />
            <Route path={`${match.url}/:id/fans`} component={Fans} />
            <Route path={`${match.url}/:id/message`} component={Message} />
        </div>
    );
};

Personal.propTypes = {
    match: PropTypes.shape({
        url: PropTypes.string
    })
};

Personal.defaultProps = {
    match: {}
};

export default Personal;