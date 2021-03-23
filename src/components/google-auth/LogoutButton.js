import React from 'react';
import {GoogleLogout} from "react-google-login";
import {connect} from "react-redux";
import {signIn, signOut} from "../../actions";

const clientId = '605490410159-egn6cf9q93lg26pioan8oijop91ft0s9.apps.googleusercontent.com'

class LogoutButton extends React.Component {
    render() {
        const onSuccess = () => {
            console.log('[Logout success]')
            this.props.signOut()
        }

        return (
            <div>
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Logout"
                    onLogoutSuccess={onSuccess}
                />
            </div>
        );
    }
}

export default connect(
    null,
    {signIn, signOut}
)(LogoutButton);
