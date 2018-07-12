import React, { Component } from 'react';
import $ from 'jquery';

class Product_Modify extends Component {
    constructor(props) {
        super(props);
        this.state = {
            domainName: '',
            jsonData: []
        }
        this.domainName = window.location.href;
        const loc = this.domainName.indexOf(':', 6);
        this.domainName = this.domainName.slice(0, loc);
        this.state.domainName = this.domainName;
        
        // this.w_product_order = this.w_product_order.bind(this);
        this.w_p_m_order = this.w_p_m_order.bind(this);
    }

    componentDidMount() {
        this.w_product_order();
    }

    w_product_order() {
        var sid = localStorage.getItem("sid");

        $.ajax({
            type: "GET",
            url: this.state.domainName+':3087/orders/' + sid,
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

    w_p_m_order(sid) {

        window.location.href = '/order_deatils/' + sid;

    }

    render() {
        let jsonData = this.state.jsonData;
        return (
            <div className="a_product_modify_content">
                <h2 className="a_h2">訂單查詢</h2>
                <div className="a_modify_table">
                    <div className="a_items">
                        <ul>
                            <li><span>訂單日期</span></li>
                            <li><span>訂單編號</span></li>
                            <li><span>付款方式</span></li>
                            <li><span>收件人</span></li>
                            <li><span>出貨狀態</span></li>
                            <li><span>查看訂單</span></li>
                        </ul>
                    </div>
                    <form className="a_orders_project">
                        {
                            jsonData.map((jd) => {
                                // 傳回 jsx
                                if (jd.order_type == 1) {
                                    jd.order_type = '超商取貨';
                                }
                                else if (jd.order_type == 2) {
                                    jd.order_type = '貨到付款';
                                }

                                return (
                                    <div key={jd.sid} className="a_order">
                                        <ul>
                                            <li><p>{jd.create_time}</p></li>
                                            <li><p>{jd.sid}</p></li>
                                            <li><p>{jd.order_type}</p></li>
                                            <li><p>{jd.user_name}</p></li>
                                            <li><p>{jd.order_method}</p></li>
                                            <li onClick={this.w_p_m_order.bind(this, jd.sid)} className="a_span_border"><span><img src="/images/GAIA_CAP_memberlist_01.svg" /></span></li>
                                        </ul>
                                    </div>

                                );
                            })
                        }
                    </form>
                </div>
            </div>
        );
    }
}

export default Product_Modify;