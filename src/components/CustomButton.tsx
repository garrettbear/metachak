// src/components/CustomButton.tsx
import React from "react";
import { Button, ButtonProps } from "@chakra-ui/react";

const CustomButton: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <Button colorScheme="primary" {...props}>
      {children}
    </Button>
  );
};

export default CustomButton;
