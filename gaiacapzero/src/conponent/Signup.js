import React, { Component } from 'react';
import './Signup.scss';
import $ from 'jquery';
import LeftDoorBg from '../matty-adame-326230-unsplash.jpg';
import GAIA_CAP_LOGO from '../GAIA_CAP_LOGO.svg';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            w_email: '',
            w_pwd: '',
            w_pwd_again: '',
            w_name: '',
            w_mobile: '',
            domainName: '',
        }
        
        this.domainName = window.location.href;
        const loc = this.domainName.indexOf(':', 6);
        this.domainName = this.domainName.slice(0, loc);
        this.state.domainName = this.domainName;
    

        this.w_handleChange = this.w_handleChange.bind(this);
        this.w_signup = this.w_signup.bind(this);

    }


    render() {

        return (

            <div className="w_signup">

                <div className="w_signup_door w_signup_left_door w_flex" style={{ background: "url(" + LeftDoorBg + ") no-repeat center center / cover" }}>
                    <div className="w_signup_mask"></div> 
                    <img src={GAIA_CAP_LOGO} alt="GAIA_CAP_LOGO" />
                </div>
                <div className="w_signup_door w_signup_right_door">
                    <div className="w_signup_door_close_button">
                        <i className="fas fa-times" onClick={this.w_signup_door_open}></i>

                    </div>

                    <div className="w_signup_all_title">
                        <p>GAIA CAP STORE 註冊會員</p>
                    </div>

                    <div className="w_signup_all">

                        <div className="w_signup_all_email">
                            <input id="w_email" value={this.state.w_email} onChange={this.w_handleChange} type="email" placeholder="請輸入Email" />
                        </div>
                        <div className="w_signup_all_password">
                            <input id="w_pwd" value={this.state.w_pwd} onChange={this.w_handleChange} type="password" placeholder="請輸入密碼" />
                        </div>
                        <div className="w_signup_all_password_again">
                            <input id="w_pwd_again" value={this.state.w_pwd_again} onChange={this.w_handleChange} type="password" placeholder="請再次輸入密碼" />
                        </div>
                        <div className="w_signup_all_name">
                            <input id="w_name" value={this.state.w_name} onChange={this.w_handleChange} type="text" placeholder="請輸入暱稱" />
                        </div>
                        <div className="w_signup_all_mobile">
                            <input id="w_mobile" value={this.state.w_mobile} onChange={this.w_handleChange} type="mobile" placeholder="請輸入手機" />
                        </div>
                        <div className="w_signup_all_agree w_flex">
                            <input id="w_sign_chk" type="checkbox" />
                            <label htmlFor="w_sign_chk">我同意GAIA CAP的服務條款</label>
                        </div>
                        <div className="w_signup_all_button w_flex">

                            <button onClick={this.w_signup}>註冊</button>
                        </div>
                    </div>
                    <div className="w_signup_success">
                        <div className="w_signup_msg">
                            <p>失敗</p>
                        </div>
                        <div className="w_signup_5s">
                            <p>成功，請登入</p>
                            <p>或請點下方回首頁</p>
                        </div>
                        <div className="w_signup_all_button w_flex">

                            <button onClick={this.w_go_home}>回首頁</button>
                        </div>
                    </div>

                </div>

            </div>
        );
    }


    w_handleChange(event) {
        const state = this.state;
        state[event.target.id] = event.target.value;
        this.setState(state);
    }

    w_signup_door_open() {
        $('.w_signup_left_door').css('transform', 'translateX(-100%)');
        $('.w_signup_right_door').css('transform', 'translateX(100%)');
        $('.w_signup_door').removeClass("w_signup_door_appear");

    }

    w_signup() {


        $.ajax({
            type: "PUT",
            url: 'http://localhost:3087/users/session',
            data: {
                'u_id': this.state.w_name,
                'email': this.state.w_email,
                'mobile': this.state.w_mobile,
                'u_pwd': this.state.w_pwd

            },
            // success: success,
            dataType: "json"
        }).then(function (data) {

            // alert(data.message);
            $(".w_signup_msg p").text(data.message);
            $(".w_signup_all").css("display", "none");
            $(".w_signup_success").css("visibility", "visible");
            

        }).catch(function (error) {


        });
    }

    w_go_home() {
        window.location.href = "/";
    }
}

export default Signup;
