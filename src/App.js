import React from 'react';
// import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
// import Form from './Components/Form';
// import HigherOrderComponent from './Components/HigherOrderComponent';
// import Portals from './Components/Portals';
// import RenderProps from './Components/RenderProps';
// import Hooks from './Components/Hooks';
import './App.css';

function App() {

  const responseFacebook = (response) => {
      console.log(response);
    fetch("http://172.16.22.2/projects/yii/first/web/test").then(r => r.json()).then(r => console.log(r))
  }
  // const responseFacebook = (response) => {
  //   console.log(response);
  // }

  return (
    <div className="App">
        <button onClick={responseFacebook}>sf</button>
        {/* <FacebookLogin
          appId="2662761407342780"
          autoLoad={true}
          fields="name,email,picture"
          scope="user_age_range,user_birthday"
          // onClick={componentClicked}
          callback={responseFacebook} /> */}
        <GoogleLogin
          clientId="656525447069-9oidgm8ue64envp64f6hnsdjfasak7j9.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseFacebook}
          onFailure={responseFacebook}
          cookiePolicy={'single_host_origin'}
  />
          
      {/* <Form /> */}
      {/* <HigherOrderComponent /> */}
      {/* <Portals/> */}
      {/* <RenderProps /> */}
      {/* <Hooks /> */}
    </div>
  );
}

export default App;
