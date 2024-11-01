// Home.jsx
import React from "react";
import GoogleLoginComponent from "./GoogleLoginComponent";
import FacebookLoginButton from "./FacebookLoginButton";

function Home() {
  return (
    <div>
      <GoogleLoginComponent />
      <FacebookLoginButton />
      <h1>Welcome to the Home Page!</h1>
      <p>This is some additional data displayed on the Home page.</p>
      {/* Add any other content or components you want to display here */}
    </div>
  );
}

export default Home;
