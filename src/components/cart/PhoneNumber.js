import React from "react";
import "./PhoneNumber.css";

const PhoneNumber = ({ phoneNumber, onChangeInput, phoneError }) => {
  return (
    <div className="ph-no-container">
      <input value={"+95"} readOnly className="ph-no-prefix" />
      <input
        type={"number"}
        value={phoneNumber}
        name="phoneNumber"
        className="ph-no-input"
        placeholder="9xxxxxxxxx"
        onChange={onChangeInput}
        onKeyDown={(event) => {
          if (!/[0-9]/.test(event.key) && event.key !== "Backspace") {
            event.stopPropagation();
            event.preventDefault();
          }
        }}
      />
      <span
        style={{
          fontSize: "0.8rem",
          color: "red",
          marginRight: "5px",
        }}
      >
        {phoneError}
      </span>
    </div>
  );
};

export default PhoneNumber;
