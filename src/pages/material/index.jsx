import React from "react";
import  "./index.css";
import { render } from "@testing-library/react";
import SrBack from "../../components/SrBack/SrBack"

class Material extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { match } = this.props;
        const id = parseInt(match.params.id, 10)
        return (
            //<header></>
            <div className="wrapper">
                <div>
                    现在的资料id为：{id}
                </div>
                <SrBack/>
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

export default Material;