// src/components/CustomButton.tsx
import React from "react";
import {
  Button,
  ButtonProps,
  Spinner,
  Tooltip,
  Icon,
  useStyleConfig,
} from "@chakra-ui/react";

interface CustomButtonProps extends ButtonProps {
  isLoading?: boolean;
  tooltipLabel?: string;
  icon?: React.ElementType;
  variant?: "solid" | "outline";
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  isLoading,
  tooltipLabel,
  icon,
  variant = "solid",
  ...props
}) => {
  const styles = useStyleConfig("Button", { variant, colorScheme: "primary" });

  return (
    <Tooltip label={tooltipLabel} hasArrow>
      <Button __css={styles} {...props}>
        {isLoading ? <Spinner size="sm" /> : icon && <Icon as={icon} mr={2} />}
        {children}
      </Button>
    </Tooltip>
  );
};

export default CustomButton;
