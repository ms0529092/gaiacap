import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import $ from "jquery";
import './Shoppingcartthird.scss';
import Shoppingcarttype from './Shoppingcarttype';

class Shoppingcartthird extends Component {
    constructor(props) {
        super(props);
        this.state = {
            domainName: '',
        }
        
        this.domainName = window.location.href;
        const loc = this.domainName.indexOf(':', 6);
        this.domainName = this.domainName.slice(0, loc);
        this.state.domainName = this.domainName;
        

    }

    componentDidMount() {
        this.w_cart_user_view();
        this.w_shopping_cart_totalprice();
    }

    w_cart_user_view(){
        var orderId = localStorage.getItem("insertId");

        $.ajax({
            type: "GET",
            url: this.state.domainName+':3087/orders/detail/'+orderId,
            
            dataType: "json",
            success: (data) => {
                console.log(data[0]);
                
                $(".w_clinet_name").text(data[0].user_name);
                $(".w_clinet_mail").text(data[0].user_email);
                $(".w_clinet_mobile").text(data[0].user_mobile);
                $(".w_clinet_market").text(data[0].order_market);
                $(".w_clinet_store").text(data[0].order_store);
            },
            error: (xhr, status, err) => {
                console.error(this.props.url, status, err.toString());
            }
        }).then(function (data) {

            console.log(data[0]);
            $(".w_clinet_name").text(data[0].user_name);
            $(".w_clinet_mail").text(data[0].user_email);
            $(".w_clinet_mobile").text(data[0].user_mobile);
            $(".w_clinet_market").text(data[0].order_market);
            $(".w_clinet_store").text(data[0].order_store);

        }).catch(function (error) {
            // alert(error);

        });

    }      

    w_cartend_go(gotype){
        localStorage.setItem("w_cart_array","{}");
        if(gotype==='home'){
            window.location.href="/";
        }
        else if(gotype === 'user'){
            window.location.href="/members/product_modify";
        }

    }
    w_shopping_cart_totalprice(){
        
        var allData = (JSON.parse(localStorage.getItem("w_cart_array")));
        var totalMoney = 272;
        Object.keys(allData).forEach(function(currentValue, index, arr){  
            $("#w_shoppingfirst_"+currentValue).attr("value",allData[currentValue].數量);
            totalMoney += Number(allData[currentValue].price * allData[currentValue].數量);
        });

        
        $("#whale_shopping_cart_third_total").html("總計金額：TWD$"+totalMoney);
    }


    render() {
        let jsonData = JSON.parse(localStorage.getItem("w_cart_array"));
        return (
            <aside id="Shoppingcart_third">
                <Shoppingcarttype type={'3'} />
                <div id="clinet_product_list" className="clinet_product_list">
                    <div className="clinet_product_list_in">
                        <h3>
                            <span>訂單明細(訂單編號{localStorage.getItem("insertId")})</span>
                            <span id="whale_shopping_cart_third_total">總計金額：TWD$XXX</span>
                        </h3>
                        <div id="project_list" className="project_list_body">
                            <div className="project_list_body_type">
                                <span>產品資訊</span>
                                <span>單價</span>
                                <span>數量</span>
                                <span>總價</span>
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
                                        <ul id="product" className="project_list_body_product">
                                            <li id="product_oce" className="product_oce">
                                                <div className="product_oce_img">
                                                    <img src={"/images/" + jd + "/0.png"} alt="" />
                                                    <div id="product_oce_img_type" className="product_oce_img_type">
                                                        <span className="product_oce_img_type_1"></span>
                                                        <p></p>
                                                        <p>
                                                            <span>編號:{jd}</span>
                                                            <span>顏色:{urlcname}</span>
                                                            <span>材質:{jsonData[jd].材質}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div id="product_oce_price">
                                                    <span>${jsonData[jd].price}</span>
                                                </div>
                                                <div id="product_oce_number">
                                                    <span>{jsonData[jd].數量}</span>
                                                </div>
                                                <div id="product_oce_totoprice">
                                                    <span>${jsonData[jd].price * jsonData[jd].數量}</span>
                                                </div>
                                            </li>
                                        </ul>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
                <div id="clinet_address_list" className="clinet_address_list">
                    <div className="clinet_address_list_in">
                        <h3>
                            <span>收件人明細</span>
                        </h3>
                        <div id="clinet_address_list_clinet" className="clinet_address_list_clinet">
                            <div className="clinet_address_list_clinet_oce">
                                <span className="w_clinet_name">王曉明</span>
                                <span className="w_clinet_mail">test@gmail.com</span>
                                <span className="w_clinet_mobile">0900166123</span>
                            </div>
                            <div className="clinet_address_list_send">
                                <p>超商取貨</p>
                            </div>
                            <div className="clinet_address_list_address_oce">
                                <span className="w_clinet_market">台中地區</span>
                                <span className="w_clinet_store">修民門市</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="Shoppingcart_third_button" className="shoppingcart_third_button">
                    <div className="shoppingcart_third_button_in">
                        <input type="button" value="回首頁" onClick={this.w_cartend_go.bind(this,"home")} />
                        <input type="button" value="回會員中心" onClick={this.w_cartend_go.bind(this,"user")} />
                    </div>
                </div>
            </aside>
        );
    }
}

export default Shoppingcartthird;