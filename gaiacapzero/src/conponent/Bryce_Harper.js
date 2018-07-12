import React, {Component} from 'react';
import $ from 'jquery';
import './Player_Introduction.scss';

class Bryce_Harper extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){

    }
    a_hideIntrouduction(){
        $(".a_playerIntroduction2").css("transform", "translateX(-100%)")
    }
    render(){
        
        return(
            <div className="a_playerIntroduction2" style={{transform:"translateX(-100%)"}}>
                <div className="a_playerName">
                    <div className="a_playersPic">
                        <img src="/images/Bryce_Harper.jpeg" />                        
                    </div>
                    <div className="a_bg_gradient"></div>
                    <div className="a_playersMoreIntroduction">
                        <div className="a_firstpart">

                            <h3>Beyce Harper</h3>
                            <span>#34 華盛頓國民隊明星外野手</span>

                            <p>2010年在選秀會中被華盛頓國民隊以選秀狀元之姿選中，並與球隊簽下一份總值990萬美金的五年合約，並與運動知名品牌Under Armour簽下代言合約。2012年04月27日，因Ryan Zimmerman進入傷兵名單而晉升大聯盟，初登板擊出首安為以及以高飛犧牲打打下首分打點。05月07日，對戰費城人隊遭投手故意觸身球上壘，隨即演出盜本壘成功，也為生涯首次盜壘成功。05月15日，擊出生涯首支全壘打。入選明星賽，成為史上最年輕入選明星賽的野手。2014年12月16日，與國民隊簽下兩年總值750萬美金的延長合約。2015年05月06日，對邁阿密馬林魚隊達成生涯第一次三響砲，08日下一場比賽對亞特蘭大勇士隊又擊出雙響砲，兩場合計擊出5支全壘打。09月16日，對費城費城人隊擊出本季第40支全壘打，同時成為大聯盟史上第7位在22歲或更年輕就締造單季40支全壘打的球員。2016年04月15日，擊出              
                            </p>

                        </div>
                        <div className="a_secondpart">

                            <div className="a_arcoss_icon" onClick={this.a_hideIntrouduction}>
                                <span className="a_crossline1"></span>
                                <span className="a_crossline2"></span>
                            </div>

                            <p>滿貫砲為生涯第100支全壘打，年僅23歲又182天成為美職史上第8年輕達成生涯百轟的球員。2016年05月04日，與運動知名品牌Under Armour延長十年代言合約，為目前大聯盟史上最大代言合約。05月08日，對芝加哥小熊隊單場被保送6次平大聯盟紀錄，加上一次觸身球共上壘7次，系列賽被保送13次則為大聯盟新紀錄。2018年05月02日，於對海盜隊擔任開路先鋒，在一局下轟出個人生涯首發首局首打席全壘打。</p>

                            <div className="a_shoppingbutton">
                                <a href="/product_list/series/1">看實戰商品<i className="fas fa-chevron-circle-right"></i></a>
                            </div>
                            
                        </div>

                        
                    </div>
                </div>
            </div>
        );
    }
}
export default Bryce_Harper;