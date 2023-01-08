import { Input } from "@nextui-org/react";
import React from "react";

export default function CreditCard(props) {
  const handleKeyUp = (event) => {
    // Only allow the user to enter numbers
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
      return;
    }

    // Add the dashes every four numbers
    const value = event.target.value;
    const formattedValue = value
      .replace(/-/g, "")
      .match(/.{1,4}/g)
      .join("-");
    event.target.value = formattedValue;
  };

  return (
    <Input
      {...props}
      onKeyUp={handleKeyUp}
      onKeyPress={(event) => {
        if (!/[0-9]/.test(event.key)) {
          event.preventDefault();
        }
      }}
    />
  );
}
