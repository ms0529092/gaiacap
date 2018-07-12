import React from "react";
import Slider from "react-slick";
import Life from './Life';
import Mask from '../layout/Mask';
import $ from 'jquery';
import SportStar from './Sportstar';
import Index_Belly from './Index_Belly';
import Marvel from '../conponent/Marvel';
import './Home.scss';
import './Home_Slick.scss';

class Home_Slick extends React.Component {
     constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      timer: ''
    }
    this.w_mouse_wheel = this.w_mouse_wheel.bind(this);
    this.w_mouse_wheel_first = this.w_mouse_wheel_first.bind(this);
  }
    w_mouse_wheel_first() {
        if ('onmousewheel' in window) {
            window.onmousewheel = this.w_mouse_wheel;
        } else if ('onmousewheel' in document) {
            document.onmousewheel = this.w_mouse_wheel;
        } else if ('addEventListener' in window) {
            window.addEventListener("mousewheel", this.w_mouse_wheel, false);
            window.addEventListener("DOMMouseScroll", this.w_mouse_wheel, false);
        }
       
    }



    w_mouse_wheel(e) {

        window.clearTimeout(this.state.timer);

        this.state.timer = window.setTimeout(function () {

            e = e || window.event;
            // console.log(e.wheelDelta + "_" + e.detail);
            // console.log(['scrolled ', ((e.wheelDelta <= 0 || e.detail > 0) ? 'VVVV' : '^^^^')].join(''));

            const wsa_left = parseInt($(".slick-track").css('left'));
            const window_width = parseInt($(window).width());
            // console.log(wsa_left + " " + window_width);
            if (e.wheelDelta >= 0) {
                const end_left = wsa_left + window_width;

                // $(".slick-track").attr("style", "left:" + end_left + "px");
            }
            else {
                const end_left = wsa_left - window_width;
                // $(".slick-track").attr("style", "left:" + end_left + "px");
            }
            

        }, 500)
    }
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div className="w_slick_all" style={{ left: "0" }} onWheel={this.w_mouse_wheel_first}>
                <Slider {...settings}>
                    <div className="w_slider_little w_life_best">

                        <Index_Belly />
                    </div>
                    <div className="w_slider_little w_life_best">
                        <Mask color="blue" url="sportstarInside" />
                        <SportStar />
                    </div>
                    <div className="w_slider_little w_life_best">
                        <Mask color="black" url="marvelpage" />
                        <Marvel />
                    </div>
                    <div className="w_slider_little w_life_best">
                        <Mask color="#ff9035" url="lifeInside" />

                        <Life />
                    </div>

                </Slider>
            </div>
        );
    }
}

export default Home_Slick;