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
          style={{ marginBottom: "4px", fontSize: "30px", fontWeight: "bold" }}
        >
          Registered Costumers
        </h2>
        <lable style={{ margin: "20px 0px 0px 4px", fontWeight: "bold" }}>
          Email
        </lable>
        <input
          className="input"
          style={{
            margin: "10px 0px 10px 0px",
            padding: "14px",
            borderRadius: "10px",
            border: "none",
          }}
          placeholder="Your E-mail"
        ></input>
        <lable style={{ marginLeft: "4px", fontWeight: "bold" }}>
          Password
        </lable>
        <input
          className="input"
          type="password"
          style={{
            marginTop: "10px",
            padding: "14px",
            borderRadius: "10px",
            border: "none",
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
              border: "none",
            }}
            type="submit"
          >
            Sign In
          </button>
          <Link
            className="reset-password-link"
            style={{ marginLeft: "30px", textDecoration: "none" }}
          >
            Forgot Your Password ?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
