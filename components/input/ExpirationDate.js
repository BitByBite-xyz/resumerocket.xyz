import { Input } from "@nextui-org/react";
import React from "react";

export default function ExpirationDate(props) {
  const handleKeyUp = (event) => {
    // Only allow the user to enter numbers
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
      return;
    }

    // Add the "/" between the month and year
    const value = event.target.value;
    if (value.length === 2) {
      event.target.value = value + " / ";
    }
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
