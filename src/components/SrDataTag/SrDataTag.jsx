import React from "react";
import  "./SrDataTag.css";

class SrDataTag extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return(
            <div className="data">
                <a className="info" href="../../pages/data/Data">
                    <div className="name"><b>中国近现代史复习资料</b></div>
                    <div className="introduce">hhhhhhh</div>
                </a>
                <div className="right"></div>
            </div>
        );
    }
}

export default SrDataTag;