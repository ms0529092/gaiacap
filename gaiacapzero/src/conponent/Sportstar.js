import React, { Component } from 'react';
import './Sportstar.scss';

class Sportstar extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {

    }
    render() {
        
        return (
            <div className="w_sport_outside">
                <div className="w_mlb_logo_outside">

                    <img src="/images/GAIA_CAPA_playlist_banner_MLBLOGO.svg" />
                    <span>MLB球星實戰系列</span>

                </div>
                              
            </div>
        );
    }
}

export default Sportstar;
