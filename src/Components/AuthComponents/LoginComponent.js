import { Link } from "react-router-dom";
import "./LoginComponent.css";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login-component">
      <form className="form-login" onSubmit={handleSubmit}>
        <h2
          style={{ marginBottom: "4px", fontSize: "26px", fontWeight: "bold" }}
        >
          Registered Costumers
        </h2>
        <p className="password-link">
          If you have an account, sign in with your email address
        </p>
        <lable style={{ margin: "10px 0px 0px 4px", fontWeight: "bold" }}>
          Email
        </lable>
        <input
          style={{
            margin: "10px 0px 10px 0px",
            paddingLeft: "10px",
          }}
          placeholder="Your E-mail"
        ></input>
        <lable style={{ marginLeft: "4px", fontWeight: "bold" }}>
          Password
        </lable>
        <input
          style={{
            marginTop: "10px",
            paddingLeft: "10px",
          }}
          placeholder="Your Password"
        ></input>
        <div className="login-button">
          <button
            style={{
              width: "120px",
              height: "44px",
              borderRadius: "50px",
              backgroundColor: "rgb(56, 91, 187)",
              color: "white",
              fontSize: "18px",
              fontWeight: "bold",
            }}
            type="submit"
          >
            Sign In
          </button>
          <Link style={{ marginLeft: "30px", textDecoration: "none" }}>
            Forgot Your Password ?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
