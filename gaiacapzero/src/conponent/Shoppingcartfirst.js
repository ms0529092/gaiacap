import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import './Shoppingcartfirst.scss';
import Shoppingcarttype from './Shoppingcarttype';
import $ from 'jquery';

class Shoppingcartfirst extends Component {
    constructor(props) {
        super(props);
        this.state = {


        }
        this.state = this.state;
        this.w_handleChange = this.w_handleChange.bind(this);

    }

    componentDidMount() {
        this.w_shopping_cart_totalprice();

    }

    w_del_cart(jd) {
        const w_cart_array = JSON.parse(localStorage.getItem("w_cart_array"));
        delete w_cart_array[jd];
        localStorage.setItem("w_cart_array", JSON.stringify(w_cart_array));
        window.location.reload();
    }

    w_handleChange(sid) {

        var allData = (JSON.parse(localStorage.getItem("w_cart_array")));
        var num = $("#w_shoppingfirst_" + sid).val();
        $("#w_shoppingfirst_" + sid).attr("value", num);
        $("#w_shoppingfirst_totoprice" + sid + " span").html("$" + num * allData[sid].price);


        allData[sid].數量 = $("#w_shoppingfirst_" + sid).val();
        localStorage.setItem("w_cart_array", JSON.stringify(allData));

        this.w_shopping_cart_totalprice();

    }

    w_shopping_cart_totalprice() {
        var allData = (JSON.parse(localStorage.getItem("w_cart_array")));
        var totalMoney = 272;
        Object.keys(allData).forEach(function (currentValue, index, arr) {
            $("#w_shoppingfirst_" + currentValue).attr("value", allData[currentValue].數量);
            totalMoney += Number(allData[currentValue].price * allData[currentValue].數量);
        });


        $("#whale_shopping_cart_first_total").html("$" + totalMoney);
    }

    render() {
        let jsonData = JSON.parse(localStorage.getItem("w_cart_array"));
        // let key  =  Object.keys(jsonData);

        return (
            <aside id="shoppingcart_first">
                <Shoppingcarttype type={'1'} />

                <div id="project_list" className="project_list_body">
                    <div className="project_list_body_type">
                        <span>產品資訊</span>
                        <span>單價</span>
                        <span>數量</span>
                        <span>總價</span>
                        <span>刪除</span>
                    </div>
                    {
                        Object.keys(jsonData).map((jd) => {
                            // 傳回 jsx
                            var urlcname = '';
                            switch (jsonData[jd].color) {
                                case '1':

                                    urlcname = "紅色";

                                    break;
                                case '2':

                                    urlcname = "橙色";

                                    break;
                                case '3':

                                    urlcname = "黃色";

                                    break;
                                case '4':

                                    urlcname = "綠色";

                                    break;
                                case '5':

                                    urlcname = "藍色";

                                    break;
                                case '6':

                                    urlcname = "深藍色";

                                    break;
                                case '7':

                                    urlcname = "紫色";

                                    break;
                                case '8':

                                    urlcname = "棕色";

                                    break;
                                case '9':

                                    urlcname = "黑色";

                                    break;
                                case '10':

                                    urlcname = "白色";

                                    break;
                                case '11':

                                    urlcname = "金色";

                                    break;
                                case '12':

                                    urlcname = "灰色";

                                    break;
                                default:
                                    break;
                            }
                            return (
                                <ul key={jd} className="project_list_body_product">
                                    <li className="product_oce">
                                        <div className="product_oce_img">
                                            <img src={"/images/" + jd + "/0.png"} alt="" />
                                            <div className="product_oce_img_type">
                                                <span className="product_oce_img_type_1">{jsonData[jd].cname}</span>
                                                <p>
                                                    <span>編號:{jd}</span>
                                                    <span>顏色:{urlcname}</span>
                                                    <span>材質:{jsonData[jd].材質}</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="product_oce_price">
                                            <span>${jsonData[jd].price}</span>
                                        </div>
                                        <div className="product_oce_number">
                                            <span>
                                                <input className="w_shoppingfirst_input" onChange={this.w_handleChange.bind(this, jd)} id={"w_shoppingfirst_" + jd} type="number" />
                                            </span>

                                        </div>
                                        <div className="product_oce_totoprice" id={"w_shoppingfirst_totoprice" + jd}>
                                            <span>${jsonData[jd].price * jsonData[jd].數量}</span>
                                        </div>
                                        <div className="product_oce_delete">
                                            <div className="product_oce_delete_icon">
                                                <img onClick={this.w_del_cart.bind(this, jd)} src="/images/GAIA_CAP_shopping_cart-01.svg" alt="" />
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            );
                        })
                    }

                </div>
                <div id="next_list" className="next_list_body">
                    <div id="soldback" className="next_list_body_in">
                        <div className="soldback">
                            <span>退貨辦法</span>
                            <br />
                            <span>三十天內無條件退貨</span>
                        </div>
                    </div>
                    <div id="bagsend" className="next_list_body_in">
                        <div className="bagsend">
                            <span>出貨與寄送</span>
                            <br />
                            <span>訂單會於國定假日外的工作天(星期一到星期五)寄送</span>
                        </div>
                    </div>
                    <div id="money" className="money_toto_body next_list_body_in">
                        <div className="money_in">
                            <p className="money_type">
                                <span>摘要</span>
                            </p>
                            <ul className="money_match">
                                <li>
                                    <label>
                                        <span>小計金額</span>
                                        <span className="price">$122</span>
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <span>運輸費</span>
                                        <span className="price">$150</span>
                                    </label>
                                </li>
                                <div className="toto">
                                    <label>
                                        <span>總計金額</span>
                                        <span id="whale_shopping_cart_first_total" className="price">TWD$272</span>
                                    </label>
                                </div>
                            </ul>
                        </div>
                        <a href="/shoppingcart/page/2">
                            <div id="submit" className="submit_button">

                                <button type="button">
                                    <span>下一步</span>
                                </button>

                            </div>
                        </a>
                    </div>
                </div>
            </aside>
        );
    }
}

export default Shoppingcartfirst;