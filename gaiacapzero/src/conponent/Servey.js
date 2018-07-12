import React, { Component } from 'react';
import "./Servey.scss";

class Servey extends Component {

    constructor(props) {
        super(props);

    }
    componentDidMount() {

    }

    render() {

        return (
            <div className="w_servey_all">
                <div className="w_servey_title_all">
                    <p className="w_servey_title">I am Servey 1</p>
                    <p className="w_servey_value">I am Servey 1</p>
                </div>
            </div>
        );
    }


}

export default Servey;