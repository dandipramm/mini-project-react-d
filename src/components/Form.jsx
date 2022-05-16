import React from "react";
import "./FormStyles.css";

const Form = () => {
  return (
    <div className="form">
      <form>
        <label>Your Name</label>
        <input type="text"></input>
        <label>Email</label>
        <input type="text"></input>
        <textarea rows="6" placeholder="Type your Question in here" />
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
