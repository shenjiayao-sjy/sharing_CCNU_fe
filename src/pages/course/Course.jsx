import React from "react";
import  "./Course.css";

class Course extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { match } = this.props;
        const id = parseInt(match.params.id, 10)
        return(
            <div>
                现在文档的为： {id}
            </div>
        );
    }
}
export default Course;