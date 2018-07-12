import React, { Component } from 'react';
import './Cart_Test.scss';


class Cart_Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    componentDidMount() {
        if (localStorage.getItem('w_cart_array') == null){
            localStorage.setItem("w_cart_array", JSON.stringify({}));
        }
    }

    w_fun_addcart(sid) {
        // console.log(sid);
        const w_cart_array = JSON.parse(localStorage.getItem("w_cart_array"));
        if (w_cart_array[sid] === undefined) {
            w_cart_array[sid] = ({ "price": 1080, "color": "1", "材質": "聚酯纖維", "數量": 1 });
            localStorage.setItem("w_cart_array", JSON.stringify(w_cart_array));
        }
        else {
            console.log("已經有");
        }
    }

    w_fun_delcart(sid){

        const w_cart_array = JSON.parse(localStorage.getItem("w_cart_array"));
        delete w_cart_array[sid];
        localStorage.setItem("w_cart_array", JSON.stringify(w_cart_array));
    }

    render() {

        return (
            <div>

                <h3 className="w_h3" onClick={this.w_fun_addcart.bind(this, "22")} >bbbbb</h3>
                <h3 className="w_h3" onClick={this.w_fun_addcart.bind(this, "33")} >bbbbb</h3>
                <h3 className="w_h3" onClick={this.w_fun_addcart.bind(this, "44")} >bbbbb</h3>
                <h3 className="w_h3" onClick={this.w_fun_delcart.bind(this, "22")} >ccccc</h3>
                <h3 className="w_h3" onClick={this.w_fun_delcart.bind(this, "33")} >ccccc</h3>
                <h3 className="w_h3" onClick={this.w_fun_delcart.bind(this, "44")} >ccccc</h3>

            </div>

        );
    }
}
export default Cart_Test;