import React, { Component } from 'react';
import $ from 'jquery';
import {BrowserRouter, Route, Link, NavLink} from 'react-router-dom';
import './Members.scss';
import Members_Edit from './Members_Edit';
import Product_Modify from './Product_Modify';
import Product_Collection from './Product_Collection';


class Members extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){

    }
    render(){
        return(
            <BrowserRouter>
            <div className="a_biggest_members_wrapper">
                <div className="a_members_wrapper">
                    <ul className="a_nav_link">
                        <li><img src="/images/GAIA_CAP_memberlist_01.svg" /><NavLink to="/members/product_modify">訂單查詢</NavLink></li>
                        <li><img src="/images/GAIA_CAP_memberlist_02.svg" /><NavLink to="/members/product_collection">收藏清單</NavLink></li>
                        <li><img src="/images/GAIA_CAP_memberlist_04.svg" /><NavLink to="/members/members_edit">會員修改</NavLink></li>                        
                        <li><img src="/images/GAIA_CAP_memberlist_03.svg" /><NavLink to="/members/members_logout" onClick={this.a_logout}>登出</NavLink></li> 
                    </ul> 
                    <Route exact path="/members/product_modify" component={Product_Modify} />
                    <Route exact path="/members/product_collection" component={Product_Collection} />  
                    <Route exact path="/members/members_edit" component={Members_Edit} />                          
                    {/* <Route exact path="/members/members_logout" component={Members_Logout} />             */}
                </div>
            </div>
           </BrowserRouter>
        );
    }
    a_logout(){
        localStorage.removeItem("sid");
        
        alert('已登出');
        window.location.href="/";
    }
    
}
export default Members;