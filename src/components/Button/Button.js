import React from 'react';
import MuiButton from '@mui/material/Button';

const Button = ({
  variant = 'outlined',
  fullWidth = false,
  color = 'primary',
  onClick,
  children,
  bold = true,
  type = 'button',
  textDecoration = 'none',
  disabled = false,
  width = '200px',
  textTransform = 'capitalize',
  fontSize = '14px',
  height,
  borderRadius = '20px',
  justifyContent = 'center',
  margin = '5px 0px',
  value,
  href,
  endIcon,
}) => {
  return (
    <MuiButton
      variant={variant}
      disableElevation
      color={color}
      fullWidth={fullWidth}
      onClick={onClick}
      type={type}
      disabled={disabled}
      value={value}
      href={href}
      endIcon={endIcon}
      sx={{
        fontWeight: bold ? '900' : '400',
        width: width,
        borderRadius: borderRadius,
        textTransform: textTransform,
        fontSize: fontSize,
        margin: margin,
        height: height,
      }}
      style={{
        justifyContent: justifyContent,
      }}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
