const Login = () => {
  const google = () => {
    window.open("http://localhost:8080/auth/google", "_self");
  };

  return (
    <div className="login">
      <h1 className="loginTitle">Choose a Login Method</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginButton google" onClick={google}>
            <img
              src="https://static1.xdaimages.com/wordpress/wp-content/uploads/2018/10/google-plus-logo.png?q=50&fit=contain&w=1140&h=&dpr=1.5"
              alt=""
              className="icon"
            />
            Google
          </div>
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>
        <div className="right">
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" />
          <button className="submit">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
