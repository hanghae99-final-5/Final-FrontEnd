import React from 'react';
import GoogleLogin from 'react-google-login';

const clientId = "955741843163-he31ab3ibg0cd8mpmo1lt08l45n0v0r7.apps.googleusercontent.com";

export default function GoogleBtn({ onSocial }){
    const onSuccess = async(response) => {
    	console.log(response);
        const { googleId, profileObj : { email, name } } = response;
        await onSocial({
            socialId : googleId,
            socialType : 'google',
            email,
            nickname : name
        });
    }

    const onFailure = (error) => {
        console.log(error);
    }

    return(
        <div>
            <GoogleLogin
                clientId={clientId}
                responseType={"id_token"}
                onSuccess={onSuccess}
                onFailure={onFailure}/>
        </div>
    )
}