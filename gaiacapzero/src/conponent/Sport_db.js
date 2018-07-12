import React, { Component } from 'react';

class Sport_db extends Component {
    constructor(props) {
        super(props);

    }

    handleChange(event){
        const state = this.state;
        state[event.target.id] = event.target.value;
        this.setState(state);
    }

    w_fish() {

        console.log(JSON.stringify(this.state));
        return false;
        window.location.reload();
        fetch('http://localhost:3087/api/users', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            res => res.json()

        ).then(data => {
                this.setState(this._initState);
                this.props.get(data);
            }
        )


    }

    render() {
        return (
            <div>
                <p>adkljflds</p>
            </div>
        );
    }
}

export default Sport_db;
