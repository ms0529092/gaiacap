import React, { Component } from "react";
import $ from "jquery";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./Shoppingcarttype.scss";

class Shoppingcarttype extends Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {
        const { type } = this.props;

        if (type === '1') {
            $("#shopping_type_first").addClass("check");
        }
        else if (type === '2') {
            $("#shopping_type_second").addClass("check");
        }
        else if (type === '3') {
            $("#shopping_type_third").addClass("check");
        }
    }

    w_gggg(page) {

        window.location.href = "/shoppingcart/page/" + page;


    }

    render() {

        return (
            <aside id="shoppingcarttype" className="shoppingcart_type">
                <div id="shopping_type_first">
                    <span>
                        訂單
                        <br />
                        確認
                    </span>
                </div>
                <div id="shopping_type_second">
                    <span>
                        買家
                        <br />
                        資訊
                    </span>
                </div>
                <div id="shopping_type_third">
                    <span>
                        訂單
                        <br />
                        成立
                    </span>
                </div>
            </aside>
        );
    }
}

export default Shoppingcarttype;