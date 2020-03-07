import React from "react";
import ReactDOM from "react-dom";
import "./SrClsaaTag.css"

class SrClassTag extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            department: "xxx学院",
            subject:"管理学",
        };
    }
    render(){
        return(
            <div  className="class-tag-wrapper">
                <a href="../../pages/course/Course">
                <div className="class-tag"><span></span></div>
                <span className="subject"><b>{this.state.subject}</b></span>
                <span className="department">{this.state.department}</span>
                </a>
            </div>
        );
    }
}

export default SrClassTag;