
import React, { Component } from 'react';
import './LifeInside.scss';
import Footer from '../layout/Footer';
import $ from 'jquery';
import Life_About from './Life_About';
// import './MarvelInside.scss';

class LifeInside extends Component {
    constructor(props) {
        super(props);
        this.gkimg1 = "../images/life/GAIA_CAPA_lifestyle_background.jpg";
        this.style1 = { background: `url(${this.gkimg1}  no-repeat center center)`, };
        // this.w_disappear = this.w_disappear.bind(this);
        this.state = {
            img: '',
            title1: '',
            title2: '',
            p1: '',
            p2: '',
            alink: '/product_list/series/4',
            aname: '看生活商品',
        };

        this.a_showIntroduction = this.a_showIntroduction.bind(this);
    }
    componentDidMount() {

    }
    a_scrollUp() {
        $(".a_scrollup")
        $("html").animate({
            scrollTop: 0
        }, 500);
    }

    a_showIntroduction(num) {
        if (num === "1") {
            this.setState({
                img: '/images/Hip-Hop03.jpg',
                title1: '嘻哈舞',
                title2: 'Hip Hop Dance',
                p1: '嘻哈舞hiphop是由最代表性的動作UP Down，C-walk，Shake組合而成，極富變化。並通過頭，頸，肩，上肢，軀乾等關節的屈伸，轉動，繞環，擺振，波浪形扭動等連貫組合而成的，各個動作都有其特定的健身效果，既注意了上肢與下肢，腹部與背部，頭部與軀幹動作的協調，又注意了組成各環節各部分獨立運動。因此街舞不僅具有一般有氧運動改善心肺功能，減少脂肪，增強肌肉彈性，增強韌帶柔韌性的功效，還具有協調人體各部位肌肉群，塑造優美體態，提高人體協調能力，陶冶美感的功能。',
                p2: '跳街舞使人注意力集中，興趣濃厚，動作優美，隨意。同時，跳嘻哈舞嘻哈還有瘦身功效，因為嘻哈舞是一種中低強度的有氧運動，在一個小時的運動中，消耗全身脂肪的作用是相當強的。此外，嘻哈舞嘻哈是一種小肌肉運動，經常練習能增加你全身的協調性，讓你的身材比例更趨標準。',

            });
        }
        else if (num === "2") {
            this.setState({
                img: '/images/banner-dj-wide2.jpg',
                title1: '唱片騎師',
                title2: 'Disc Jockey (DJ)',
                p1: '唱片騎師（英語：Disc Jockey，縮寫為DJ）是指選擇並且播放事先錄好的音樂（如流行歌），並在現場以電腦混音，製造出不同於原曲的獨特音樂，來為他人帶來娛樂的人，工作地點可能是電視台或廣播點唱節目，或者在其他一些聚會中表演，比如舞廳、舞會。',
                p2: 'DJ有許多不同的類型，以符合不同的表演場合（比如廣播室或舞廳）和不同聽眾（比如爵士迷或嘻哈迷）的需求。一個DJ的表演風格和表演技巧必須反映出這些需求。比如說，結婚典禮上的DJ除了播放音樂外，他們可能也必須扮演典禮主持人的角色，要去介紹宴會主角以及帶領來賓互動等。銳舞派對中的DJ則必須在他們的表演中呈現出較多的放歌技巧，例如以電子音重新混合流行歌等，以維持現場的氣氛。',

            });
        }
        else if (num === "3") {
            this.setState({
                img: '/images/Graffiti_about2.jpg',
                title1: '塗鴉',
                title2: 'Graffiti',
                p1: '塗鴉指在公共、私有設施或牆壁上的人為和有意圖的標記。塗鴉可以是圖畫，也可以是文字。未經設施擁有者許可的塗鴉一般屬違法或犯罪行為。塗鴉早於一些文明古國如古希臘和羅馬帝國便有存在。如果把塗鴉定義得再廣一些，史前時期的人們在洞穴中塗上的壁畫也可算是塗鴉。',
                p2: '一般被認為是嘻哈文化（Hip-hop）的四大元素之一。這種塗鴉分成許多支派，有費城的邪惡流派，也有紐約的狂野流派。這些塗鴉的作者多以其塗鴉形式甚至喜用的媒介分類。費城流派的塗鴉始自1960年代，但後來因在紐約地鐵的列車上出現而發揚光大。紐約流派塗鴉的其中一個創始人是一個信差。他以塗鴉來留下送遞路線的記號。當紐約時報報導他的事後，青少年爭相模仿他的塗鴉。雖然在這個信差之前便已有人在紐約塗鴉，但他是對紐約塗鴉影響最大的人。',

            });
        }
        else if (num === "4") {
            this.setState({
                img: '/images/rapper_2.jpg',
                title1: '饒舌',
                title2: 'Rapping',
                p1: '在所有流行音樂類型當中，沒有一種可以比饒舌音樂更能激起熱烈的公眾辯論。饒舌音樂已被描述為：非洲和美洲數世紀以來的文化與音樂鏈結中，一個至關重要的環節；真實表達被壓迫都市下層階級的聲音；一種利用長期以來對黑人刻板形象的形式。實際上，這些觀點中的每一個，都在告訴我們一些關於饒舌音樂的歷史和意義。',
                p2: '饒舌音樂有相當大部分是對歷史上曾有過的壓迫及種族主義，所做的文化回應，也是全美國黑人社區間的溝通系統(饒舌歌手Chuck D曾稱其為美國黑人的CNN)，還可以幫助瞭解生活在美國孤立都會區人們的價值﹑觀點和生活條件。最後，雖然饒舌音樂的起源和靈感來自黑人文化，但這個音樂類型的聽眾，已明顯變得多種族﹑多文化和跨越國界。當饒舌音樂歌從紐約市部分社區的地方現象，搖身一變成為數百萬美元產值的產業和全球性文化現象時，它已經變得更複雜和更多面向。',

            });
        }
        $(".a_playerIntroduction").css("transform", "translateX(0)");
    }

    w_life_changecircle(num) {
        if (num === '1') {
            $(".w_life_circle_text span").text("街舞專區");
            $(".w_life_circle_text p").text("最熱血的嘻哈運動");
        }
        else if (num === '2') {
            $(".w_life_circle_text span").text("DJ專區");
            $(".w_life_circle_text p").text("創造潮流音樂");
        }
        else if (num === '3') {
            $(".w_life_circle_text span").text("塗鴉專區");
            $(".w_life_circle_text p").text("繪出生活，繪出流行");
        }
        else if (num === '4') {
            $(".w_life_circle_text span").text("饒舌");
            $(".w_life_circle_text p").text("用文字音樂，道出社會不足");
        }

    }

    w_life_gocircle(num) {

        window.location.href = "/lifeinside/#w_life" + num;

    }

    render() {

        return (
            <div className="w_life_best marvelpage">
                <Life_About img={this.state.img} title1={this.state.title1} title2={this.state.title2} p1={this.state.p1} p2={this.state.p2} alink={this.state.alink} aname={this.state.aname} />
                <div className=" marvelpage_banner " style={{ backgroundImage: "url(/images/life/GAIA_CAPA_lifestyle_background.jpg)" }} >

                    <div className="backmask">
                        <div className="line_first"></div>
                        <div className="line_second"></div>
                        <div className="line_third"></div>
                        <div className="line_center"></div>
                    </div>
                    <div className="mask_background_life">
                        <div className="mask_1 mask_box1"></div>
                        <div className="mask_2 mask_box2"></div>
                        <div className="mask_3 mask_box2"></div>
                        <div className="mask_4 mask_box1"></div>
                        <div className="mask_5 mask_box1"></div>
                        <div className="mask_6 mask_box2"></div>
                        <div className="mask_7 mask_box2"></div>
                        <div className="mask_8 mask_box1"></div>
                    </div>
                    <h2 className="marvel_title_type2">
                        <p></p>
                        <p>
                            <span>嘻哈生活風格</span>
                            <span>系列介紹</span>
                        </p>
                    </h2>
                </div>

                <div className="w_lifeside_area1 w_life_container w_first_container  w_flex">

                </div>

                <div className="w_life_area2">
                    <p className="w_life_p_different">不同場合，展現不同自我</p>
                    <p id="w_life1" className="w_life_p_fake">
                        嘻哈（Hip-hop），是1970年代源自紐約市南布朗克斯與哈林區的非洲裔及拉丁裔青年之間的一種邊緣性次文化，繼而發展壯大成為新興藝術型態，並席捲全球。嘻哈包含饒舌、DJ、地板霹靂舞及塗鴉四大要素。另外，亦衍生出節奏口技、嘻哈時裝、嘻哈俗語等次文化。
                    </p>
                </div>

                <div className="w_life_container w_life_area3">
                    <div className="w_life_area3_img w_absolute">
                        <a style={{ cursor: "default" }} href="/product_page/100">
                            <img src="../images/life/spring_pic.jpg" alt="spring_background" />
                        </a>
                    </div>
                    <div className="w_life_area3_pro w_absolute">
                        <a href={"/product_page/100"}>
                            <img src="../images/100/0.png" alt="商品圖1" />
                        </a>
                        <a href={"/product_page/100"}>
                            <img src="../images/100/1.png" alt="商品圖2" />
                        </a>
                        <a href={"/product_page/100"}>
                            <img src="../images/100/2.png" alt="商品圖3" />
                        </a>
                    </div>
                    <div className="w_life_area3_title w_absolute">
                        <p className="w_l_a_t_1">自然擺動</p><p className="w_l_a_t_2">舞</p>
                    </div>
                    <div className="w_life_area3_about w_absolute">
                        <div className="w_life_area3_triall">
                            <div className="w_life_area3_tri1 w_absolute">

                            </div>
                            <div className="w_life_area3_tri2 w_absolute">
                                <p className="w_tri2_p">
                                    街舞是嘻哈文化的一員。如同其他的嘻哈文化，街舞也大量
                                    借用其他文化的成份，包括競技體操、街舞、非洲裔巴西文化
                                    、迪斯可、中國武術、俄羅斯土風舞，以及詹姆士·布朗、麥可·
                                    傑克森的舞步與加州的放克風格。
                                </p>

                            </div>
                            <div className="w_tri2_button w_absolute a_more_introduction" onClick={this.a_showIntroduction.bind(this, "1")}>
                                <div className="a_btn_text">查看完整簡介<i className="fas fa-chevron-circle-right"></i></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="w_life2" className="w_life_container w_life_area4">
                    <div className="w_life_area4_img w_absolute">
                        <img src="../images/life/thumb-1920-70991.jpg" alt="summer_background" />
                    </div>
                    <div className="w_life_area4_pro w_absolute">
                        <a href={"/product_page/36"}>
                            <img src="../images/36/0.png" alt="商品圖1" />
                        </a>
                        <a href={"/product_page/36"}>
                            <img src="../images/36/1.png" alt="商品圖2" />
                        </a>
                        <a href={"/product_page/36"}>
                            <img src="../images/36/2.png" alt="商品圖3" />
                        </a>
                    </div>
                    <div className="w_life_area4_title w_absolute">
                        <p className="w_l_a_t_2">DJ</p><p className="w_l_a_t_1">混合潮流</p>
                    </div>
                    <div className="w_life_area4_about w_absolute">
                        <div className="w_life_area4_triall">
                            <div className="w_life_area4_tri1 w_absolute">

                            </div>
                            <div className="w_life_area4_tri2 w_absolute">
                                <p className="w_tri2_p">

                                    在嘻哈中「刷碟」（DJ，通俗稱之為轉碟子的人）把轉碟子視為一種音樂上的樂器藝術。卡帶／收集冊，作為工具用來產生許多不同風格的音樂。一些技術包括切音、刮擦、身體上的trick、掉針、混合或多種混合都被使用。
                                </p>

                            </div>
                            <div className="w_tri2_button w_absolute a_more_introduction" onClick={this.a_showIntroduction.bind(this, "2")}>
                                <div className="a_btn_text">查看完整簡介<i className="fas fa-chevron-circle-right"></i></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="w_life3" className="w_life_container w_life_area5">
                    <div className="w_life_area5_img w_absolute">
                        <img src="../images/life/fall_pic.jpg" alt="spring_background" />
                    </div>
                    <div className="w_life_area5_pro w_absolute">
                        <a href={"/product_page/79"}>
                            <img src="../images/79/0.png" alt="商品圖1" />
                        </a>
                        <a href={"/product_page/79"}>
                            <img src="../images/79/1.png" alt="商品圖2" />
                        </a>
                        <a href={"/product_page/79"}>
                            <img src="../images/79/2.png" alt="商品圖3" />
                        </a>
                    </div>
                    <div className="w_life_area5_title w_absolute">
                        <p className="w_l_a_t_1">藝術創造</p><p className="w_l_a_t_2">塗</p>
                    </div>
                    <div className="w_life_area5_about w_absolute">
                        <div className="w_life_area5_triall">
                            <div className="w_life_area5_tri1 w_absolute">

                            </div>
                            <div className="w_life_area5_tri2 w_absolute">
                                <p className="w_tri2_p">
                                    塗鴉和嘻哈文化的關係起源於早期的塗鴉藝術家多同時從事嘻哈文化的其他領域。塗鴉被理解為饒舌音樂的視覺表達方式，就像地板舞被視為它的一種身體表達方式。1983年的電影《狂野風格》被普遍認為是第一部嘻哈電影，片中該時期的紐約塗鴉場景刻畫出令人印象深刻的視覺效果。
                                </p>

                            </div>
                            <div className="w_tri2_button w_absolute a_more_introduction" onClick={this.a_showIntroduction.bind(this, "3")}>
                                <div className="a_btn_text">查看完整簡介<i className="fas fa-chevron-circle-right"></i></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="w_life5" className="w_life_container w_life_area6">
                    <div className="w_life_area6_img w_absolute">
                        <a style={{ cursor: "default" }} href="/product_page/90">
                            <img src="../images/life/winter_pic.jpg" alt="summer_background" />
                        </a>
                    </div>
                    <div className="w_life_area6_pro w_absolute">
                        <a href={"/product_page/90"}>
                            <img src="../images/90/0.png" alt="商品圖1" />
                        </a>
                        <a href={"/product_page/90"}>
                            <img src="../images/90/1.png" alt="商品圖2" />
                        </a>
                        <a href={"/product_page/90"}>
                            <img src="../images/90/2.png" alt="商品圖3" />
                        </a>
                    </div>
                    <div className="w_life_area6_title w_absolute">
                        <p className="w_l_a_t_2">饒舌</p><p className="w_l_a_t_1">叛逆有型</p>
                    </div>
                    <div className="w_life_area6_about w_absolute">
                        <div className="w_life_area6_triall">
                            <div className="w_life_area6_tri1 w_absolute">

                            </div>
                            <div className="w_life_area6_tri2 w_absolute">
                                <p className="w_tri2_p">
                                    饒舌是一種帶有節奏與押韻的歌唱技巧。
                                    在美國1970年代興起的嘻哈文化中，饒舌是主要元素之一
                                    ，最早是美國黑人在社區街頭表達
                                    政治和社會思想的途徑之一，其起源與口語詩有關，並且大
                                    量運用俗語、俚語等民間口語。
                                </p>

                            </div>

                            <div className="w_tri2_button w_absolute a_more_introduction" onClick={this.a_showIntroduction.bind(this, "4")}>
                                <div className="a_btn_text">查看完整簡介<i className="fas fa-chevron-circle-right"></i></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w_life_container w_life_area7">

                    <img src="../images/life/circle_background.svg" alt="" />
                    <div className="w_life_big_circle">
                        <div onMouseOver={this.w_life_changecircle.bind(this, "1")} onClick={this.w_life_gocircle.bind(this, "1")} className="w_life_cs" style={{ backgroundImage: "url(../images/life/spring_pic.jpg)" }}></div>
                        <div onMouseOver={this.w_life_changecircle.bind(this, "2")} onClick={this.w_life_gocircle.bind(this, "2")} className="w_life_cs" style={{ backgroundImage: "url(../images/life/thumb-1920-70991.jpg)" }}></div>
                        <div onMouseOver={this.w_life_changecircle.bind(this, "3")} onClick={this.w_life_gocircle.bind(this, "4")} className="w_life_cs" style={{ backgroundImage: "url(../images/life/winter_pic.jpg)" }}></div>
                        <div onMouseOver={this.w_life_changecircle.bind(this, "4")} onClick={this.w_life_gocircle.bind(this, "3")} className="w_life_cs" style={{ backgroundImage: "url(../images/life/fall_pic.jpg)" }}></div>

                    </div>
                    <div className="w_life_circle" >
                        <div className="w_life_circle_text">
                            <span>街舞系列</span>
                            <hr style={{ width: "356px" }} />
                            <p>內文假字</p>
                        </div>
                    </div>
                </div>
                <div className="a_scrollup" onClick={this.a_scrollUp}><i class="fa fa-angle-up"></i></div>
                <Footer />

            </div>
        );
    }


}

export default LifeInside;
