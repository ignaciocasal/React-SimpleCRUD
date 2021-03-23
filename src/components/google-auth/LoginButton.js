import React from 'react';
import GoogleLogin from "react-google-login";
import {refreshTokenSetup} from "../../utils/GoogleAuth";
import {connect} from "react-redux";
import {signIn, signOut} from "../../actions";

const clientId = '605490410159-egn6cf9q93lg26pioan8oijop91ft0s9.apps.googleusercontent.com'

class LoginButton extends React.Component {
    render() {
        const onSuccess = res => {
            console.log('[Login success] currentUser: ', res.profileObj)
            refreshTokenSetup(res)
            this.props.signIn(res.profileObj.googleId)
        }

        const onFailure = res => {
            console.log('[Login failed] res: ', res)
        }

        return (
            <div>
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Login with Google"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                />
            </div>
        );
    }
}

export default connect(
    null,
    {signIn, signOut}
)(LoginButton);
