import React from "react";
import  "./HomePage.css";
import { Link } from "react-router-dom";
import { render } from "@testing-library/react";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    getMaterialPath(materialId){
        return `./material/${materialId}`
    }
    render() {
       return (
        //<header></>
        <div className="wrapper">
            <Link to={'./search'}>
                <div>点我去搜索</div>
            </Link>
            <Link to={'./upload'}>
                <div>点我去上传</div>
            </Link>
            <Link to={'./login'}>
                <div>点我去登陆</div>
            </Link>
            <Link to={'./signUp'}>
                <div>点我去注册</div>
            </Link>
            <Link to={'./sort'}>
                <div>点我去分类</div>
            </Link>
            <Link to={this.getMaterialPath(15)}>
                <div>点我去资料页面</div>
            </Link>
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

export default HomePage;