import React, { Component } from 'react';

import './SubmitButton.scss';
class SubmitButton extends Component {
   state = {
       showModal: true
   }

   handleModal = () => {
    this.setState({showModal: !this.state.showModal});
   }

    render() {
        if(!this.state.showModal) {
            return (
                <div className="LoggedIn">
                    Logged In!
                </div>
            )
        } else {
            return (
                <div className="submit-button_container">
                    <button onClick={this.handleModal} >Sign In</button>
                </div>
            ) 
        }
    }
}

export default SubmitButton;