import React from 'react';

import './EmailInput.scss'
;
const Emailinput = () => {
    return (
        <div className="Email">
            <p>Email Address</p>
            <input type="text" placeholder="Enter email address"/>
            <input type="checkbox" />
        </div>
    );
};

export default Emailinput;