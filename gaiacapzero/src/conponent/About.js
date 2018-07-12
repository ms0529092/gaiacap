import React, {Component} from 'react';
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom';
import $ from 'jquery';
import './About.scss';
import Footer from '../layout/Footer';

class About extends Component{
    constructor(props){
        super(props);

    }
    componentDidMount(){

    }
    a_showStoreNews1(){        
        $("#a_store1").css("display","block").siblings().css("display","none");        
    }
    a_showStoreNews2(){    
        $("#a_store2").css("display","block").siblings().css("display","none");
    }
    a_showStoreNews3(){           
        $("#a_store3").css("display","block").siblings().css("display","none");
    }
    a_showStoreNews4(){
        $("#a_store4").css("display","block").siblings().css("display","none");
    }
    a_showStoreNews5(){
        $("#a_store5").css("display","block").siblings().css("display","none");
    }

    render(){
        return(
            <div className="a_aboutPage">
                <div className="a_aboutBanner">
                    <img src="/images/GAIA_CAP_aboutgaiacap_banner_type.png" />
                </div>  
                <div id="about1" className="a_aboutProject">
                    <div className="a_aboutIdea_left">
                        <h2>關於GAIA CAP的品牌理念</h2>
                        <span>
                            <h3>配出流行趨勢</h3>
                            <h3>創造潮流</h3></span>
                        <p>GAIA中文意思是蓋亞，在希臘語中有創造之母之意，我們希望能夠創造潮流，因此命名。</p>
                        <p>不少潮流商品網站，僅提供購買的功能，現今消費者在選擇商品上常陷入一種困惑「不知道自己想要什麼」，最後只能點擊右上方的按鈕選擇離開。</p>
                        <p>因此，我們創造了一個，能幫助消費者在帽子搭配上，輕鬆愜意。</p>
                        <p>同時也在首頁中，放入各種流行趨勢的主題元素，希望能吸引更多喜歡穿搭的朋友們。</p>
                    </div>
                    <div className="a_aboutIdea_right">
                        <img src="/images/GAIACAP_Introduce1.jpg" />
                    </div>
                </div>
                <div id="about2" className="a_aboutProject2">
                    <div className="a_aboutService_left">
                        <h2>關於GAIA CAP的服務</h2>
                        <span>
                            <h3>創新式推薦</h3>
                            <h3>給您專屬選擇</h3></span>
                        <p>我們採用創新式線上問卷線上問卷系統，提供專屬您的風格推薦，透過問卷系統我可以從您喜歡的風格、個性、興趣，甚至是當下心情推薦您適當風格的帽子。</p>
                    </div>
                    <div className="a_aboutService_right">
                        <img src="/images/GAIACAP_Introduce2.png" />
                    </div>
                </div>
                <div id="about3" className="a_storeProject">
                    <div className="a_store_left">
                        <span id="a_store1">
                            <h2>快閃店資訊</h2>
                            <h3>活動地址：台北市忠孝東路三段123號</h3>
                            <h3>活動時間：2017/06/11</h3>
                            <iframe width='670px' height='410px' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='http://maps.google.com.tw/maps?f=q&hl=zh-TW&geocode=&q=台北市忠孝東路三段123號&z=16&output=embed&t='></iframe>
                        </span>
                        <span id="a_store2">
                            <h2>快閃店資訊</h2>
                            <h3>活動地址：台北市敦化南路二段243號</h3>
                            <h3>活動時間：2017/08/11</h3>
                            <iframe width='670px' height='410px' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='http://maps.google.com.tw/maps?f=q&hl=zh-TW&geocode=&q=台北市敦化南路二段243號&z=16&output=embed&t='></iframe>
                        </span>
                        <span id="a_store3">
                            <h2>快閃店資訊</h2>
                            <h3>活動地址：台北市內湖路一段368號</h3>
                            <h3>活動時間：2017/10/11</h3>
                            <iframe width='670px' height='410px' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='http://maps.google.com.tw/maps?f=q&hl=zh-TW&geocode=&q=台北市內湖路一段368號&z=16&output=embed&t='></iframe>
                        </span>
                        <span id="a_store4">
                            <h2>快閃店資訊</h2> 
                            <h3>活動地址：台北市信義路五段200號</h3>
                            <h3>活動時間：2017/12/11</h3>
                            <iframe width='670px' height='410px' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='http://maps.google.com.tw/maps?f=q&hl=zh-TW&geocode=&q=台北市信義路五段200號&z=16&output=embed&t='></iframe>
                        </span>
                        <span id="a_store5">
                            <h2>快閃店資訊</h2>
                            <h3>活動地址：台北市復興南路二段380號</h3>
                            <h3>活動時間：2018/02/11</h3>
                            <iframe width='670px' height='410px' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='http://maps.google.com.tw/maps?f=q&hl=zh-TW&geocode=&q=台北市復興南路二段380號&z=16&output=embed&t='></iframe>
                        </span>                  
                    </div>
                    <div className="a_store_right">
                        <div className="a_store_news">
                            <ul>
                                <li onClick={this.a_showStoreNews1}><div className="a_storeButton a_store_button1"><span>01.</span>快閃店忠孝店消息-2017/06/11</div></li>
                                <li onClick={this.a_showStoreNews2}><div className="a_storeButton a_store_button2"><span>02.</span>快閃店敦南店消息-2017/08/11</div></li>
                                <li onClick={this.a_showStoreNews3}><div className="a_storeButton a_store_button3"><span>03.</span>快閃店內湖店消息-2017/10/11</div></li>
                                <li onClick={this.a_showStoreNews4}><div className="a_storeButton a_store_button4"><span>04.</span>快閃店信義店消息-2017/12/11</div></li>
                                <li onClick={this.a_showStoreNews5}><div className="a_storeButton a_store_button5"><span>05.</span>快閃店大安店消息-2018/02/11</div></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>

        );
    }
}
export default About;