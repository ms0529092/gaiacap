import React, { Component } from 'react';
import $ from 'jquery';
import { BrowserRouter, Route} from 'react-router-dom';

import './Product_list.scss';

import Allcolor from '../layout/Allcolor';
import Product_Out from '../layout/Product_Out';
import Footer from '../layout/Footer';
import Product_Bread from './Product_Bread';

class Product_list extends Component {
    constructor(props) {

        super(props);

        
    }
    componentDidMount() {

    }

    a_click() {
        $(".a_life_style").delay(0).queue(function () {
            $(this).toggleClass("active").dequeue();
        });
    }
    a_click2() {
        $(".a_sportstar_style").delay(0).queue(function () {
            $(this).toggleClass("active").dequeue();
        });
    }
    a_click3() {
        $(".a_marvel_style").delay(0).queue(function () {
            $(this).toggleClass("active").dequeue();
        });
    }

    render() {
        return (
            <BrowserRouter>
                <div className="a_product_wrapper">
                    <div className="a_product_crumbs">
                        <Route exact path="/product_list" component={Product_Bread} />
                        <Route exact path="/product_list/color/:color" component={Product_Bread} />
                        <Route exact path="/product_list/series/:series" component={Product_Bread} />
                    </div>
                    <div className="a_product_content a_flex">
                        <div className="a_product_left_area">
                            <h4 className="a_h4">全商品列表
                            {/* <NavLink to={"/product_list"}>全商品列表</NavLink> */}
                            </h4>
                            <div className="a_life_style a_list_style" onClick={this.a_click}>
                                <span>
                                    <a href={"/product_list/series/4"}>生活風格系列</a>
                                    {/* 生活風格系列 */}
                                    
                                </span>
                                
                            </div>
                            <div className="a_sportstar_style a_list_style" onClick={this.a_click2}>
                                <span>
                                    <a href={"/product_list/series/1"}>球星實戰系列</a>
                                    {/* 球星實戰系列 */}
                                    
                                </span>
                               
                            </div>
                            <div className="a_marvel_style a_list_style" onClick={this.a_click3}>
                                <span>
                                <a href={"/product_list/series/3"}>Marvel系列</a>
                                {/* Marvel系列 */}
                                    
                                </span>
                                
                            </div>

                            <Allcolor />
                            
                        </div>


                        <div className="a_product_right_area">

                            <Route exact path="/product_list" component={Product_Out} />
                            <Route exact path="/product_list/color/:color" component={Product_Out} />
                            <Route exact path="/product_list/series/:series" component={Product_Out} />
                            {/* <Product_Out /> */}

                        </div>



                    </div>
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}
export default Product_list;