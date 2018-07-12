import React, { Component } from 'react';
import './Product_Page.scss';
import $ from 'jquery';
import Footer from '../layout/Footer';

class Product_Page extends Component {
    constructor(props) {
        super(props);

        this.state = {

            prosid: props.match.params.sid,
            procname: '',
            proprice: '',
            proorder: '',
            procolor: '',
            proabout: '',
            domainName:'',
            urlcname:'',

        }
        this.domainName = window.location.href;
        const loc = this.domainName.indexOf(':', 6);
        this.domainName = this.domainName.slice(0, loc);
        this.state.domainName = this.domainName; 

    }

    componentDidMount() {

        if (localStorage.getItem('w_cart_array') == null) {
            localStorage.setItem("w_cart_array", JSON.stringify({}));
        }
        // console.log(this.state.prosid);
        $.ajax({
            type: "GET",
            url: this.state.domainName+':3087/coms/pro/' + this.state.prosid,
            // success: success,
            dataType: "json",
            success: (data) => {
                // console.log(data[0]);
                switch (data[0].color) {
                    case '1':
                        this.setState({
                            urlcname: "紅色"
                        });
                        break;
                    case '2':
                        this.setState({
                            urlcname: "橙色"
                        });
                        break;
                    case '3':
                        this.setState({
                            urlcname: "黃色"
                        });
                        break;
                    case '4':
                        this.setState({
                            urlcname: "綠色"
                        });
                        break;
                    case '5':
                        this.setState({
                            urlcname: "藍色"
                        });
                        break;
                    case '6':
                        this.setState({
                            urlcname: "深藍色"
                        });
                        break;
                    case '7':
                        this.setState({
                            urlcname: "紫色"
                        });
                        break;
                    case '8':
                        this.setState({
                            urlcname: "棕色"
                        });
                        break;
                    case '9':
                        this.setState({
                            urlcname: "黑色"
                        });
                        break;
                    case '10':
                        this.setState({
                            urlcname: "白色"
                        });
                        break;
                    case '11':
                        this.setState({
                            urlcname: "金色"
                        });
                        break;
                    case '12':
                        this.setState({
                            urlcname: "灰色"
                        });
                        break;
                    default:
                        break;
                }
                this.setState({
                    procname: data[0].name,
                    proprice: data[0].price,
                    proorder: data[0].caporder,
                    procolor: data[0].color,
                    proabout: data[0].introduction,
                    promaterial: data[0].material
                });

            },
            error: (xhr, status, err) => {

            }
        });
    }

    w_join_like(sid) {//加入購物車

        const w_cart_array = JSON.parse(localStorage.getItem("w_cart_array"));
        if (w_cart_array[sid] === undefined) {

            $.ajax({
                type: "GET",
                url: this.state.domainName+':3087/coms/pro/' + sid,
                // success: success,
                dataType: "json",
                success: (data) => {

                    w_cart_array[sid] = ({"cname":data[0].name, "price": data[0].price, "color": data[0].color, "材質": data[0].material, "數量": 1 });
                    localStorage.setItem("w_cart_array", JSON.stringify(w_cart_array));

                    var jsonarray = JSON.parse(localStorage.getItem("w_cart_array"));

                    console.log(Object.keys(jsonarray).length);

                    var order = Object.keys(jsonarray).length;

                    $(".w_shoppingbag_num").text(order);

                    // alert("成功放入我的背包");
                    
                },
                error: (xhr, status, err) => {
                    console.error(this.props.url, status, err.toString());
                }
            });

            // w_cart_array[sid] = ({ "price": data[0].price, "color": data[0].color, "材質": data[0].material, "數量": 1 });
            // localStorage.setItem("w_cart_array", JSON.stringify(w_cart_array));
        }
        else {
            alert("已經在我的背包");
        }
    }

    w_add_like(pro_sid) {//加入收藏
        var vid = localStorage.getItem("sid");

        if (vid === null) {
            alert("尚未登入，請登入");
            $('.w_login_left_door').css('transform', 'translateX(0%)');
            $('.w_login_right_door').css('transform', 'translateX(0%)');
            $('.w_door').addClass("w_door_appear");
            return false;
        }

        $.ajax({
            type: "PUT",
            url: this.state.domainName+':3087/users/like/' + vid,
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

        return (
            <div className="a_wrapper">
                <div className="a_main_content a_flex">
                    <div className="a_left_content">
                        <ul>
                            <li><img src={"../images/" + this.state.prosid + "/0.png"} alt="0png" /></li>
                            <li><img src={"../images/" + this.state.prosid + "/1.png"} alt="1png" /></li>
                            <li><img src={"../images/" + this.state.prosid + "/2.png"} alt="2png" /></li>
                            <li><img src={"../images/" + this.state.prosid + "/3.png"} alt="3png" /></li>
                            <li><img src={"../images/" + this.state.prosid + "/4.png"} alt="4png" /></li>
                            <li><img src={"../images/" + this.state.prosid + "/5.png"} alt="5png" /></li>
                        </ul>
                    </div>
                    <div className="a_right_content">
                        <div className="a_product_detail">

                            <h3>{this.state.procname}</h3>
                            <p> {this.state.proabout}</p>
                            <div className="a_more_details a_flex">
                                <ul>
                                    <li>材質：{this.state.promaterial}</li>
                                    <li>商品編號：{this.state.prosid}</li>
                                    <li>顏色：{this.state.urlcname}</li>
                                </ul>
                                <ul>
                                    <li>剩餘：<span className="a_inventery">{this.state.proorder}</span></li>
                                    <li>NTD：{this.state.proprice}</li>
                                </ul>
                                <form action="form_action.asp" method="get"><input type="text" placeholder="數量" min="1" className="a_formtype" /></form>
                            </div>
                            <div className="a_product_detail_button a_flex">
                                <div className="a_add"><a onClick={this.w_join_like.bind(this, this.state.prosid)}><span>放入背包</span></a></div>
                                <div className="a_favorite"><a onClick={this.w_add_like.bind(this, this.state.prosid)}><span><img src="/images/like_icon.svg" alt="收藏" /></span></a></div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Product_Page;