import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import $ from "jquery";
import './Shoppingcartsecond.scss';
import Shoppingcarttype from './Shoppingcarttype';

class Shoppingcartsecond extends Component {
    constructor(props) {
        super(props);
        this.state = {
            insertId: '',
            domainName: '',
        }

        this.domainName = window.location.href;
        const loc = this.domainName.indexOf(':', 6);
        this.domainName = this.domainName.slice(0, loc);
        this.state.domainName = this.domainName;
        

        this.w_cart_submit = this.w_cart_submit.bind(this);

    }



    w_shopping_cart_totalprice(){
        
        var allData = (JSON.parse(localStorage.getItem("w_cart_array")));
        var totalMoney = 272;
        Object.keys(allData).forEach(function(currentValue, index, arr){  
            $("#w_shoppingfirst_"+currentValue).attr("value",allData[currentValue].數量);
            totalMoney += Number(allData[currentValue].price * allData[currentValue].數量);
        });

        
        $("#whale_shopping_cart_second_total").html("$"+totalMoney);
    }

    componentDidMount() {
        $("#places_list").change(function () {

            switch (parseInt($(this).val())) {
                default:
                case 0:
                    $("#store_list").css('opacity', '0');
                    $("#store_list option").remove();
                    break;
                case 1:
                    $("#store_list option").remove();
                    let store_array1 = ["大同門市", "大新門市", "公館門市", "景美門市", "慶太門市"];
                    $.each(store_array1, function (i, val) {
                        $("#store_list").append(
                            $("<option value='" + store_array1[i] + "'>" + store_array1[i] + "</option>")
                        ).css('opacity', '1');
                    });
                    break;
                case 2:
                    $("#store_list option").remove();
                    let store_array2 = ["慶明門市", "安坑門市", "安泰門市", "慶富門市", "振家門市"];
                    $.each(store_array2, function (i, val) {
                        $("#store_list").append(
                            $("<option value='" + store_array2[i] + "'>" + store_array2[i] + "</option>")
                        ).css('opacity', '1');
                    });
                    break;
                case 3:
                    $("#store_list option").remove();
                    let store_array3 = ["景華門市", "龍華門市", "新化門市", "振和門市", "盡與門市"];
                    $.each(store_array3, function (i, val) {
                        $("#store_list").append(
                            $("<option value='" + store_array3[i] + "'>" + store_array3[i] + "</option>")
                        ).css('opacity', '1');
                    });
                    break;
                case 4:
                    $("#store_list option").remove();
                    let store_array4 = ["敬倫門市", "修民門市", "舜智門市", "嘉琳門市", "大熙門市"];
                    $.each(store_array4, function (i, val) {
                        $("#store_list").append(
                            $("<option value='" + store_array4[i] + "'>" + store_array4[i] + "</option>")
                        ).css('opacity', '1');
                    });
                    break;
            }
        });
        let send_change = $('.send_message_from_button input');

        send_change.click(function () {

            $(this).addClass('check').siblings().removeClass('check');
            if (send_change.eq(0).hasClass('check')) {
                $("#tab_list").css('transform', 'translateY(0px)');
            } else if (send_change.eq(1).hasClass('check')) {
                $("#tab_list").css('transform', 'translateY(-217px)');
            }
        });

        this.w_shopping_cart_totalprice();
    }

    w_cart_submit() {

       

        var rightNow = new Date();
        var res = rightNow.toISOString().slice(0, 10).replace(/-/g, "");
        var order_type = '';

        var insertId = '';

        if (localStorage.getItem("sid") == null) {
            alert("請登入");
            $('.w_login_left_door').css('transform', 'translateX(0%)');
            $('.w_login_right_door').css('transform', 'translateX(0%)');
            $('.w_door').addClass("w_door_appear");
            return false;
        }


        if ($("#w_shopping_cart_market").hasClass("check")) {
            order_type = 1;
        }
        else if ($("#w_shopping_cart_willpay").hasClass("check")) {
            order_type = 2;
        }

        $.ajax({
            type: "PUT",
            url: this.state.domainName+':3087/orders/add',
            data: {
                'u_id': localStorage.getItem("sid"),
                'create_time': res,
                'user_name': $("#name").val(),
                'user_address': $("#address1").val() + $("#address2").val() + $("#address3").val(),
                'mobile': $("#phone").val(),
                'email': $("#email").val(),
                'order_type': order_type,
                'order_market': $("#places_list").find(":selected").text(),
                'order_store': $("#store_list").find(":selected").text(),
                'order_time': '無不方便取貨時間',
                'order_method': '訂單資料處理中',

            },
            
            dataType: "json",
            success: (data) => {

                localStorage.setItem("insertId", data.insertId);

                // alert(data.insertId);
                // localStorage.setItem("tes", JSON.stringify(data));

                var detailarray = JSON.parse(localStorage.getItem("w_cart_array"));

                var w_bombs = this.state.domainName;
                var order_id = localStorage.getItem("insertId");

                $.each(detailarray, function (index, value) {
                    $.ajax({
                        type: "PUT",
                        url: w_bombs + ':3087/orders/detail',
                        data: {
                            'order_id': order_id,
                            'proid': index,
                            'value': value.數量
                        },

                        dataType: "json"
                    }).then(function (data) {
                        
                        console.log(data);

                    }).catch(function (error) {
                        alert(error);

                    });
                });

                
            },
            error: (xhr, status, err) => {
                console.error(this.props.url, status, err.toString());
            }
        }).then(function (data) {

            
           
            setTimeout(function () { 
                window.location.href = "/shoppingcart/page/3"; 
            }, 3000);

        }).catch(function (error) {
            alert(error);
            return false;
        });

        // window.location.href = "/shoppingcart/page/3";

    }


    render() {
        return (
            <aside id="Shoppingcart_second">
                <Shoppingcarttype type={'2'} />
                <div id="pay_message" className="pay_message">
                    <div id="client_message" className="client_message">
                        <div className="client_message_in">
                            <h3>買家資訊</h3>
                            <div id="clinet_message_from" className="clinet_message_from">
                                <input id="name" type="name" placeholder="姓名" />
                                <input id="email" type="email" placeholder="email" />
                                <input id="phone" type="phone" placeholder="手機號碼" />
                            </div>
                        </div>
                    </div>
                    <div id="send_message" className="send_message">
                        <div className="send_message_in">
                            <h3>送貨及取貨方式</h3>
                            <div id="send_message_from" className="send_message_from">
                                <div className="send_message_from_button">
                                    <input id="w_shopping_cart_market" className="check" type="button" value="超商取貨" />
                                    <input id="w_shopping_cart_willpay" type="button" value="貨到付款" />
                                </div>
                                <div className="send_message_from_body">
                                    {/* 超商取貨 */}
                                    <div id="tab_list">
                                        <div className="send_message_from_tab">
                                            <select id="places_list">
                                                <option value="0">請選擇地區</option>
                                                <option value="1">台北地區</option>
                                                <option value="2">新北地區</option>
                                                <option value="3">桃園地區</option>
                                                <option value="4">台中地區</option>
                                            </select>
                                            <select id="store_list"></select>
                                        </div>
                                        {/* 貨到付款 */}
                                        <div className="send_message_from_tab">
                                            <input id="address1" type="address1" placeholder="縣市" />
                                            <input id="address2" type="address2" placeholder="地區" />
                                            <input id="address3" type="address3" placeholder="地址" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                                        <span className="price">TWD$122</span>
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <span>運輸費</span>
                                        <span className="price">TWD$150</span>
                                    </label>
                                </li>
                                <div className="toto">
                                    <label>
                                        <span>總計金額</span>
                                        <span id="whale_shopping_cart_second_total" className="price">TWD$272</span>
                                    </label>
                                </div>
                            </ul>
                        </div>
                        <div id="submit" onClick={this.w_cart_submit} className="submit_button">
                            <button type="button">
                                <span>結帳</span>
                            </button>
                        </div>
                        <a className="w_cart_black_a" href="/shoppingcart/page/1">
                            <div id="backtofirst" className="backtofirst_button">
                                <button type="button">
                                    <span>返回購物車列表</span>
                                </button>
                            </div>
                        </a>
                    </div>
                </div>
            </aside>
        );
    }
}
export default Shoppingcartsecond;