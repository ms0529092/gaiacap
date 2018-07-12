import React, { Component } from "react";
import $ from 'jquery';
import "./Marvelpage.scss";
import Life_About from "./Life_About";
import Footer from "../layout/Footer";

class Marvelpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: '',
            title1: '',
            title2: '',
            p1: '',
            p2: '',
            alink: '/product_list/series/3',
            aname: 'Marvel系列',
        };

        this.a_showIntroduction = this.a_showIntroduction.bind(this);
    }
    a_showIntroduction(num) {
        if (num === "1") {
            this.setState({
                img: '/images/ironman_artwork.png',
                title1: '鋼鐵人',
                title2: 'IRONMAN',
                p1: '東尼·史塔克生於紐約長島，父親為著名的企業兼發明家霍華·史塔克。小時候即展現驚人的天賦，僅15歲時就進入麻省理工學院電子工程學系大學部就讀，於19歲時以最高分的成績獲得雙碩士學位。21歲時他的雙親死於車禍意外(實際上是被九頭蛇洗腦後的酷寒戰士襲擊)，史塔克繼承了父親擁有的史塔克企業（Stark Industries）。史塔克接管公司後作的第一件事就是買下製造他父母座車上瑕疵煞車系統的公司並修正其設計上的缺陷。',
                p2: '在一次前往越南（真人電影為波灣戰爭時）視察自己公司新的微型晶片對美軍在戰場上助益的旅程中，史塔克誤入陷阱而被俘虜。俘虜他的人是一個越南軍閥名叫王秋（Wong Chu），史塔克的心臟由於被陷阱的碎片插入而命在旦夕，唯一的活路就是和同為俘虜的著名物理學家殷森（Yin Sen，後來被稱作侯殷森（Ho Yinsen））合作為王秋製造武器。不過史塔克與殷森私下利用工廠祕密設計並製造了一套動力裝甲，這一副鐵製外骨骼式護甲賦予史塔克巨大的力量與其他能力，不但能讓他的心臟繼續跳動，還可以讓他逃脫。殷森犧牲自己的生命讓史塔克有足夠的時間換上這副笨重的裝甲，成為鋼鐵人的史塔克則殺死了王秋與其手下。在逃亡的途中，鋼鐵人遇見了一名受傷的美國空軍直升機飛行員吉姆羅德斯（Jim Rhodes），鋼鐵人自稱是史塔克的保鏢，兩人合力抵禦尾隨而來的北越追兵直到抵達美軍前線。在回到美國本土後史塔克繼續改良這副裝甲，建立起冒險家與鋼鐵人的雙重身份。他並且大幅的拓展了父親留下來的史塔克企業，後來改名為史塔克國際企業（Stark International）。',

            });
        }
        else if (num === "2") {
            this.setState({
                img: '/images/thor_artwork.png',
                title1: '雷神索爾',
                title2: 'THOR',
                p1: '公元965年，眾神之父奧丁率領著阿斯嘉軍隊消滅進攻地球挪威滕斯貝格的外星種族寒冰巨人，而奧丁將寒冰界的神力能源「寒冰之盒」帶走，與剩餘的軍隊返回故鄉。於大戰結束的幾年後，奧丁將故事告訴他珍愛的兩個兒子索爾與洛基，告知他們之中只有一個人能繼承王位。數年後，操縱雷神之鎚的索爾即將接替父親的王位，但在加冕儀式時，三個寒冰巨人闖進地下寶庫打算奪回寒冰之盒，最後集體被寶庫的防禦戰士毀滅者殺死。因儀式中止而沒能當上國王的索爾為此滿腔怒火，帶領洛基與戰友希芙、沃斯塔格、凡達爾及霍根，搭乘彩虹橋到達寒冰界大開殺戒。寒冰巨人之王勞菲無法忍受索爾的自大和殘酷而決定再次發動戰爭，奧丁趕來後先將索爾等人救回阿斯嘉；索爾的愚蠢之舉讓奧丁對他徹底失望，於是剝奪索爾的神力後用彩虹橋將他驅逐出去，同時對錘子下魔咒：「無論是誰拿到這個錘子，只要他夠資格，就能繼承雷神索爾的能力」。',
                p2: '索爾在地球受到珍的照顧，聽到鎮民們談到錘子的事情後決定去該處拿。珍得知她住處所有實驗儀器和文件都被考森等神盾局人員查扣後，因為研究被奪走而只好和找交通工具的索爾達成共識。夜裏，索爾闖進神盾局圍成的隔離堡壘中，打敗數名特工後本觸摸到錘子，但卻因爲是凡人狀態而無法拿起來，最後一聲長嘯後遭到收押。洛基以隱形狀態來到被關押的索爾面前，謊稱奧丁已去世而讓索爾死心。茫然無措的索爾最終被賽維格協助釋放，索爾偷偷拿回珍的重要筆記本，作為答謝後和她交流自己來自的世界。沃斯塔格等人爲了接回索爾而決定私自行事，受到彩虹橋看守者海姆達爾的秘密協助傳送到地球，遇到索爾後解釋洛基撒謊等等事情。',

            });
        }
        else if (num === "3") {
            this.setState({
                img: '/images/hulk_artwork.png',
                title1: '無敵浩克',
                title2: 'HULK',
                p1: '在美國弗吉尼亞州的卡爾弗大學，「雷霆」·羅斯將軍與科學家布魯斯·班納博士會面，布魯斯是羅斯將軍的女兒貝蒂的同事兼男朋友，該次會面為的是有關羅斯聲稱讓人類對伽瑪射線免疫的實驗。那實驗—羅斯希望重啟二戰時期有關「超級戰士」的實驗—該實驗失敗並出了意外，布魯斯·班納為救同事而被伽瑪射線照射到身體，繼而產生異變，這導致他每當被激怒時，他的心率每分鐘超過200次，他就會短暫地變成綠色的巨人，並擁有無窮的力量，成為他的分身——浩克。剛變身的浩克把實驗室摧毀，並傷害或殺死裡面的人。軍方尤其是羅斯將軍，希望利用他的超能力成為武器，故到處捕捉他。布魯斯·班納刻意消聲匿跡，更躲避他深愛的女友貝蒂，並切斷他以往生活中的任何關係，班納了躲避羅斯將軍的追蹤，到遠處隱居之餘不忘尋找解藥，過著如逃犯一般的生活。',
                p2: '五年後，班納在巴西里約熱內盧的一家飲料廠工作，期間他繼續搜索他的治癒方法。在網上，他認識到一位稱為「藍先生」的研究人員合作研究治癒辦法，而他自稱為「綠先生」。同時他也學習瑜伽技巧以幫助自己保持及控制情緒，並且在5個月內沒有變身成為浩克。在一次意外中，班納割傷手指，他的血滴進一瓶飲料中，該瓶飲料最後被威斯康星州密爾沃基的一位老人喝掉而把伽瑪病變傳染給他。羅斯將軍利用那個瓶子追蹤到班納，他派出一支由出生於俄羅斯的英國皇家海軍艾米爾·布朗斯基的特種部隊去捉拿他。班納轉變成浩克並把布朗斯基的隊伍擊敗。後來羅斯將軍向布朗斯基解釋班納如何變成浩克後，布朗斯基同意把少量類似的血清注射到其體內，這給他在速度，力量，敏捷和癒合速度都有所增強，但他的骨骼也開始變形，也損害了他的判斷力。',
            });
        }
        else if (num === "4") {
            this.setState({
                img: '/images/blackpanther_artwork.png',
                title1: '黑豹',
                title2: 'BLACK PATHER',
                p1: '齊爾蒙格背叛並殺害克勞，開飛機進入瓦干達領地後以克勞屍體作為見面禮，向帝查拉等部落長老們宣布自己身為尼喬布之子的真實身份，以王族血脈向帝查拉提出挑戰來稱王。在對決儀式裡，齊爾蒙格重創帝查拉，即使有真正背叛尼喬布的祖利出面為帝查拉請命，齊爾蒙格直接刺殺祖利，並將重傷的帝查拉扔進瀑布後獲得王位。齊爾蒙格攝入完心形藥草見到已故父親後，命令長老們將所有心形藥草燒光，但娜奇雅還是偷走一顆。對帝查拉失望的烏卡比決定忠於齊爾蒙格，準備奉命將大量汎合金製的武器分送給世界各地的瓦干達間諜，讓所有受壓迫的人民能全副武裝推翻政府。',
                p2: '娜奇雅、舒莉、拉瑪達母后以及羅斯逃到賈巴里部落領地求助，恩巴庫為她們展示其子民所營救的帝查拉，其墜河倖存且昏迷不醒。她們將心形藥草為帝查拉攝入以恢復傷勢和體能，帝查拉也決定打敗齊爾蒙格以贖清父親罪過。在齊爾蒙格準備送出武器之時，帝查拉回歸讓奧科耶等所有朵拉·米拉潔反抗齊爾蒙格，只有烏卡比執迷不悟繼續跟從齊爾蒙格。內戰中，羅斯在舒莉引導下遠程操縱戰機擊落所有運送武器的飛艇，娜奇雅、舒莉、奧科耶以及帶人前來協助的恩巴庫聯合攻擊之下，烏卡比等所有齊爾蒙格忠誠者全部投降。帝查拉獨自對打身穿金豹戰甲的齊爾蒙格，兩者打鬥至礦場的貨運列車軌道上，帝查拉趁兩者戰甲受軌道穩定器影響而解除時刻一刀制服他。由於對齊爾蒙格懷有愧疚，帝查拉遵從其遺願而扶持他觀賞王國落日的美麗景象後，齊爾蒙格最終選擇以自由之身來自盡身亡。',

            });
        } else if (num === "5") {
            this.setState({
                img: '/images/deadpool_artwork.png',
                title1: '死侍',
                title2: 'DEADPOOL',
                p1: '他年幼喪父，母親變得自暴自棄，他也離家出走另尋他途。然而在他的回憶中他有2個媽媽3個爸爸，但不管是哪一版本，最後都死了。後來他神盾幹員朋友普利史東跟史考特，在某個事件中，發現他在青少年時期被一個叫做Butler的反派控制了他的心靈，然後殺死他的家庭，然而死侍本人目前並不知情。身為X戰警中最暴力的角色之一，死侍原本是傭兵，為了治療癌症而在早期接受「Weapon X」的實驗，就算接受酷刑也能夠迅速再生，身體四分五裂了也能恢復原狀，也因此造成腦細胞過度增長，因而變得瘋瘋癲癲的。再生能力與癌細胞互相排斥，導致身體滿是疤痕，自己深感羞愧不想連累女友的幸福人生，所以離開了她。',
                p2: '死侍在平時習慣與自己的其他人格聊天，並有個黃色的對話框代表他的另外一個人格，平時惹得同伴對他很不滿。是漫威作品中少數知道自己身處在漫畫世界的人物，在很多時候會故意打破第四面牆與讀者進行對話。他喜歡墨西哥餅。認為自己有了再生能力，算是變種人，因為算後天植入，故不為X戰警所接受，因此常藉故搗亂，把X戰警們搞得很頭痛。私人愛情方面，他與許多女性都有過親吻、親熱的場面。並曾經與死亡（Death）有過感情，因此受到同樣愛上死亡的泰坦神薩諾斯（Thanos）的詛咒，成為了不死之身，所以無法跟她在一起。在《鐵手挑戰》中死侍接受德古拉的委託帶回他的未婚妻魅魔女王夏奇拉（政治婚姻，當時德古拉以為夏奇拉是嫡女），結果夏奇拉卻意外跟死侍相戀兩人進而結婚。',

            });
        } else if (num === "6") {
            this.setState({
                img: '/images/captainamerica_artwork.png',
                title1: '美國隊長',
                title2: 'CAPTIANAMERICA',
                p1: '二次大戰期間，主角史蒂芬·羅傑斯想參軍替美國打倒納粹德軍，可是他未能通過體能檢查，於是他參加了軍方一個秘密實驗計劃「重生計畫」（Rebirth），參加者會被植入一種人類增強藥劑，使其各項生理素質大幅強化，成為超級戰士，主角史蒂芬被改造後成為了唯一成功的實驗品，自此之後，他身穿紅、白、藍三色戰鬥服為國效力，他就成為了「美國隊長」。',
                p2: '精神方面，羅傑斯豐富的戰鬥經驗將他訓練成了一個高明的戰術家，以及優秀的戰場指揮官，隊友們在戰鬥中往往都會服從他的指揮。羅傑斯的反射神經與感覺器官都十分的敏銳，這使得他能夠毫無阻礙的習得各種武藝（拳擊、空手道、合氣道、柔道等），並靠著他超人的運動能力在實戰中視戰術需要隨意組合成為一種高度洗練的戰鬥風格，也可使他的靈活度足以閃躲子彈。在混戰中他最能夠發揮實力，就算是有時遇上遠比他強大許多的敵人，依然能夠將之擊敗。就算是在「漫威漫畫」的世界中，他也始終被公認是宇宙中眾多超級英雄裡最強的近身戰高手。此外他曾多次持有雷神索爾的雷神之鎚，證明了他擁有著高潔的品格。也由於羅傑斯對美軍無比熟悉，因此他能夠對美國國防部高度機密的作戰方案給予詳細的建議。身為世界上最有名的超級英雄中的一員，也使得他能夠在廣泛的社交活動中進行間諜工作，也與神盾局（S.H.I.E.L.D.）保持著連繫。另外他在廣告藝術、畫漫畫、教育（高中歷史）、執法機關等方面也都有相當成就。',
            });
        }
        $(".a_playerIntroduction").css("transform", "translateX(0)");
    }

    scrollfunction() {
        const windowwidth = $(window).width(),
            windowheight = $("#Marvelpage").height(),
            windowscorll = $(window).scrollTop(),
            num_li = $("#marvel_section1_text1 span").length;

            console.log("ttt");
            console.log("windowwidth" + windowwidth);
            console.log("windowscorll" + windowscorll);
        if (windowwidth <= 1903) {
            if (windowscorll >= 500) {
                $('.marvel_section1_text').find('h3').addClass('type_animate');
                $('.marvel_section1_pic').addClass('pic_animate');
                $('.marvelpage .marvel_section2 .marvel_section2_type:before').css('width', '100%');
                for (let i = 0; i < num_li; i++) {
                    setTimeout(function () {
                        $("#marvel_section1_text1 span").eq(i).addClass('type_text_animate');
                    }, 100 * i);
                }
            }
            if (windowscorll >= $('#marvel1').offset().top - 700) {
                $('#marvel1 .marvel_section2_type1_in img').addClass('type_text_animate');
                $('#marvel1 .marvel_section2_type2_in img').addClass('type_text_animate');
                $('#marvel1 .polygan_type').eq(0).addClass('polygon_animate');
                $('#marvel1 .polygan_type_shadow').eq(0).addClass('polygon_animate');
                $('#marvel1 .polygan_type').eq(1).addClass('polygan_animate2');
                $('#marvel1 .polygan_type_shadow').eq(1).addClass('polygan_animate2');
            }
            if (windowscorll >= $('#marvel2').offset().top - 700) {
                $('#marvel2 .marvel_section2_type1_in img').addClass('type_text_animate');
                $('#marvel2 .marvel_section2_type2_in img').addClass('type_text_animate');
                $('#marvel2 .polygan_type').eq(0).addClass('polygon_animate');
                $('#marvel2 .polygan_type_shadow').eq(0).addClass('polygon_animate');
                $('#marvel2 .polygan_type').eq(1).addClass('polygan_animate2');
                $('#marvel2 .polygan_type_shadow').eq(1).addClass('polygan_animate2');
            }
            if (windowscorll >= $('#marvel3').offset().top - 700) {
                $('#marvel3 .marvel_section2_type1_in img').addClass('type_text_animate');
                $('#marvel3 .marvel_section2_type2_in img').addClass('type_text_animate');
                $('#marvel3 .polygan_type').eq(0).addClass('polygon_animate');
                $('#marvel3 .polygan_type_shadow').eq(0).addClass('polygon_animate');
                $('#marvel3 .polygan_type').eq(1).addClass('polygan_animate2');
                $('#marvel3 .polygan_type_shadow').eq(1).addClass('polygan_animate2');
            }
        } else if (windowwidth <= 375) {
            console.log(1);
            $("Life_About").css('display', 'none');
        }
    }
    render() {
        return (
            <section id="Marvelpage" className="h_marvelpage" onWheel={this.scrollfunction}>
                <Life_About img={this.state.img} title1={this.state.title1} title2={this.state.title2} p1={this.state.p1} p2={this.state.p2} alink={this.state.alink} aname={this.state.aname} />
                <div id="Marvelpage_banner" className="marvelpage_banner">
                    <div className="backmask">
                        <div className="line_first"></div>
                        <div className="line_second"></div>
                        <div className="line_third"></div>
                        <div className="line_center"></div>
                    </div>
                    <div className="mask_background">
                        <div className="mask_1 mask_box1"></div>
                        <div className="mask_2 mask_box2"></div>
                        <div className="mask_3 mask_box2"></div>
                        <div className="mask_4 mask_box1"></div>
                        <div className="mask_5 mask_box1"></div>
                        <div className="mask_6 mask_box2"></div>
                        <div className="mask_7 mask_box2"></div>
                        <div className="mask_8 mask_box1"></div>
                    </div>
                    <h2 className="marvel_title_type">
                        <p><img src="/images/Avengers_logo.png" /></p>
                        <p>
                            <span>Marvel</span>
                            <span>系列介紹</span>
                        </p>
                    </h2>
                </div>
                <div id="marvel_section1" className="marvel_section1">
                    <div className="marvel_section1_in">
                        <div className="marvel_section1_text">
                            <h3>
                                <p>英雄集結</p>
                                <p>加入他們的行列</p>
                                <p>跟上話題潮流</p>
                            </h3>
                            <div id="marvel_section1_text1">
                                <p>
                                    <span>宇宙魔方</span>
                                    <span>自從於&nbsp;1942&nbsp;年時</span>
                                    <span>被人類發現後</span>
                                    <span>，棲息於宇宙中的龐大外星勢力以開始盯住地球</span>
                                    <span>，齊塔瑞軍團降臨紐約市破壞。</span>
                                    <span>市民們開始逃竄</span>
                                    <span>，軍隊節節敗退，這時希望何在呢?</span>
                                </p>
                                <p>
                                    <span>這時就得就可將希望寄託在超級英雄身上啦&nbsp;~&nbsp;</span>
                                    <span>鋼鐵人</span>
                                    <span>、雷神索爾</span>
                                    <span>、無敵浩克和死侍?!</span>
                                </p>
                                <p>
                                    <span>現在復仇者聯盟的超能英雄以在</span>
                                    <span>&nbsp;GAIA CAP&nbsp;集結整裝待發</span>
                                    <span>，和外星人們決一死戰!</span>
                                </p>
                                <p>
                                    <span>快來購買他們的周邊</span>
                                    <span>支持他們並加入他們的行列吧!</span>
                                </p>
                            </div>
                        </div>
                        <div className="marvel_section1_pic"></div>
                    </div>
                </div>
                <div id="marvel_section2" className="marvel_section2">
                    <h3 id="marvel_section2_type" className="marvel_section2_type">
                        <div className="marvel_section2_type_in">
                            <p>把英雄帶回家</p>
                            <p>
                                妳還在找不到你喜歡英雄的周邊嗎?
                                GAIA CAP目前正販售MARVEL系列的英雄帽子，鋼鐵人、浩克、索爾、黑豹等...超級英雄的中編目前強力販售中，快來GAIA CAP官網支持你的英雄，將你喜愛的英雄周邊帶回家。
                        </p>
                        </div>
                    </h3>
                    <div id="marvel1" className="marvel_section2_in">
                        <div className="marvel_section2_type1">
                            <div className="marvel_section2_type1_in">
                                <div className="polygan_type_shadow"></div>
                                <div className="polygan_type">
                                    <div className="polygan_type_in">
                                        <h4>
                                            <span>IronMan</span>
                                            <span>鋼鐵人</span>
                                        </h4>
                                        <p>
                                            麻省理工學院畢業的天才發明家兼億萬富豪，
                                            並經營一家重要武器公司，因一次到阿富汗時遭十環幫擄走，
                                            讓他的心臟受重創，僅靠胸口的微型方舟反應爐續命。
                                            逃出後成為了鋼鐵人，其後加入復仇者聯盟。
                                    </p>
                                        <div className="polygan_type_in_click">
                                            <input onClick={this.a_showIntroduction.bind(this, "1")} id="captainamericashowbutton" type="button" value="查看完整簡介" />
                                            <input onClick={this.w_marvel_ggg.bind(this, "98")} type="button" value="查看商品" />
                                        </div>
                                    </div>
                                </div>
                                <img src="/images/ironman.png" alt="" />
                            </div>
                        </div>
                        <div className="marvel_section2_type2">
                            <div className="marvel_section2_type2_in">
                                <div className="polygan_type_shadow"></div>
                                <div className="polygan_type">
                                    <div className="polygan_type_in">
                                        <h4>
                                            <span>Thor</span>
                                            <span>雷神索爾</span>
                                        </h4>
                                        <p>
                                            北歐神話中眾神之王奧丁的長子，因自負而被奧丁貶下凡間學習慈悲，其後發現弟弟洛奇Loki的陰謀後回到阿斯嘉阻止他，之後發現洛奇企圖在他最愛的地球中引起混亂而因此加入復仇者聯盟。
                                </p>
                                        <div className="polygan_type_in_click">
                                            <input onClick={this.a_showIntroduction.bind(this, "2")} id="captainamericashowbutton" type="button" value="查看完整簡介" />
                                            <input onClick={this.w_marvel_ggg.bind(this, "96")} type="button" value="查看商品" />
                                        </div>
                                    </div>
                                </div>
                                <img src="/images/thor.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div id="marvel2" className="marvel_section2_in">
                        <div className="marvel_section2_type1">
                            <div className="marvel_section2_type1_in">
                                <div className="polygan_type_shadow"></div>
                                <div className="polygan_type">
                                    <div className="polygan_type_in forhulk">
                                        <h4>
                                            <span>Hulk</span>
                                            <span>無敵浩克</span>
                                        </h4>
                                        <p>一次實驗意外被照射到伽瑪射線而導致身體突變，從此每當他憤怒時，不能控制的心跳加速就會變身成擁有無窮破壞力但不受意志控制的綠色生物－浩克，他至今都在尋找自己「病症」的解決方案，但有時也會為民眾擔任醫生。
                                </p>
                                        <div className="polygan_type_in_click">
                                            <input onClick={this.a_showIntroduction.bind(this, "3")} id="captainamericashowbutton" type="button" value="查看完整簡介" />
                                            <input onClick={this.w_marvel_ggg.bind(this, "97")} type="button" value="查看商品" />
                                        </div>
                                    </div>
                                </div>
                                <img src="/images/hulk.png" alt="" />
                            </div>
                        </div>
                        <div className="marvel_section2_type2">
                            <div className="marvel_section2_type2_in">
                                <div className="polygan_type_shadow"></div>
                                <div className="polygan_type">
                                    <div className="polygan_type_in">
                                        <h4>
                                            <span>BlackPanther</span>
                                            <span>黑豹</span>
                                        </h4>
                                        <p>
                                            虛構非洲國家瓦干達的國王，在父親死後繼承王位，同時也繼承「黑豹」的稱號。長期靠心形藥草提升體能和作戰能力，目前也在默哀父親之死。
                                    </p>
                                        <div className="polygan_type_in_click">
                                            <input onClick={this.a_showIntroduction.bind(this, "4")} id="captainamericashowbutton" type="button" value="查看完整簡介" />
                                            <input onClick={this.w_marvel_ggg.bind(this, "95")} type="button" value="查看商品" />
                                        </div>
                                    </div>
                                </div>
                                <img src="/images/black Panther.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div id="marvel3" className="marvel_section2_in">
                        <div className="marvel_section2_type1">
                            <div className="marvel_section2_type1_in">
                                <div className="polygan_type_shadow"></div>
                                <div className="polygan_type">
                                    <div className="polygan_type_in fordeadpool">
                                        <h4>
                                            <span>Deadpool</span>
                                            <span>死侍</span>
                                        </h4>
                                        <p>
                                            原本是傭兵，為了治療癌症而在早期接受「Weapon X」的實驗，就算接受酷刑也能夠迅速再生，身體四分五裂了也能恢復原狀，也因此造成腦細胞過度增長，因而變得瘋瘋癲癲的。再生能力與癌細胞互相排斥，導致身體滿是疤痕，自己深感羞愧不想連累女友的幸福人生，所以離開了她。
                                    </p>
                                        <div className="polygan_type_in_click">
                                            <input onClick={this.a_showIntroduction.bind(this, "5")} id="captainamericashowbutton" type="button" value="查看完整簡介" />
                                            <input onClick={this.w_marvel_ggg.bind(this, "94")} type="button" value="查看商品" />
                                        </div>
                                    </div>
                                </div>
                                <img src="/images/deadpool.png" alt="" />
                            </div>
                        </div>
                        <div className="marvel_section2_type2 forcaptain_type">
                            <div className="marvel_section2_type2_in">
                                <div className="polygan_type_shadow"></div>
                                <div className="polygan_type">
                                    <div className="polygan_type_in forcaptain">
                                        <h4>
                                            <span>CaptainAmerica</span>
                                            <span>美國隊長</span>
                                        </h4>
                                        <p>
                                            擁有超越常人的體能，及後成為了「美國隊長」，曾參與二戰，對付德軍（包括紅骷髏）。但最後因拯救美國而墜入格陵蘭而被冰封，七十年後才被人發現解封。其後加入了復仇者聯盟。
                                    </p>
                                        <div className="polygan_type_in_click">
                                            <input onClick={this.a_showIntroduction.bind(this, "6")} id="captainamericashowbutton" type="button" value="查看完整簡介" />
                                            <input onClick={this.w_marvel_ggg.bind(this, "93")} type="button" value="查看商品" />
                                        </div>
                                    </div>
                                </div>
                                <img src="/images/captainamerica.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
        );
    }
    w_marvel_ggg(sid) {
        window.location.href = '/product_page/' + sid;
    }
}

export default Marvelpage;