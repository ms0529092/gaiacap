import React, { Component } from 'react';
import $ from 'jquery';
import './SportstarInside.scss';
import Footer from '../layout/Footer';
import Aaron_Judge from './Aaron_Judge';
import Bryce_Harper from './Bryce_Harper';

class SportstarInside extends Component {
    constructor(props) {
        super(props);
        this.a_showImages = this.a_showImages.bind(this);
    }
    componentDidMount() {
        this.a_showImages();
    }
    a_showIntroduction() {
        $(".a_playerIntroduction").css("transform", "translateX(0)");
    }
    a_showIntroduction2() {
        $(".a_playerIntroduction2").css("transform", "translateX(0)");
    }

    a_scrollUp() {
        $(".a_scrollup")
        $("html").animate({
            scrollTop: 0
        }, 500);
    }

    a_showImages() {

        var windowHeight = $(window).height();
        console.log($(window).scrollTop());
        console.log(window.scrollY);
        $(".a_sportstar_content").each(function () {

            var thisPos = $(".a_star").offset().top;
            var topOfWindow = $(window).scrollTop();

            console.log(topOfWindow + 'topOfWindow');
            console.log(windowHeight + 'windowHeight');
            console.log(thisPos + 'thisPos');
            if (topOfWindow + windowHeight > thisPos) {
                // $(e + " .a_star").addClass("a_fadeIn");
                // $(e + " .a_star").addClass(f);
            }


            if (topOfWindow > 300) {
                $(".a_first_row_players .a_judge .a_star").addClass("a_fadeleft");
                $(".a_first_row_players .a_judge .a_star1").addClass("a_fadeleft1");
                $(".a_first_row_players .a_text_div2 .a_none").addClass("a_fadeleft2");
                $(".a_first_row_players .a_text_div2 .a_invisible").addClass("a_fadeleft3");
            }
            if (topOfWindow > 700) {
                $(".a_first_row_players .a_cluber .a_star").addClass("a_faderight");
                $(".a_first_row_players .a_cluber .a_star1").addClass("a_faderight1");
                $(".a_first_row_players .a_text_div1 .a_none").addClass("a_faderight2");
                $(".a_first_row_players .a_text_div1 .a_invisible").addClass("a_faderight3");
            }

            if (topOfWindow > 1400) {
                $(".a_second_row_players .a_altuve .a_star").addClass("a_fadeleft");
                $(".a_second_row_players .a_altuve .a_star1").addClass("a_fadeleft1");
                $(".a_second_row_players .a_text_div4 .a_none").addClass("a_fadeleft2");
                $(".a_second_row_players .a_text_div4 .a_invisible").addClass("a_fadeleft3");
            }
            if (topOfWindow > 1800) {
                $(".a_second_row_players .a_bryant .a_star").addClass("a_faderight");
                $(".a_second_row_players .a_bryant .a_star1").addClass("a_faderight1");
                $(".a_second_row_players .a_text_div3 .a_none").addClass("a_faderight2");
                $(".a_second_row_players .a_text_div3 .a_invisible").addClass("a_faderight3");
            }

            if (topOfWindow > 2500) {
                $(".a_third_row_players .a_trout .a_star").addClass("a_fadeleft");
                $(".a_third_row_players .a_trout .a_star1").addClass("a_fadeleft1");
                $(".a_third_row_players .a_text_div6 .a_none").addClass("a_fadeleft2");
                $(".a_third_row_players .a_text_div6 .a_invisible").addClass("a_fadeleft3");
            }
            if (topOfWindow > 2900) {
                $(".a_third_row_players .a_betts .a_star").addClass("a_faderight");
                $(".a_third_row_players .a_betts .a_star1").addClass("a_faderight1");
                $(".a_third_row_players .a_text_div5 .a_none").addClass("a_faderight2");
                $(".a_third_row_players .a_text_div5 .a_invisible").addClass("a_faderight3");
            }

            if (topOfWindow > 3600) {
                $(".a_forth_row_players .a_greinke .a_star").addClass("a_fadeleft");
                $(".a_forth_row_players .a_greinke .a_star1").addClass("a_fadeleft1");
                $(".a_forth_row_players .a_text_div8 .a_none").addClass("a_fadeleft2");
                $(".a_forth_row_players .a_text_div8 .a_invisible").addClass("a_fadeleft3");
            }
            if (topOfWindow > 4000) {
                $(".a_forth_row_players .a_arenado .a_star").addClass("a_faderight");
                $(".a_forth_row_players .a_arenado .a_star1").addClass("a_faderight1");
                $(".a_forth_row_players .a_text_div7 .a_none").addClass("a_faderight2");
                $(".a_forth_row_players .a_text_div7 .a_invisible").addClass("a_faderight3");
            }

            if (topOfWindow > 4800) {
                $(".a_fifth_row_players .a_kershaw .a_star").addClass("a_fadeleft");
                $(".a_fifth_row_players .a_kershaw .a_star1").addClass("a_fadeleft1");
                $(".a_fifth_row_players .a_text_div10 .a_none").addClass("a_fadeleft2");
                $(".a_fifth_row_players .a_text_div10 .a_invisible").addClass("a_fadeleft3");
            }
            if (topOfWindow > 5200) {
                $(".a_fifth_row_players .a_harper .a_star").addClass("a_faderight");
                $(".a_fifth_row_players .a_harper .a_star1").addClass("a_faderight1");
                $(".a_fifth_row_players .a_text_div9 .a_none").addClass("a_faderight2");
                $(".a_fifth_row_players .a_text_div9 .a_invisible").addClass("a_faderight3");
            }

            if (topOfWindow > 5800) {
                $(".a_sixth_row_players .a_molina .a_star").addClass("a_fadeleft");
                $(".a_sixth_row_players .a_molina .a_star1").addClass("a_fadeleft1");
                $(".a_sixth_row_players .a_text_div12 .a_none").addClass("a_fadeleft2");
                $(".a_sixth_row_players .a_text_div12 .a_invisible").addClass("a_fadeleft3");
            }
            if (topOfWindow > 6200) {
                $(".a_sixth_row_players .a_syndergaard .a_star").addClass("a_faderight");
                $(".a_sixth_row_players .a_syndergaard .a_star1").addClass("a_faderight1");
                $(".a_sixth_row_players .a_text_div11 .a_none").addClass("a_faderight2");
                $(".a_sixth_row_players .a_text_div11 .a_invisible").addClass("a_faderight3");
            }

            if (topOfWindow > 6999) {
                $(".a_seventh_row_players .a_chen .a_star").addClass("a_fadeleft");
                $(".a_seventh_row_players .a_chen .a_star1").addClass("a_fadeleft1");
                $(".a_seventh_row_players .a_text_div14 .a_none").addClass("a_fadeleft2");
                $(".a_seventh_row_players .a_text_div14 .a_invisible").addClass("a_fadeleft3");

            }
            if (topOfWindow > 7299) {
                $(".a_seventh_row_players .a_posey .a_star").addClass("a_faderight");
                $(".a_seventh_row_players .a_posey .a_star1").addClass("a_faderight1");
                $(".a_seventh_row_players .a_text_div13 .a_none").addClass("a_faderight2");
                $(".a_seventh_row_players .a_text_div13 .a_invisible").addClass("a_faderight3");
            }

        });

    }

    w_sport_go_route(prosid) {
        console.log(prosid);
        window.location.href = "/product_page/" + prosid;
    }




    render() {
        return (
            <div className="a_sportstar_content" onWheel={this.a_showImages}>
                <Aaron_Judge />
                <Bryce_Harper />
                <div className=" marvelpage_banner " style={{ backgroundImage: "url(/images/GAIA_CAPA_playlist_banner_pic1.jpg)" }} >

                    <div className="backmask">
                        <div className="line_first"></div>
                        <div className="line_second"></div>
                        <div className="line_third"></div>
                        <div className="line_center"></div>
                    </div>
                    <div className="mask_background_sport">
                        <div className="mask_1 mask_box1"></div>
                        <div className="mask_2 mask_box2"></div>
                        <div className="mask_3 mask_box2"></div>
                        <div className="mask_4 mask_box1"></div>
                        <div className="mask_5 mask_box1"></div>
                        <div className="mask_6 mask_box2"></div>
                        <div className="mask_7 mask_box2"></div>
                        <div className="mask_8 mask_box1"></div>
                    </div>
                    <h2 id="a_sportstar_cover" className="marvel_title_type3">
                        {/* <p><img src="/images/GAIA_CAPA_playlist_banner_MLBLOGO.svg" /></p>
                        <p>
                            <span>MLB</span>
                            <span>球星實戰系列</span>
                            
                        </p> */}
                        <div className="a_three_players">
                            <ul>
                                <li className="a_player1"><img src="/images/GAIA_CAPA_playlist_banner_pic2-1.png" alt="" /></li>
                                <li className="a_player2"><img src="/images/GAIA_CAPA_playlist_banner_pic2-3.png" /></li>
                                <li className="a_player3"><img src="/images/GAIA_CAPA_playlist_banner_pic2-2.png" /></li>
                                <li className="a_mlb_logo">
                                    <img src="/images/GAIA_CAPA_playlist_banner_MLBLOGO.svg" />
                                    <span>MLB</span>
                                </li>
                                <p>球星實戰系列</p>
                            </ul>
                        </div>
                    </h2>
                </div>

                <div className="w_sport_inside_title">
                    <div className="w_mlb_logo">

                        <img src="/images/GAIA_CAPA_playlist_banner_MLBLOGO.svg" />
                        <span>MLB球星實戰系列</span>

                    </div>
                </div>
                <div className="a_players_introduction" >
                    <div className="a_first_row_players">
                        <div className="a_cluber">
                            <div className="a_text_div1">
                                <h3 className="a_invisible">Corey Kluber</h3>
                                <span className="a_invisible">克里夫蘭印地安人王牌先發投手</span>
                                <p className="a_none">選秀會上被教士隊以第四輪選中。2011年09月01日，對運動家隊完成大聯盟首度登場，後援1.1局無失分。2014年09月22日，成為繼2004年Randy Johnson後再度達成連兩場14K的投手，九月一共拿下五勝，最後三場先發三振均達兩位數。當年以些微票數的差距獲得美聯賽揚獎。.</p>
                            </div>
                            <div className="a_more_introduction">
                                <div className="a_btn_text">查看完整簡介<i className="fas fa-chevron-circle-right"></i></div>
                            </div>
                            <div className="a_product_pic">
                                <a href="/product_page/101">
                                    <img className="a_star" src="/images/101/0.png" />
                                </a>
                            </div>
                            <a href="/product_page/101">
                                <img className="a_star1" src="/images/Corey-Kluber.jpg" />
                            </a>
                        </div>
                        <div className="a_judge">
                            <div className="a_text_div2">
                                <h3 className="a_invisible">Aaron Judge</h3>
                                <span className="a_invisible">紐約洋基隊明星外野手</span>
                                <p className="a_none">2016年08月13日，面對坦帕灣光芒隊首次大聯盟登場，四打數兩支安打，並在首打席擊出生涯第一支全壘打。在2017年表現優異，因此有了法官這個綽號，洋基球場甚至為其特別設計Judge's Chamber即Judge的特別加油區。</p>
                            </div>
                            <div className="a_more_introduction" onClick={this.a_showIntroduction}>
                                <div className="a_btn_text">查看完整簡介<i className="fas fa-chevron-circle-right"></i></div>
                            </div>
                            <div className="a_product_pic">
                                <a href="/product_page/40">
                                    <img className="a_star" src="/images/40/0.png" />
                                </a>
                            </div>
                            <a href="/product_page/40">
                                <img className="a_star1" src="/images/Aaron-Judge02.jpg" />
                            </a>
                        </div>
                    </div>
                    <div className="a_second_row_players">
                        <div className="a_bryant">
                            <div className="a_text_div3">
                                <h3 className="a_invisible">Kris Bryant</h3>
                                <span className="a_invisible">芝加哥小熊隊明星三壘手</span>
                                <p className="a_none">2013年06月06日，選秀會上被芝加哥小熊隊以第一輪第二順位選中，07月12日，正式挑戰美國職棒，簽約金為破小熊隊隊史紀錄的670萬美金。2014年被USA Today選為小聯盟年度最佳球員，並於小聯盟百大新秀中排名第一。2016年美國職棒世界大賽小熊代表冠軍隊，11月18日，以打擊率0.292、39支全壘打、102分打點的成績獲選為國聯年度MVP。</p>
                            </div>
                            <div className="a_more_introduction">
                                <div className="a_btn_text">查看完整簡介<i className="fas fa-chevron-circle-right"></i></div>
                            </div>
                            <div className="a_product_pic2">
                                <img className="a_star" src="/images/CHC_01.png" />
                            </div>
                            <a href="/product_page/40">
                                <img className=" a_star1" src="/images/Kris-Bryant02.jpg" />
                            </a>
                        </div>
                        <div className="a_altuve">
                            <div className="a_text_div4">
                                <h3 className="a_invisible">Jose Altuve</h3>
                                <span className="a_invisible">休士頓太空人隊明星二壘手</span>
                                <p className="a_none">2007年03月06日，以自由球員的身份與太空人隊簽下合約，正式挑戰美國職棒。2011年07月19日，升上大聯盟，成為球隊的先發二壘手。2017年美國職棒世界大賽太空人代表冠軍隊。2018年03月16日，與休士頓太空人隊簽下一份總值1億5100萬美金的五年延長合約，總金額成為太空人隊史的新紀錄。</p>
                            </div>
                            <div className="a_more_introduction">
                                <div className="a_btn_text">查看完整簡介<i className="fas fa-chevron-circle-right"></i></div>
                            </div>
                            <div className="a_product_pic2">
                                <img className="a_star" src="/images/HOU_01.png" />
                            </div>
                            <a href="/product_page/32">
                                <img className=" a_star1" src="/images/Jose-Altuve02.jpg" />
                            </a>
                        </div>
                    </div>
                    <div className="a_third_row_players">
                        <div className="a_betts">
                            <div className="a_text_div5">
                                <h3 className="a_invisible">Mookie Betts</h3>
                                <span className="a_invisible">波士頓紅襪隊明星外野手</span>
                                <p className="a_none">2014年06月28日，大聯盟初登場，07月13日，入選未來之星明星賽，以內野手身分出賽，
                                    07月02日，面對小熊隊Carlos Villanueva擊出大聯盟首支全壘打，08月29日，面對光芒隊Chris Archer擊出生涯首支滿貫全壘打。2015年05月05日，面對光芒隊生涯首度單場雙響砲。</p>
                            </div>
                            <div className="a_more_introduction">
                                <div className="a_btn_text">查看完整簡介<i className="fas fa-chevron-circle-right"></i></div>
                            </div>
                            <div className="a_product_pic3">
                                <img className="a_star" src="/images/BOS_01.png" />
                            </div>
                            <img className="a_star1" src="/images/Mookie-Betts02.jpg" />
                        </div>
                        <div className="a_trout">
                            <div className="a_text_div6">
                                <h3 className="a_invisible">Mike Trout</h3>
                                <span className="a_invisible">洛杉磯天使隊明星外野手</span>
                                <p className="a_none">2009年在選秀會被洛杉磯天使隊以第一輪選中，2011年07月08日，大聯盟首次出場，為該年最年輕登上大聯盟的球員，08月30日，對水手隊擊出單場雙響砲，隊史最年輕的球員。2012年07月成為美聯年紀最輕入選明星賽的選手。2013年05月21日，對水手隊完成完全打擊，達成時年僅21歲，為美聯最年輕達成者。</p>
                            </div>
                            <div className="a_more_introduction">
                                <div className="a_btn_text">查看完整簡介<i className="fas fa-chevron-circle-right"></i></div>
                            </div>
                            <div className="a_product_pic3">
                                <img className="a_star" src="/images/LAA_01.png" />
                            </div>
                            <a href="/product_page/36">
                                <img className="a_star1" src="/images/Mike-Trout02.jpg" />
                            </a>
                        </div>
                    </div>
                    <div className="a_forth_row_players">
                        <div className="a_arenado">
                            <div className="a_text_div7">
                                <h3 className="a_invisible">Nolan Arenado</h3>
                                <span className="a_invisible">科羅拉多洛磯隊明星三壘手</span>
                                <p className="a_none">2013年04月28日於大聯盟初登場，本季以新人身分獲選三壘金手套，為1957年以來首位。2014年05月08日連續28場安打，創下落磯隊史新紀錄。2015年以42支全壘打與130分打點的成績奪下國聯全壘打王和打點王，也獲得國聯三壘手金手套和國聯三壘手銀棒獎。2016年以41支全壘打與133分打點的成績再度連莊國聯全壘打王、打點王、三壘手金手套和三壘手銀棒獎，連續兩年入選明星賽。</p>
                            </div>
                            <div className="a_more_introduction">
                                <div className="a_btn_text">查看完整簡介<i className="fas fa-chevron-circle-right"></i></div>
                            </div>
                            <div className="a_product_pic4">
                                <img className="a_star" src="/images/COL_01.png" />
                            </div>
                            <img className="a_star1" src="/images/Nolan-Arenado02.jpeg" />
                        </div>
                        <div className="a_greinke">
                            <div className="a_text_div8">
                                <h3 className="a_invisible">Zack Greinke</h3>
                                <span className="a_invisible">亞歷桑納響尾蛇隊王牌先發投手</span>
                                <p className="a_none">2004年05月22日，大聯盟初登板，面對奧克蘭運動家隊擔任先發投手，06月08日，面對博覽會隊以7局無失分的好投得到生涯首勝。2012年12月10日，與洛杉磯道奇隊簽下一份總值1億4700萬美金的六年合約，成為當時美國職棒最高薪的右投手。2014年04月24日至今已連續17場先發至少投滿5局，自責失分都壓在2分或以下，此紀錄為大聯盟1900年後以來第一人達成此創舉。</p>
                            </div>
                            <div className="a_more_introduction">
                                <div className="a_btn_text">查看完整簡介<i className="fas fa-chevron-circle-right"></i></div>
                            </div>
                            <div className="a_product_pic4">
                                <img className="a_star" src="/images/ARI_01.png" />
                            </div>
                            <a href="/product_page/38">
                                <img className="a_star1" src="/images/Zack-Greinke.jpg" />
                            </a>
                        </div>
                    </div>
                    <div className="a_fifth_row_players">
                        <div className="a_harper">
                            <div className="a_text_div9">
                                <h3 className="a_invisible">Bryce Harper</h3>
                                <span className="a_invisible">華盛頓國民隊明星外野手</span>
                                <p className="a_none">在選秀會中被華盛頓國民隊以選秀狀元之姿選中，並與球隊簽下一份總值990萬美金的五年合約，並與運動知名品牌Under Armour簽下代言合約。2012年05月15日，出戰教士隊，擊出生涯首支全壘打。因遞補而入選明星賽，成為史上最年輕入選明星賽的野手。2016年05月04日，與運動知名品牌Under Armour延長十年代言合約，為目前大聯盟史上最大代言合約。</p>
                            </div>
                            <div className="a_more_introduction" onClick={this.a_showIntroduction2}>
                                <div className="a_btn_text">查看完整簡介<i className="fas fa-chevron-circle-right"></i></div>
                            </div>
                            <div className="a_product_pic5">
                                <img className="a_star" src="/images/WAS_01.png" />
                            </div>
                            <img className="a_star1" src="/images/Bryce-Harper01.jpg" />
                        </div>
                        <div className="a_kershaw">
                            <div className="a_text_div10">
                                <h3 className="a_invisible">Clayton Kershaw</h3>
                                <span className="a_invisible">洛杉磯道奇隊王牌先發投手</span>
                                <p className="a_none">2006年美國職棒洛杉磯道奇隊第一輪第7順位2010年09月15日，對巨人隊9局被打4支安打送出4次三振沒有保送，投出生涯首場完封勝。2011年榮獲投手三冠王，為隊史第二人，並獲得賽揚獎。2013年單季繳出1.83防禦率，為2000年後第三位防禦率低於2的先發投手。同年獲頒賽揚獎，成為少數以25歲之齡便獲頒兩次此獎的投手。</p>
                            </div>
                            <div className="a_more_introduction">
                                <div className="a_btn_text">查看完整簡介<i className="fas fa-chevron-circle-right"></i></div>
                            </div>
                            <div className="a_product_pic5">
                                <img className="a_star" src="/images/LAD_01.png" />
                            </div>
                            <a href="/product_page/33">
                                <img className="a_star1" src="/images/Clayton-Kershaw01.jpg" />
                            </a>
                        </div>
                    </div>
                    <div className="a_sixth_row_players">
                        <div className="a_syndergaard">
                            <div className="a_text_div11">
                                <h3 className="a_invisible">Noah Syndergaard</h3>
                                <span className="a_invisible">紐約大都會隊王牌先發投手</span>
                                <p className="a_none">2010年06月，在選秀會上被多倫多藍鳥隊以第一輪第38順位選中，正式挑戰美國職棒。2013年 轉隊至紐約大都會隊的第一個球季，被評為球隊小聯盟體系所有新秀中的第三。2015年05月27日，對費城人隊Sean O'Sullivan擊出生涯首支全壘打，07月10日，對響尾蛇隊主投8局投出生涯新高的13次三振，08月08日，其成為自1900年第一位連兩場先發都投出9次三振且沒有任何保送的新秀球員。</p>
                            </div>
                            <div className="a_more_introduction">
                                <div className="a_btn_text">查看完整簡介<i className="fas fa-chevron-circle-right"></i></div>
                            </div>
                            <div className="a_product_pic6">
                                <img className="a_star" src="/images/NYM_01.png" />
                            </div>
                            <img className="a_star1" src="/images/Noah-Syndergaard_02.jpg" />
                        </div>
                        <div className="a_molina">
                            <div className="a_text_div12">
                                <h3 className="a_invisible">Yadier Molina</h3>
                                <span className="a_invisible">聖路易紅雀隊明星捕手</span>
                                <p className="a_none">2000年以第四輪被紅雀選中。2005年成為紅雀隊主力先發捕手。2006年美國職棒世界大賽紅雀代表冠軍隊。2011年美國職棒世界大賽紅雀代表冠軍隊。2012年03月01日，再度與紅雀隊簽下一份總值達9000萬美金的五年延長合約。</p>
                            </div>
                            <div className="a_more_introduction">
                                <div className="a_btn_text">查看完整簡介<i className="fas fa-chevron-circle-right"></i></div>
                            </div>
                            <div className="a_product_pic6">
                                <img className="a_star" src="/images/STL_01.png" />
                            </div>
                            <img className="a_star1" src="/images/Yadier-Molina.jpg" />
                        </div>
                    </div>
                    <div className="a_seventh_row_players">
                        <div className="a_posey">
                            <div className="a_text_div13">
                                <h3 className="a_invisible">Buster Posey</h3>
                                <span className="a_invisible">舊金山巨人隊明星捕手</span>
                                <p className="a_none">2008年美國職棒舊金山巨人隊第一輪第5順位，08月15日，以620萬美元簽約金的合約加盟舊金山巨人隊。2010年06月09日，對紅人隊Aaron Harang擊出生涯首支全壘打。2010美國職棒世界大賽巨人代表冠軍隊。11月15日，票選為國聯新人王，第六位獲得此殊榮的巨人隊球員。</p>
                            </div>
                            <div className="a_more_introduction">
                                <div className="a_btn_text">查看完整簡介<i className="fas fa-chevron-circle-right"></i></div>
                            </div>
                            <div className="a_product_pic7">
                                <img className="a_star" src="/images/SF_01.png" />
                            </div>
                            <img className=" a_star1" src="/images/Buster-Posey02.jpg" />
                        </div>
                        <div className="a_chen" >
                            <div className="a_text_div14">
                                <h3 className="a_invisible">陳偉殷</h3>
                                <span className="a_invisible">邁阿密馬林魚王牌先發投手</span>
                                <p className="a_none">2012年04月10日，美國職棒大聯盟初登板，於主場先發迎戰紐約洋基隊，04月17日，於客場先發出戰芝加哥白襪隊，拿下個人在大聯盟的第一勝，07月29日，先發出戰運動家隊，飆出12次三振創金鶯隊史紀錄，也順利拿下新人球季第9場勝投，創下台灣投手新高。</p>
                            </div>
                            <div className="a_more_introduction">
                                <div className="a_btn_text">查看完整簡介<i className="fas fa-chevron-circle-right"></i></div>
                            </div>
                            <div className="a_product_pic7">
                                <img className="a_star" src="/images/MIA_01.png" />
                            </div>
                            <a href="/product_page/47">
                                <img className=" a_star1" src="/images/chen.jpg" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="a_scrollup" onClick={this.a_scrollUp}><i class="fa fa-angle-up"></i></div>
                <Footer />
            </div>
        );
    }
}

export default SportstarInside;
