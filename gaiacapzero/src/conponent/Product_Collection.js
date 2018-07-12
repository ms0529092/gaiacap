import React, { Component } from 'react';
import $ from 'jquery';
import Product_Like from './Product_Like';

class Product_Collection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sid: localStorage.getItem("sid"),
            jsonData: [],
            domainName: '',
        }
        this.domainName = window.location.href;
        const loc = this.domainName.indexOf(':', 6);
        this.domainName = this.domainName.slice(0, loc);
        this.state.domainName = this.domainName;
       

    }

    componentDidMount() {
        this.w_product_collection_pro();
    }

    w_product_collection_pro() {
        const sid = this.state.sid;
        // console.log(sid);
        $.ajax({
            type: "GET",
            url: this.state.domainName+':3087/users/like/' + sid,
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

    render() {
        let jsonData = this.state.jsonData;
        return (
            <div className="a_product_collection_content">
                <h2 className="a_h2">收藏清單</h2>
                <div className="a_collection_table">
                    <div className="a_collection_items">
                        <ul>
                            <li className="a_flex_information"><span>產品資訊</span></li>
                            <li className="a_flex_price"><span>單價</span></li>
                            <li className="a_flex_option"><span>選項</span></li>
                        </ul>
                    </div>
                    <form className="a_collection_project">

                        {
                            jsonData.map((jd) => {
                                // 傳回 jsx

                                return (
                                    <div key={jd.com}>

                                        <Product_Like proid={jd.com} />
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

export default Product_Collection;