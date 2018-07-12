import React, { Component } from 'react';
import './Product_Bread.scss';

class Product_Bread extends Component {
    constructor(props) {

        super(props);
        this.state = {

            procolor: props.match.params.color,
            proseries: props.match.params.series,
            urlend: '',
            urlcname: ''
        }

        this.w_bread_change = this.w_bread_change.bind(this);

    }
    componentDidMount() {
        this.w_bread_change();
    }

    w_bread_go(url) {
        window.location.href = url;
    }

    w_bread_change() {
        let procolor = this.state.procolor;
        let proseries = this.state.proseries;

        if (procolor !== undefined) {
            this.setState({
                urlend: "color/" + procolor,
            });
            switch (procolor) {
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
        }
        else if (proseries !== undefined) {
            this.setState({
                urlend: "series/" + proseries,
            });
            switch (proseries) {
                case '1':
                    this.setState({
                        urlcname: "球星實戰"
                    });
                    break;
                case '3':
                    this.setState({
                        urlcname: "Marvel"
                    });
                    break;
                case '4':
                    this.setState({
                        urlcname: "生活風格"
                    });
                    break;
                default:
                    break;
            }
        }
        
    }


    render() {


        return (

            <p className="w_bread_all">
                <span onClick={this.w_bread_go.bind(this, "/")}>首頁/</span>
                <span onClick={this.w_bread_go.bind(this, "/product_list/")}>全部商品/</span>
                <span onClick={this.w_bread_go.bind(this, "/product_list/" + this.state.urlend)}>{this.state.urlcname}</span>

            </p>

        );
    }
}
export default Product_Bread;