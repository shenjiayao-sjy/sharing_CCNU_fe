import React from "react";
import PropTypes from "prop-types";
import "./SrBack.css";
import word from "../SrDataCard/word.png"

const goBack = (href, history) => {
    // }   //网上查一下如何返回
};

class SrBack extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return(
            <div>
                点我返回
            </div>
        );
    }
}


export default SrBack;
