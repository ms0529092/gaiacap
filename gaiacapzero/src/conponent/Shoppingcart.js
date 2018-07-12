import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Shoppingcartfirst from "./Shoppingcartfirst";
import Shoppingcartsecond from "./Shoppingcartsecond";
import Shoppingcartthird from "./Shoppingcartthird";
import "./Shoppingcart.scss";

class Shoppingcart extends Component {
    componentDidMount() {

    }
    render() {
        return (
            <BrowserRouter >
                <section id="shoppingcart" className="shoppingcart">
            
                    <Route exact path="/shoppingcart/page/1" component={Shoppingcartfirst} />
                    <Route exact path="/shoppingcart/page/2" component={Shoppingcartsecond} />
                    <Route exact path="/shoppingcart/page/3" component={Shoppingcartthird} />
                
                </section>
            </BrowserRouter>
        );
    }
}

export default Shoppingcart;