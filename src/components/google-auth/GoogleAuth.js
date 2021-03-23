import React, {Component} from 'react';
import {connect} from 'react-redux';
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const mapStateToProps = state => ({isSignedIn: state.auth.isSignedIn});

class GoogleAuth extends Component {
    renderAuthButton = () => {
        switch (this.props.isSignedIn) {
            case true:
                return <LogoutButton/>
            case false:
                return <LoginButton/>
            default:
                return <LoginButton/>
        }
    }

    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(GoogleAuth);
