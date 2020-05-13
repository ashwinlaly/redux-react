import React from 'react';
import FacebookLogin from 'react-facebook-login';

const Sociallogin = () => {

    const responseFacebook = (response) => {
      fetch("https://172.16.22.2/projects/yii/first/web/user/fblogin?token="+response.accessToken).then(r => r.json()).then(r => console.log(r))
    }

    return (
        <div>
            <FacebookLogin
                appId="2662761407342780"
                autoLoad={true}
                fields="name,email,picture"
                scope="user_age_range,user_birthday"
                callback={responseFacebook} />
        </div>
    )
}

export default Sociallogin;