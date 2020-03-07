import React from "react";
import  "./SrMessage.css";

class SrMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message:"hahahhahah",
            name:"用户名",
            date:"2020.10.10 14:22",
        };
    }
    render() {
        return(
            <div className="message">
                <div className="user">
                    <a href="../../pages/message"  target="_blank">
                        <div className="avatar"></div>
                        <div className="name">{ this.state.name}</div>
                    </a>
                </div>
                <div className="mes">
                    <div className="text-container">
                        <div className="text">{this.state.message}</div>
                        <div className="date">{this.state.date}</div>
                    </div>                   
                    <div className="reply">
                        <input type="text" className="r-input" ></input>
                        <button className ="r-button">回复</button>
                    </div>
                </div>
            </div>

        );
    }
}
export default SrMessage;