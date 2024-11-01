// src/FacebookLoginComponent.jsx
import React, { useState } from 'react';
import { FacebookProvider, LoginButton } from 'react-facebook';

function FacebookLoginComponent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  const handleResponse = (data) => {
    console.log('Login Success:', data);
    if (data.profile) {
      const { name } = data.profile;
      setUserName(name); 
      setIsLoggedIn(true);
    }
  };

  const handleError = (error) => {
    console.error('Login Error:', error);
  };

  return (
    <FacebookProvider appId="827864039285343"> {/* Use your Facebook App ID */}
      {!isLoggedIn ? (
        <>
          <LoginButton
            scope="public_profile,email"
            onCompleted={handleResponse}
            onError={handleError}
          >
            <span>Login with Facebook</span>
          </LoginButton>
        </>
      ) : (
        <h2>Welcome {userName}</h2>
      )}
    </FacebookProvider>
  );
}

export default FacebookLoginComponent;
