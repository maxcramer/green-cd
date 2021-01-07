import React, { Component } from 'react';

import './SubmitButton.scss';
class SubmitButton extends Component {
    state = {
        showLoginConf: false
    }

    render() {
        return (
            <div className="submit-button_container">
                <button>Sign In</button>
            </div>
        )
    }

}

export default SubmitButton;