import React, { Component } from 'react';
import './Navbar_Members.scss';

class Navbar_Members extends Component {


    componentDidMount() {

    }

    w_logout(){
        localStorage.removeItem("sid");
        
        alert('已登出');
        window.location.href = "/";
    }

    render() {

        return (

            <div className="w_nav_memebers">
                <div className="w_nm_button_all">
                    <div className="w_nm_button w_flex">
                        <img src="/images/GAIA_CAP_memberlist_01.svg" alt="" />
                        <p><a href="/members/product_modify">訂單查詢</a></p>
                    </div>
                    <div className="w_nm_button w_flex">
                        <img src="/images/GAIA_CAP_memberlist_02.svg" alt="" />
                        <p><a href="/members/product_collection">收藏清單</a></p>
                    </div>
                    <div className="w_nm_button w_flex">
                        <img src="/images/GAIA_CAP_memberlist_04.svg" alt="" />
                        <p><a href="/members/members_edit">會員資料修改</a></p>
                    </div>
                    <div className="w_nm_button w_flex" onClick={this.w_logout}>
                        <img src="/images/GAIA_CAP_memberlist_03.svg" alt="" />
                        <p><a>登出</a></p>
                    </div>
                </div>
            </div>

        );
    }




}

export default Navbar_Members;