import React, {Component} from 'react';
import $ from 'jquery';
import './Player_Introduction.scss';

class Aaron_Judge extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){

    }
    a_hideIntrouduction(){
        $(".a_playerIntroduction").css("transform", "translateX(-100%)")
    }
    render(){
        
        return(
            <div className="a_playerIntroduction" style={{transform:"translateX(-100%)"}}>
                <div className="a_playerName">
                    <div className="a_playersPic">
                        <img src="/images/Aaron-Judge03.jpg" />                        
                    </div>
                    <div className="a_bg_gradient"></div>
                    <div className="a_playersMoreIntroduction">
                        <div className="a_firstpart">

                            <h3>Aaron Judge</h3>
                            <span>#99 紐約洋基隊明星外野手</span>

                            <p>2010年06月09日，選秀會被奧克蘭運動家隊以第31輪選中，但選擇就讀大學而未簽約。2013年06月06日，大學畢業後再度參加選秀會，於第一輪第32順位被洋基隊選中並與球隊完成簽約，正式挑戰美國職棒。2015年被評選為百大新秀第68名。2016年08月13日，面對坦帕灣光芒隊首次大聯盟登場，四打數兩支安打，並在首打席擊出生涯第一支全壘打。04月28日，對巴爾的摩金鶯隊達成生涯首次雙響砲。06月02日，對多倫多藍鳥隊Francisco Liriano擊出生涯首支滿貫砲。07月07日，對密爾瓦基釀酒人隊達成本季第30轟，超越Joe DiMaggio，成為洋基隊史菜鳥單季開轟紀錄，同時也是史上第36位在明星賽前就完成30轟的選手。07月10日，第一年即獲邀參加全壘打大賽，並成功擊敗Miguel Sano獲得冠軍。08月19日，對波士頓紅襪隊的比賽中，連續36場比賽被                    
                            </p>

                        </div>
                        <div className="a_secondpart">

                            <div className="a_arcoss_icon" onClick={this.a_hideIntrouduction}>
                                <span className="a_crossline1"></span>
                                <span className="a_crossline2"></span>
                            </div>

                            <p>三振，破Bill Stoneman紀錄。08月22日，對底特律老虎隊的比賽中，單場1打數擊出1支安打，另選到3次保送沒有三振，於七局上由Jacoby Ellsbury代打，終止賽前連37場被三振的紀錄。09月16日，對巴爾的摩金鶯隊的比賽中，在第5局遭到三振，吞下本季196K，破2012年Curtis Granderson單季吞下195三振，成為隊史紀錄。09月25日，對堪薩斯市皇家隊達成本季第49及50轟，超越Mark McGwire菜鳥紀錄，當日法官以雙響炮達成此記錄。09月30日，對多倫多藍鳥隊達成本季第52轟，把原先超越Mark McGwire的菜鳥紀錄再往上推，樹立新的紀錄障礙。11月21日，於洛杉磯接受左肩關節鏡手術，除去關節游離體。</p>

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
export default Aaron_Judge;