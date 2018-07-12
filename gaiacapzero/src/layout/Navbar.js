import React, { Component } from "react";
import $ from 'jquery';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sid: localStorage.getItem("sid")
        }

    }
    componentDidMount() {

        $(".menu_icon").click(function () {
            // const menu_show = $('.menu_list').css('visibility'),
            //     menu_list_show = $('.menu_list').find('menu_list_show');

            const menu_show = $('.menu_list').css('visibility');

            if (menu_show === 'hidden') {

                $('.menu_line').addClass('close');
                $('.menu_list').addClass('menu_list_show');
                $('.menu_list_left').css('transform', 'translateY(0%)');
                $('.menu_list_right').css('transform', 'translateY(0%)');
                $('.menu_list_right_obj li').addClass('active');

            } else if (menu_show === 'visible') {

                $('.menu_line').removeClass('close');
                $('.menu_list').removeClass('menu_list_show');
                $('.menu_list_left').css('transform', 'translateY(-100%)');
                $('.menu_list_right').css('transform', 'translateY(100%)');
                $('.menu_list_right_obj li').removeClass('active');

            }
        });


        $(".menu_list_right_obj li a").click(function () {
            $(this).addClass('active');
        });

        $('#poudect_list_btn').click(function () {
            const $list_open = $('#poudect_list').css('display');

            if ($list_open === 'none') {
                $('.poudect_list_btn_icon span').eq(1).css('transform', 'rotate(0deg)');
                $('#poudect_list').slideToggle();
            } else if ($list_open === 'block') {
                $('.poudect_list_btn_icon span').eq(1).css('transform', 'rotate(90deg)');
                $('#poudect_list').slideToggle();
            }
        });

        const sid = this.state.sid;
        // console.log(sid);
        if (sid === null) {

            $("#w_login_i").addClass("w_login_active");
            $("#w_login_i").removeClass("w_login_not_active");
            $("#w_logout_i").removeClass("w_login_active");
            $("#w_logout_i").addClass("w_login_not_active");
        }
        else {
            // console.log("有登入了啦nav");
            $("#w_login_i").removeClass("w_login_active");
            $("#w_login_i").addClass("w_login_not_active");
            $("#w_logout_i").addClass("w_login_active");
            $("#w_logout_i").removeClass("w_login_not_active");
        }

        this.w_bag_num();

    }

    w_door_close() {
        $('.w_login_left_door').css('transform', 'translateX(0%)');
        $('.w_login_right_door').css('transform', 'translateX(0%)');
        $('.w_door').addClass("w_door_appear");
        // document.getElementByClassName("w_door").classList.add("w_door_appear");
    }

    w_nav_memebers_close() {


        $(".w_nav_memebers").css('transform', 'translateX(0%)');

        $("#w_logout_x").removeClass("w_login_not_active");
        $("#w_login_i").addClass("w_login_not_active");
    }

    w_nav_memebers_open() {
        $(".w_nav_memebers").css('transform', 'translateX(100%)');

        $("#w_logout_i").removeClass("w_login_not_active");
        $("#w_logout_x").addClass("w_login_not_active");
    }

    w_bag_num() {
        var jsonarray = JSON.parse(localStorage.getItem("w_cart_array"));
        console.log(jsonarray);
        
        if (jsonarray === null) {
            return false;
            
        }
        else {
            console.log(Object.keys(jsonarray).length);

            var order = Object.keys(jsonarray).length;

            $(".w_shoppingbag_num").text(order);
        }
    }


    render() {


        return (

            <header id="navbar" className="bar_body_style h_fixed h_flex">
                <h1 id="logo" className="logo_style">
                    {/* <NavLink to="/" className="nav-link">
                    
                        <img src="/images/GAIA_CAP_LOGO.svg" alt="GAIA CAP戴出你的形狀" />
                    </NavLink> */}

                    <a href="/" className="nav-link">
                        <img src="/images/GAIA_CAP_LOGO.svg" alt="GAIA CAP戴出你的形狀" />
                    </a>
                </h1>

                <ul id="bar_button" className="h_flex" >

                    <li>
                        <a>
                            <img onClick={this.w_door_close} id="w_login_i" src="/images/login_GAIA_CAP.svg" alt="" />
                            <img onClick={this.w_nav_memebers_close} id="w_logout_i" src="/images/GAIA_CAP_login.svg" alt="" />
                            <img className="w_login_not_active" onClick={this.w_nav_memebers_open} id="w_logout_x" src="/images/GAIA_CAP_login.svg" alt="" />
                        </a>
                    </li>
                    <li className="w_shoppingbag_nav_all">
                        <a href="/shoppingcart/page/1">
                            <img src="/images/shoppingbag_GAIA_CAP.svg" alt="" />
                            <p className="w_shoppingbag_num">0</p>
                            {/* 購物車數字 */}
                        </a>
                    </li>
                    <li id="menu_button" className="menu_button_style">
                        <a href="#">
                            <div className="menu_icon">
                                <span className="menu_line"></span>
                                <span className="menu_line"></span>
                                <span className="menu_line"></span>
                            </div>
                        </a>
                    </li>
                </ul>
                <div className="menu_list">
                    <div className="menu_list_left">
                        <div>
                            <img src="/images/GAIA_CAP_LOGO.svg" alt="" />
                            <p>&copy; 2018 GAIA CAP copyright</p>
                        </div>
                    </div>
                    <div className="menu_list_right">
                        <ul className="menu_list_right_obj" >

                            <li >
                                <a href="/">
                                    首頁
                                </a>
                            </li>
                            <li>
                                <a href="/about">
                                    關於GAIA CAP
                                </a>
                            </li>
                            <li>
                                <div id="poudect_list_btn" className="h_flex">
                                    <p className="poudect_list_btn_type">主題系列</p>
                                    <p className="poudect_list_btn_icon">
                                        <span></span>
                                        <span></span>
                                    </p>
                                </div>
                            </li>
                            <ul id="poudect_list" className="list_style">
                                <li><a href="/sportstarInside">經典球員系列</a></li>
                                <li><a href="/marvelpage">MARVEL系列</a></li>
                                <li><a href="/lifeInside">生活風格系列</a></li>
                            </ul>
                            <li>
                                <a href="/product_list/">
                                潮流商品
                             </a>
                            </li>
                            <li>
                                <a href="/about/#about3">
                                    門市資訊
                             </a>
                            </li>
                            <li>
                                <a href="">
                                    線上Q&A
                             </a>
                            </li>
                            <li>
                                <a href="">
                                    連絡我們
                             </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        );
    }
}
export default Navbar;