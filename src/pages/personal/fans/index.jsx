import React from "react";
import  "./index.css";
import { render } from "@testing-library/react";

class Fans extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            //<header></>
            <div className="wrapper">
                <div className ="banner"></div>
                <div className="rec-module">
                    <div className="module-title">热门推荐</div>
                    <div className="card-container"></div>
                </div>
                <div className="rec-module">
                    <div className="module-title">最新发布</div>
                    <div className="card-container"></div>
                </div>
            </div>
        );
    }
}

export default Fans;