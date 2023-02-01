import "./Auth.css";
import LoginComponent from "../../Components/AuthComponents/LoginComponent";
import RegisterComponent from "../../Components/AuthComponents/RegisterComponent";

const Auth = () => {
  return (
    <div className="auth-page">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <h1 className="login-title"> Customer Login </h1>
      </div>
      <div style={{ flexDirection: "row", display: "flex", gap: "100px" }}>
        <div className="login-block">
          <LoginComponent />
        </div>
        <div className="register-block">
          <RegisterComponent />
        </div>
      </div>
    </div>
  );
};

export default Auth;
