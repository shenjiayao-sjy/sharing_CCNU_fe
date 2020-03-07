import React from "react";
import ReactDOM from "react-dom";

class SrStar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onHover = this.onHover.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
    }
    onHover(e) {
        this.props.onHover(e);
    }
    onClick(e) {
        this.props.onClick(e);
    }
    onKeyDown(e) {
        if(e.keyCode === 13) {
            this.props.onClick(e);
        }
    }
    
}
