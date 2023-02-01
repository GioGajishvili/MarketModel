const NotRegistered = ({ handleToggle, handleSubmit }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: "10",
        left: "10",
      }}
    >
      <form className="form-register" onSubmit={handleSubmit}>
        <h2 style={{ marginBottom: "4px", fontWeight: "bold" }}>
          New Customer
        </h2>
        <p style={{ marginBottom: "30px" }}>
          Creating an account has many benefits{" "}
        </p>
        <ul>
          <li>Check out faster</li>
          <li>Keep more than one address</li>
          <li>Track orders and more</li>
        </ul>
        <button
          onClick={() => handleToggle()}
          style={{
            width: "200px",
            height: "50px",
            borderRadius: "50px",
            backgroundColor: "rgb(56, 91, 187)",
            color: "white",
            fontSize: "18px",
            fontWeight: "bold",
            marginTop: "30px",
            marginBottom: "70px",
            border: "none",
          }}
          type="submit"
        >
          Create an account
        </button>
      </form>
    </div>
  );
};

export default NotRegistered;
