import React, { Component } from 'react';
import { BrowserRouter} from 'react-router-dom';
import './Mask.scss';
import $ from 'jquery';

class Mask extends Component {

    constructor(props) {
        super(props);
        this.w_disappear = this.w_disappear.bind(this);
    }
    componentDidMount() {
        
    }

    render() {
        const { color } = this.props;
        return (

            <BrowserRouter>

                <div className="w_big_mask" onClick={this.w_disappear}>
                    <div className="w_mask" style={{ backgroundColor: color }}></div>
                   
                </div>
            </BrowserRouter>
        );
    }

    w_disappear() {
        
        // $('.w_big_mask').fadeOut(300);
        // console.log($(this));
        // console.log("yo?");
        const { url } = this.props;
        var j = url;
        
        (function (j) {
            setTimeout(function () {

                console.log(j);
                window.location = "./"+j;
            }, 300);

        })(j);
        
    }
}

export default Mask;