import React, { Component } from 'react';
import $ from 'jquery';


class Product_Like extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jsonData: [],
            user_sid: localStorage.getItem("sid"),
            domainName:'',
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
        this.w_pro_like();
    }
    w_pro_like() {
        const { proid } = this.props;
        $.ajax({
            type: "GET",
            url: this.state.domainName+':3087/coms/pro/' + proid,
            // success: success,
            dataType: "json",
            success: (data) => {

                this.setState({
                    jsonData: data
                });

            },
            error: (xhr, status, err) => {
                console.error(this.props.url, status, err.toString());
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

                    w_cart_array[sid] = ({ "price": data[0].price, "color": data[0].color, "材質": data[0].material, "數量": 1 });
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
            alert("已經在我的背包");
        }
    }

    w_del_like(pro_sid) {
        console.log(pro_sid);
        console.log(this.state.user_sid);

        $.ajax({
            type: "DELETE",
            url: this.state.domainName+':3087/users/like/' + this.state.user_sid,
            // success: success,
            data: {
                'proid': pro_sid
            },
            dataType: "json",
            success: (data) => {

                console.log(data);
                window.location.reload();
            },
            error: (xhr, status, err) => {
                console.error(this.props.url, status, err.toString());
            }
        });
    }

    render() {
        let jsonData = this.state.jsonData;
        return (

            <div className="a_each_collection">
                {
                    jsonData.map((jd) => {
                        // 傳回 jsx

                        return (
                            <div key={jd.sid} className="a_each_collection">
                                <div className="a_information">
                                    <span><img src={"/images/" + jd.sid + "/0.png"} /></span>
                                    <span>
                                        <h3>{jd.name}</h3>

                                        <p>編號：{jd.sid}</p>
                                        <p>顏色：{jd.color}</p>
                                        <p>材質：{jd.material}</p>
                                    </span>
                                </div>
                                <div className="a_price">
                                    <p>${jd.price}</p>
                                </div>
                                <div className="a_option">
                                    <span onClick={this.w_join_like.bind(this, jd.sid)}>
                                        <img src="/images/GAIA_CAP_shopping_cart-02.svg" />
                                        <p>放入背包</p>
                                    </span>
                                    <span onClick={this.w_del_like.bind(this, jd.sid)}>
                                        <img src="/images/GAIA_CAP_shopping_cart-01.svg" />
                                        <p>取消收藏</p>
                                    </span>
                                </div>
                            </div>

                        );
                    })
                }
            </div>
        );
    }
}

export default Product_Like;