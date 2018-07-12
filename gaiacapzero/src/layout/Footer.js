import React, { Component } from "react";
import "./Footer.scss";

class Footer extends Component{
    constructor(props){
        super(props);

    }
    componentDidMount(){

    }
    render(){
        return(
            <footer id="footer">
                <div className="footer_in">
                    <section className="footer_list">
                        <aside className="footer_list_logo">
                            <img src="/images/GAIA_CAP_LOGO.svg" alt="" />
                        </aside>
                        <aside className="footer_list_oce">
                            <div>
                                <p>關於GAIA CAP</p>
                                <ul>
                                    <li>
                                        <a href="/about/#about1">
                                            關於品牌理念
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/about/#about2">
                                            關於服務
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <p>主題系列</p>
                                <ul>
                                    <li>
                                        <a href="/sportstarInside">
                                            球員實戰系列
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/marvelpage">
                                            MARVEL系列  
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/lifeInside">
                                            嘻哈生活風格系列
                                        </a>
                                    </li>
                                    
                                </ul>
                            </div>
                            <div>
                                <p>潮流商品</p>
                                <ul>
                                    <li>
                                        <a href="/product_list">
                                            球員實戰商品
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/product_list">
                                            MARVEL商品  
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/product_list">
                                            嘻哈生活風格商品 
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <p>線上Q&A</p>
                                <ul>
                                    <li>
                                        <a href="#">
                                            出貨與寄送
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            付款方式
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            退貨政策
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <p>活動資訊</p>
                                <ul>
                                    <li>
                                        <a href="/about/#about3">
                                            快閃店資訊
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </aside>
                    </section>
                    <address>
                        <div className="communities_icon">
                            <div className="communities_icon_list">
                                <a href="#"><img src="/images/Communities_icon_facebook.svg" alt="" /></a>
                                <a href="#"><img src="/images/Communities_icon_instargam.svg" alt="" /></a>
                                <a href="#"><img src="/images/Communities_icon_line.svg" alt="" /></a>
                                <a href="#"><img src="/images/Communities_icon_youtube.svg" alt="" /></a>
                            </div>
                        </div>
                        <span>GAIA CAP &copy;2018 ★All Rights Reserved.</span>
                    </address>
                </div>
            </footer>
        );
    }
}

export default Footer;