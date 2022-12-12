import React from "react";

const Email = (props) => {
  const { email, onChangeInput } = props;
  return (
    <div className="register-form-row">
      <label>Email</label>
      <div>:</div>
      <div>
        <input
          type="email"
          placeholder="example@gmail.com"
          name="email"
          value={email}
          onChange={onChangeInput}
        />
      </div>
    </div>
  );
};

export default Email;
