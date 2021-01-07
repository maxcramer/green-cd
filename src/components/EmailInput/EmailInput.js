import React from 'react';

import './EmailInput.scss'
;
const EmailInput = () => {
    return (
        <div className="Email">
            <p>Email Address</p>
            <input className="email-input" type="text" />
            <div className="remember-device">
                <input type="checkbox" checked/>
                <p>Remember this device</p>
            </div>
        </div>
    );
};

export default EmailInput;