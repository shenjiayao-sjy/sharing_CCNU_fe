import React from "react";
import  "./SrUser.css";

class SrUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"用户名"
        };
        this.handleEnterkey=this.handleEnterkey.bind(this);
        this.updateName=this.updateName.bind(this);
    }
    updateName(e){
        this.setState({name:e.target.value})
    }
	handleEnterkey(e){}

    render() {
        return(
            <div className="wrapper">
                <div className="u-container">
                    <div className = "avatar"></div>
                    <div className="u-info">
                        <input id="name"
                         type="text" defaultValue={this.state.name}
                        onKeyPress={this.handleEnterkey}
                        onChange={this.updateName}/>
                        <input id="sign"
                         type="text"  maxLength="60"
                         defaultValue="一个签名"
                        onChange={this.updateName}/>
                    </div>
                    <div className="u-right">
                        <a href="../../pages/upload">
                            <input className="u-button" type="button" value="上传资料"/>
                        </a>
                        <div className="statistic">
                        <a href="../../pages/follow/Follow" target="_blank" className="data">
                            <p class="n-data-k">关注数</p>
                            <p id="n-gz" class="n-data-v space-attention">194</p>
                        </a>
                        <a href="../../pages/follow/Follow" target="_blank"  className="data">
                            <p class="n-data-k">粉丝数</p>
                            <p id="n-gz" class="n-data-v space-attention">3</p>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default SrUser;