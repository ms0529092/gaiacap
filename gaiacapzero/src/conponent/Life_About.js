import React, { Component } from 'react';
import $ from 'jquery';
import './Player_Introduction.scss';

class Life_About extends Component {
    constructor(props) {
        super(props);
       
    }
    componentDidMount() {

    }
    a_hideIntrouduction() {
        $(".a_playerIntroduction").css("transform", "translateX(-100%)")
    }
    render() {
        const {img,title1,title2,p1,p2,alink,aname} = this.props;
        return (
            <div className="a_playerIntroduction" style={{ transform: "translateX(-100%)" }}>
                <div className="a_playerName">
                    <div className="a_playersPic">
                        <img src={img} />
                        
                    </div>
                    <div className="a_bg_gradient"></div>
                    <div className="a_playersMoreIntroduction">
                        <div className="a_firstpart">

                            <h3>{title1}</h3>
                            <span>{title2}</span>

                            <p>
                                {p1}
                            </p>

                        </div>
                        <div className="a_secondpart">

                            <div className="a_arcoss_icon" onClick={this.a_hideIntrouduction}>
                                <span className="a_crossline1"></span>
                                <span className="a_crossline2"></span>
                            </div>

                            <p>{p2}</p>

                            <div className="a_shoppingbutton">
                                <a href={alink}>{aname}<i className="fas fa-chevron-circle-right"></i></a>
                            </div>

                        </div>


                    </div>
                </div>
            </div>
        );
    }
}
export default Life_About;