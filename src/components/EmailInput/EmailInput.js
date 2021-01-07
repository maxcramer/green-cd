import React, { Component } from 'react';

import './EmailInput.scss';

class EmailInput extends Component {
    state = {
        checked: true
    }


    handleChecked = () => {
        this.handleChecked = this.handleChecked.bind(this);
        this.setState({checked: !this.state.checked})
    }

    render() {
        return (
            <div className="Email">
                <p>Email Address</p>
                <input className="email-input" type="text" />
                <div className="remember-device">
                    <input type="checkbox" checked={this.state.checked} onChange={this.handleChecked}/>
                    <p>Remember this device</p>
                </div>
            </div>
        );
    
    }
};

export default EmailInput;