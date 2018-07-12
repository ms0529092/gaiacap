import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import $ from "jquery";
import './Shoppingcartthird.scss';
import './Order_Details.scss';
import Shoppingcarttype from './Shoppingcarttype';

class Order_Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orderId: props.match.params.orderId,
            jsonData: [],
            domainName: '',
        }
        this.domainName = window.location.href;
        const loc = this.domainName.indexOf(':', 6);
        this.domainName = this.domainName.slice(0, loc);
        this.state.domainName = this.domainName;
        
        this.w_order_details_get = this.w_order_details_get.bind(this);
        this.w_order_details_proall = this.w_order_details_proall.bind(this);

    }
    componentDidMount() {
        const orderId = this.state.orderId;

        this.w_order_details_get(orderId);

        console.log(this.state.jsonData);

        this.w_order_details_proall(orderId);


    }

    w_order_details_get(orderId) {

        $.ajax({
            type: "GET",
            url: this.state.domainName+':3087/orders/detail/' + orderId,

            dataType: "json"
        }).then(function (data) {

            // console.log(data[0]);
            $(".w_clinet_name").text(data[0].user_name);
            $(".w_clinet_mail").text(data[0].user_email);
            $(".w_clinet_mobile").text(data[0].user_mobile);
            $(".w_clinet_market").text(data[0].order_market);
            $(".w_clinet_store").text(data[0].order_store);

        }).catch(function (error) {
            alert(error);

        });
    }

    w_order_details_proall(orderId) {
        var throwJsonData = [];

        $.ajax({
            type: "GET",
            url: this.state.domainName+':3087/orders/detailall/' + orderId,

            dataType: "json",
            success: (data) => {
                // console.log(data);
                // console.log("1");
                // console.log(this.state.domainName);
                var w_bombs = this.state.domainName;
                $.each(data, function (index, value) {
                    // console.log(data);
                    // console.log(index);
                    // console.log(value.com_id);
                    console.log(w_bombs+"S");
                   
                    $.ajax({
                        type: "GET",
                        url: w_bombs+':3087/coms/pro/' + value.com_id,
                        dataType: "json",
                        success: (dataJson) => {
                            // console.log(dataJson);

                            throwJsonData[index] = { name: dataJson[0]['name'], color: dataJson[0].color, sid: dataJson[0].sid, material: dataJson[0].material, order: data[index]['com_product'], price: dataJson[0].price };

                            // console.log(dataJson[0].name);
                            // console.log(dataJson[0].color);
                            // console.log(dataJson[0].sid);
                            // console.log(dataJson[0].material);
                            // console.log("數量="+data[index]['com_product']);
                            console.log(throwJsonData+"82");
                            localStorage.setItem("odall_storage", JSON.stringify(throwJsonData));

                        },
                        error: (xhr, status, err) => {
                            console.error(this.props.url, status, err.toString());
                        }
                    })
                });



            },
            error: (xhr, status, err) => {
                console.error(this.props.url, status, err.toString());
            }
        })
        localStorage.setItem("odall_storage", JSON.stringify(throwJsonData));
        // this.setState({
        //     jsonData: throwJsonData
        // }); 

        // console.log(throwJsonData+"S");
        // localStorage.setItem("test1",JSON.stringify(throwJsonData));

    }

    w_cartend_go(gotype) {
        localStorage.setItem("w_cart_array", "{}");
        if (gotype === 'home') {
            window.location.href = "/";
        }
        else if (gotype === 'user') {
            window.location.href = "/members/product_modify";
        }

    }

    render() {
        let jsonData = JSON.parse(localStorage.getItem("odall_storage"));

        return (
            <aside id="Shoppingcart_third" className="w_order_details_all">

                <div id="clinet_product_list" className="clinet_product_list">
                    <div className="clinet_product_list_in">
                        <h3>
                            <span>訂單明細(編號{this.state.orderId})</span>
                            <span id="whale_order_details_total"></span>
                        </h3>
                        <div id="project_list" className="project_list_body">
                            <div className="project_list_body_type">
                                <span>產品資訊</span>
                                <span>單價</span>
                                <span>數量</span>
                                <span>總價</span>
                            </div>

                            {

                                (jsonData || []).map((jd) => {
                                    // 傳回 jsx
                                    return (
                                        <ul id="product" className="project_list_body_product">
                                            <li id="product_oce" className="product_oce">
                                                <div className="product_oce_img">
                                                    <img src={"/images/" + jd.sid + "/0.png"} alt="" />
                                                    <div id="product_oce_img_type" className="product_oce_img_type">
                                                        <span className="product_oce_img_type_1"></span>
                                                        <p></p>
                                                        <p>
                                                            <span>編號:{jd.sid}</span>
                                                            <span>顏色:{jd.color}</span>
                                                            <span>材質:{jd.material}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div id="product_oce_price">
                                                    <span>${jd.price}</span>
                                                </div>
                                                <div id="product_oce_number">
                                                    <span>{jd.order}</span>
                                                </div>
                                                <div id="product_oce_totoprice">
                                                    <span>${jd.price * jd.order}</span>
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
                        <input type="button" onClick={this.w_cartend_go.bind(this, "home")} value="回首頁" />
                        <input type="button" onClick={this.w_cartend_go.bind(this, "user")} value="回會員中心" />
                    </div>
                </div>
            </aside>
        );
    }
}

export default Order_Details;