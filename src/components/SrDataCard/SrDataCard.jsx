import React from "react";
import  "./SrDataCard.css";
import word from './word.png'

class SrDataCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return(
            <div className="data">
                <a href="../../pages/data/Data">
                <img className="d-picture" src={word} alt=""/>
                </a>
                <a className="info" href="../../pages/data/Data">
                    <div className="name"><b>中国近现代史复习资料</b></div>
                    <div className="introduce">hhhhhhh</div>
                </a>
                <div className="right"></div>
            </div>
        );
    }
}

export default SrDataCard;