import React, { Component } from 'react';
import $ from 'jquery';

class Member_Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phonenumber: '',
            oldpassword: '',
            newpassword: '',
            newpasswordagain: '',
            domainName:'',
        }
        this.domainName = window.location.href;
        const loc = this.domainName.indexOf(':', 6);
        this.domainName = this.domainName.slice(0, loc);
        this.state.domainName = this.domainName; 
        
        this.handleChange = this.handleChange.bind(this);
        this.w_user_update = this.w_user_update.bind(this);
    }
    handleChange(event) {
        // console.log(event.target.value)
        const state = this.state;
        state[event.target.id] = event.target.value;
        this.setState(state);
    }

    componentDidMount() {

        this.w_user_data();
    }

    w_user_data() {
        const sid = localStorage.getItem("sid");

        if (sid === null) {
            console.log("請登入");
            return false;
        }

        $.ajax({
            type: "GET",
            url: this.state.domainName+':3087/users/' + sid,
            // success: success,
            dataType: "json",
            success: (data) => {
                // console.log(data[0]);
                this.setState({
                    name: data[0].u_id,
                    email: data[0].email,
                    phonenumber: data[0].mobile

                });

            },
            error: (xhr, status, err) => {

            }
        });
    }

    w_user_update() {

        const sid = localStorage.getItem("sid");
        const email = this.state.email;
        $.ajax({
            type: "PUT",
            url: this.state.domainName+':3087/users/' + sid,
            data: {
                'sid': sid,
                'u_id': this.state.name,
                'email': this.state.email,
                'mobile': this.state.phonenumber,
                'u_pwd': this.state.oldpassword,
                'u_pwd_new': this.state.newpassword

            },

            dataType: "json"
        }).then(function (data) {

            alert(data.message);
            window.location.reload(); 

        }).catch(function (error) {
            alert("密碼不正確");

        });
    }

    render() {
        return (
            <div className="a_members_edit_content">
                <h2 className="a_h2">會員資料修改</h2>
                <form>
                    <div className="a_edit_name">
                        <input type="text" value={this.state.name} onChange={this.handleChange} className="form-control" id="name" placeholder="請輸入姓名" />
                    </div>
                    <div className="a_edit_email">
                        <input type="email" value={this.state.email} onChange={this.handleChange} className="form-control" id="email" placeholder="請輸入電子郵件" />
                    </div>
                    <div className="a_edit_phonemumber">
                        <input type="text" value={this.state.phonenumber} onChange={this.handleChange} className="form-control" id="phonenumber" placeholder="請輸入手機" />
                    </div>
                    <div className="a_edit_oldpassword">
                        <input type="password" value={this.state.oldpassword} onChange={this.handleChange} className="form-control" id="oldpassword" placeholder="請輸入舊密碼" />
                    </div>
                    <div className="a_edit_newpassword">
                        <input type="password" value={this.state.newpassword} onChange={this.handleChange} className="form-control" id="newpassword" placeholder="請輸入新密碼" />
                    </div>
                    <div className="a_edit_newpasswordagain">
                        <input type="password" value={this.state.newpasswordagain} onChange={this.handleChange} className="form-control" id="newpasswordagain" placeholder="請再次輸入新密碼" />
                    </div>
                    <div className="a_two_button">
                        <div className="a_first_button"><a>取消</a></div>
                        <div onClick={this.w_user_update} className="a_second_button"><a>儲存</a></div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Member_Edit;