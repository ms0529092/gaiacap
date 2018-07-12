import React, { Component } from 'react';
import './Product_Out.scss';
import $ from 'jquery';



class Product_Out extends Component {

    constructor(props) {
        super(props);

        this.state = {
            jsonData: [],
            procolor: props.match.params.color,
            proseries: props.match.params.series,
            domainName: '',
        }
        this.w_p_out = this.w_p_out.bind(this);
        this.domainName = window.location.href;
        const loc = this.domainName.indexOf(':', 6);
        this.domainName = this.domainName.slice(0, loc);
        this.state.domainName = this.domainName;
       
    }

    componentDidMount() {
        

        this.w_p_out();

        if (localStorage.getItem('w_cart_array') == null) {
            localStorage.setItem("w_cart_array", JSON.stringify({}));
        }

    }

    w_p_out() {

        let procolor = this.state.procolor;
        let proseries = this.state.proseries;
        let urlend = '';

        if (procolor === undefined && proseries === undefined) {
            urlend += '/all';
        }
        else if (procolor !== undefined) {
            urlend += '/color/' + procolor;
        }
        else if (proseries !== undefined) {
            urlend += '/series/' + proseries;
        }

        $.ajax({
            type: "GET",
            url: this.state.domainName+':3087/coms/' + urlend,
            // success: success,
            dataType: "json",
            success: (data) => {
                // console.log(data);

                this.setState({
                    jsonData: data
                });

            },
            error: (xhr, status, err) => {
                // console.error(this.props.url, status, err.toString());
            }
        });
    }

    w_fun_addcart(sid) {
        // console.log(sid);
        const w_cart_array = JSON.parse(localStorage.getItem("w_cart_array"));
        if (w_cart_array[sid] === undefined) {

            $.ajax({
                type: "GET",
                url: this.state.domainName+':3087/coms/pro/' + sid,
                // success: success,
                dataType: "json",
                success: (data) => {
                    //  console.log(data[0]);
                    w_cart_array[sid] = ({ "cname": data[0].name, "price": data[0].price, "color": data[0].color, "材質": data[0].material, "數量": 1 });
                    localStorage.setItem("w_cart_array", JSON.stringify(w_cart_array));
                    var jsonarray = JSON.parse(localStorage.getItem("w_cart_array"));

                    console.log(Object.keys(jsonarray).length);

                    var order = Object.keys(jsonarray).length;

                    $(".w_shoppingbag_num").text(order);
                },
                error: (xhr, status, err) => {
                    console.error(this.props.url, status, err.toString());
                }
            });

            // w_cart_array[sid] = ({ "price": data[0].price, "color": data[0].color, "材質": data[0].material, "數量": 1 });
            // localStorage.setItem("w_cart_array", JSON.stringify(w_cart_array));
        }
        else {
            // console.log("已經有");
            alert("已經在我的背包");
        }
    }

    w_fun_delcart(sid) {

        const w_cart_array = JSON.parse(localStorage.getItem("w_cart_array"));
        delete w_cart_array[sid];
        localStorage.setItem("w_cart_array", JSON.stringify(w_cart_array));

    }

    w_add_like(pro_sid) {//加入收藏
        var user_sid = localStorage.getItem("sid");

        if (user_sid === null) {
            alert("尚未登入，請登入");
            $('.w_login_left_door').css('transform', 'translateX(0%)');
            $('.w_login_right_door').css('transform', 'translateX(0%)');
            $('.w_door').addClass("w_door_appear");
            return false;
        }

        $.ajax({
            type: "PUT",
            url: this.state.domainName+':3087/users/like/' + localStorage.getItem("sid"),
            // success: success,
            data: {
                "proid": pro_sid
            },
            dataType: "json",
            success: (data) => {
                alert(data.message);
            },
            error: (xhr, status, err) => {
                console.error(this.props.url, status, err.toString());
            }
        });
    }



    render() {
        let jsonData = this.state.jsonData;
        return (
            <div className="a_flex w_flex_wrap_fk">

                {
                    jsonData.map((jd) => {
                        // 傳回 jsx

                        return (

                            <div key={jd.sid} className="a_each_product">
                                <a href={'/product_page/' + jd.sid}><img src={'../../images/' + jd.sid + '/0.png'} alt="" /></a>
                                {/* <NavLink to={'/product_page/'+jd.sid}>NavLink</NavLink> */}
                                <div className="a_product_function a_flex">
                                    <div onClick={this.w_fun_addcart.bind(this, jd.sid)} className="a_shoppingbag">
                                        <a>
                                            <img src="/images/shoppingbag_GAIA_CAP.svg" alt="" />
                                        </a>
                                    </div>
                                    <div onClick={this.w_add_like.bind(this, jd.sid)} className="a_collection">
                                        <a>
                                            <img src="/images/like_icon.svg" alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="a_color_type a_flex">
                                    <div className={'a_color_circle a_' + jd.color}></div>
                                </div>

                                <h4 className="a_h4">{jd.name}</h4>

                            </div>
                        );
                    })
                }

            </div>
        );
    }

}
export default Product_Out;