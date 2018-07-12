import React, { Component } from 'react';
import $ from 'jquery';
import './Allcolor.scss';

class Allcolor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jsonData: [],
            color:"red",
            domainName:'',
            
        }
        this.w_com_color = this.w_com_color.bind(this);
    }
    componentDidMount() {
        this.domainName = window.location.href;
        const loc = this.domainName.indexOf(':', 6);
        this.domainName = this.domainName.slice(0, loc);
        this.state.domainName = this.domainName; 
        
        this.w_com_color();
    }

    w_com_color() {

        $.ajax({
            type: "GET",
            url: this.state.domainName+':3087/coms/color/all',
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

    fun2(bbb,ccc) {
        console.log(bbb);
        console.log(ccc);

    }


    render() {
        let jsonData = this.state.jsonData;
        return (

            <div className="a_color_plate a_list_style a_flex w_color_all" >
                <p className="w_color_title" onClick={this.fun2.bind(this,".b_scroll","ccc")}>顏色</p>
                {
                    jsonData.map((jd) => {
                        
                        return (
                            // <NavLink to={"/product_list/" + jd.sid} className="w_color_navlink">
                            //     <div className={"a_color_circle a_" + jd.sid}></div>
                            // </NavLink>
                            <a key={jd.sid} href={"/product_list/color/" + jd.sid} className="w_color_navlink">
                                <div className={"a_color_circle a_" + jd.sid}></div>
                            </a>
                        );
                    })
                }

            </div>
        );
    }








}

export default Allcolor;
