import React, { Component } from 'react';
import $ from 'jquery';
import './Player_Introduction.scss';

class Hiphop extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {

    }
    a_hideIntrouduction() {
        $(".a_playerIntroduction").css("transform", "translateX(-100%)")
    }
    render() {
        
        return (
            <div className="a_playerIntroduction" style={{ transform: "translateX(-100%)" }}>
                <div className="a_playerName">
                    <div className="a_playersPic">
                        <img src="/images/Hip-Hop03.jpg" />
                    </div>
                    <div className="a_bg_gradient"></div>
                    <div className="a_playersMoreIntroduction">
                        <div className="a_firstpart">

                            <h3>嘻哈舞</h3>
                            <span>Hip Hop Dance</span>

                            <p>
                            嘻哈舞hiphop是由最代表性的動作UP Down，C-walk，Shake組合而成，極富變化。並通過頭，頸，肩，上肢，軀乾等關節的屈伸，轉動，繞環，擺振，波浪形扭動等連貫組合而成的，各個動作都有其特定的健身效果，既注意了上肢與下肢，腹部與背部，頭部與軀幹動作的協調，又注意了組成各環節各部分獨立運動。因此街舞不僅具有一般有氧運動改善心肺功能，減少脂肪，增強肌肉彈性，增強韌帶柔韌性的功效，還具有協調人體各部位肌肉群，塑造優美體態，提高人體協調能力，陶冶美感的功能。
                            </p>

                        </div>
                        <div className="a_secondpart">

                            <div className="a_arcoss_icon" onClick={this.a_hideIntrouduction}>
                                <span className="a_crossline1"></span>
                                <span className="a_crossline2"></span>
                            </div>

                            <p>跳街舞使人注意力集中，興趣濃厚，動作優美，隨意。同時，跳嘻哈舞嘻哈還有瘦身功效，因為嘻哈舞是一種中低強度的有氧運動，在一個小時的運動中，消耗全身脂肪的作用是相當強的。此外，嘻哈舞嘻哈是一種小肌肉運動，經常練習能增加你全身的協調性，讓你的身材比例更趨標準。</p>

                            <div className="a_shoppingbutton">
                                <a href="/product_list/series/4">看生活商品<i className="fas fa-chevron-circle-right"></i></a>
                            </div>

                        </div>


                    </div>
                </div>
            </div>
        );
    }
}
export default Hiphop;