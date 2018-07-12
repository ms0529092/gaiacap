import React, { Component } from 'react';
import './Login.scss';
import $ from 'jquery';
import LeftDoorBg from '../login_left.jpg';
import GAIA_CAP_LOGO from '../GAIA_CAP_LOGO.svg';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            w_email_s: '',
            w_pwd_s: '',
            sid:localStorage.getItem("sid"),
            domainName:'',
        }

        this.domainName = window.location.href;
        const loc = this.domainName.indexOf(':', 6);
        this.domainName = this.domainName.slice(0, loc);
        this.state.domainName = this.domainName; 

        this.w_door_open = this.w_door_open.bind(this);
        this.w_login = this.w_login.bind(this);
        this.w_handleChange = this.w_handleChange.bind(this);

        

    }
    componentDidMount() {
        const sid = this.state.sid;
        // console.log(sid);
        if(sid === null){
            // console.log("請大大登入login");
        }
        else{
            // console.log("有登入了啦login");
        }
    }

    render() {

        return (

            <div className="w_login">

                <div className="w_door w_login_left_door w_flex" style={{ background: "url("+LeftDoorBg+") no-repeat center center / cover" }}>
                    
                    <div className="w_login_mask"></div> 
                    <img src={GAIA_CAP_LOGO} alt="GAIA_CAP_LOGO" />
                </div>
                <div className="w_door w_login_right_door">
                    <div className="w_door_close_button">
                        <i className="fas fa-times" onClick={this.w_door_open} ></i>

                    </div>
                    <div className="w_login_all">
                        <div className="w_login_all_title">
                            <p>GAIA CAP STORE 歡迎登入</p>
                        </div>
                        <div className="w_login_all_email">
                            <input id="w_email_s" value={this.state.w_email_s} onChange={this.w_handleChange} type="email" placeholder="請輸入Email" />
                        </div>
                        <div className="w_login_all_password">
                            <input id="w_pwd_s" value={this.state.w_pwd_s} onChange={this.w_handleChange} type="password" placeholder="請輸入密碼" />
                        </div>
                        <div className="w_login_all_foget">
                           
                        </div>
                        <div className="w_login_all_button w_flex">
                            <button onClick={this.w_login}>登入</button>
                            <button onClick={this.w_singnup_door_close}>註冊</button>
                        </div>
                    </div>

                </div>

            </div>
        );
    }

    w_door_open() {
        $('.w_login_left_door').css('transform', 'translateX(-100%)');
        $('.w_login_right_door').css('transform', 'translateX(100%)');
        $('.w_door').removeClass("w_door_appear");
    
    }

    w_handleChange(event) {
        const state = this.state;
        state[event.target.id] = event.target.value;
        this.setState(state);
    }


    w_login(event) {

        const w_email_s = this.state.w_email_s;
        const w_pwd_s = this.state.w_pwd_s;
        // const sid = this.state.sid;
        // console.log("email=" + email + "__" + pwd);

        $.ajax({
            type: "POST",
            url: this.state.domainName+':3087/users/session',
            data: {
                "email": w_email_s,
                "pwd": w_pwd_s
            },
            // success: success,
            dataType: "json"
        }).then(function (data) {
            
            //丟session
            localStorage.setItem("sid",data[0].sid);

            alert("已登入");

            window.location.reload(); 

        }).catch(function (error) {
            
            alert("帳號或密碼輸入錯誤!"+error);
        });
    }

    
    w_singnup_door_close() {
        $('.w_signup_left_door').css('transform', 'translateX(0%)');
        $('.w_signup_right_door').css('transform', 'translateX(0%)');
        $('.w_signup_door').addClass("w_signup_door_appear");
       
    }
    

}

export default Login;
