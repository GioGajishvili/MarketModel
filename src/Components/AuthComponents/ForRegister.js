const ForRegister = ({ handleSubmit, handleToggle }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: "10",
        left: "10",
      }}
    >
      <form className="form-login" onSubmit={handleSubmit}>
        <lable style={{ marginLeft: "4px", fontWeight: "bold" }}>
          Username
        </lable>
        <input
          className="input"
          style={{
            margin: "10px 0px 10px 0px",
            padding: "14px",
            borderRadius: "10px",
            border: "none",
            height: "40px",
            width: "300px",
          }}
          placeholder="Your Username"
        ></input>
        <lable style={{ fontWeight: "bold", marginLeft: "4px" }}>Email</lable>
        <input
          className="input"
          style={{
            margin: "10px 0px 10px 0px",
            padding: "14px",
            borderRadius: "10px",
            border: "none",
            height: "40px",
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
            height: "40px",
          }}
          placeholder="Your Password"
        ></input>
        <div className="login-button">
          <button
            onClick={() => handleToggle()}
            style={{
              width: "120px",
              height: "44px",
              borderRadius: "50px",
              backgroundColor: "rgb(56, 91, 187)",
              color: "white",
              fontSize: "18px",
              fontWeight: "bold",
              border: "none",
              marginLeft: "14px",
            }}
            type="submit"
          >
            Back
          </button>
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
              marginLeft: "30px",
            }}
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForRegister;
