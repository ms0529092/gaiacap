import React, { Component } from 'react';
import $ from 'jquery';
import './Index_Belly.scss';

class Index_Belly extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        const imgArr = ["/images/marvel.svg", "/images/thirdicon_thor.svg","/images/jayz.jpeg"];
        const arrLength = imgArr.length;
        const lmgLast = arrLength-1;
        let nowPic = 1;

        $(".a_btn").click(function(){
              const dir = $(this).data("dir");
          if(dir=="next"){
             const out = imgArr.splice(0, 1);
             imgArr.push(out);
             nowPic = (nowPic+1)%arrLength;
         }else{
             const out = imgArr.splice(lmgLast, 1);
             imgArr.unshift(out);
             nowPic = (nowPic-1)%arrLength;
         }

        $(".a_icon01 img").attr("src", imgArr[0]);
        $(".a_icon03 img").attr("src", imgArr[2]);

        $(".a_icon02 img").removeClass();

        $(".a_icon02 img").eq(nowPic).addClass("active");

        });

        
    }
    render(){
        return(
           <div className="a_content a_flex">
                <div className="a_left_area">
                    <h2 className="a_left_area_h2">引領潮流</h2>
                    <h3 className="a_left_area_h3">戴出你的風格<br /><span className="a_left_area_span">MY CAP · MY STYLE</span></h3>
                    <p className="a_left_area_p">一個獨特的平台。總是羨慕別人的穿搭嗎？找不到符合自己個性的帽子嗎？不知如何在眾多商品中挑選滿意的帽款嗎？在GAIA，這些都將不再是困擾您的問題，我們將透過簡單的方式幫助您解決，讓您的頂上功夫更為了得。</p>
                    <div id="a_button">
                        <a href="/about">
                            <span>捲入潮流
                                <i className="fas fa-chevron-circle-right"></i>
                            </span>
                        </a>
                    </div>
                </div>           
                <div className="a_right_area">
                    <div className="a_icon01 a_btn" data-dir="prev">
                    <img className="a_cover_fit" src="/images/marvel.svg" /></div>

                    <div className="a_icon02">
                    <img src="/images/ironman03.png" alt="" />
                    <img className="active" src="/images/Noah-Syndergaard_01.png" />
                    <img src="/images/jayz01.png" alt="" />
                    </div>

                    <div className="a_icon03 a_btn" data-dir="next">
                    <img className="a_cover_fit" src="/images/jayz.jpeg" /></div>
                </div>
           </div> 
        );
    }
}
export default Index_Belly;