import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';
import './Reset.scss';

import Home from './conponent/Home';
import Home_Slick from './conponent/Home_Slick';

import Members from './conponent/Members';

import Navbar from './layout/Navbar';
import Navbar_Members from './layout/Navbar_Members';

import Login from './conponent/Login';
import Signup from './conponent/Signup';

import Product_List from './conponent/Product_list';
import Product_Page from './conponent/Product_Page';

import LifeInside from './conponent/LifeInside';
import SportstarInside from './conponent/SportstarInside';
import Marvelpage from './conponent/Marvelpage';

import Shoppingcart from './conponent/Shoppingcart';
import About from './conponent/About';
import Order_Details from './conponent/Order_Details';

import Servey from './conponent/Servey';

import Sport_db from './conponent/Sport_db';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

            sid: localStorage.getItem("sid"),

        }

    }
    componentDidMount(){
        console.log(localStorage.getItem("w_cart_array"));
        if(localStorage.getItem("w_cart_array") === null){
            localStorage.setItem("w_cart_array","{}");
        }
    }


    render() {
        return (
            <BrowserRouter>
                <div className="w_bgb">

                    <Navbar />
                    <Navbar_Members />
                    <Login />
                    <Signup />



                    {/* <Route exact path="/" component={Home} /> */}
                    <Route exact path="/" component={Home_Slick} />
                    <Route exact path="/members" component={Members} />
                    <Route exact path="/members/product_modify" component={Members} />
                    <Route exact path="/members/product_collection" component={Members} />
                    <Route exact path="/members/members_edit" component={Members} />

                    <Route exact path="/product_list" component={Product_List} />
                    <Route exact path="/product_list/color/:color" component={Product_List} />
                    <Route exact path="/product_list/series/:series" component={Product_List} />

                    <Route exact path="/product_page/:sid" component={Product_Page} />
                    <Route exact path="/lifeInside" component={LifeInside} />
                    <Route exact path="/sportstarInside" component={SportstarInside} />
                    <Route exact path="/marvelpage" component={Marvelpage} />

                    <Route exact path="/shoppingcart" component={Shoppingcart} />
                    <Route exact path="/shoppingcart/page/:page" component={Shoppingcart} />
                    <Route exact path="/order_deatils/:orderId" component={Order_Details} />

                    <Route exact path="/servey" component={Servey} />

                    <Route exact path="/about" component={About} />

                    <Route exact path="/sport_db" component={Sport_db} />

                </div>
            </BrowserRouter>
        );
    }

}

export default App;
