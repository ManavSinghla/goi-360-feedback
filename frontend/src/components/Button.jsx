import React from "react";

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary", // primary, secondary, outline, danger, ghost
  size = "md", // sm, md, lg
  className = "",
  disabled = false,
  ...props
}) => {
  const baseStyles = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "8px",
    fontWeight: "600",
    transition: "all 0.2s ease",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.7 : 1,
    fontFamily: "var(--font-family-sans)",
  };

  const variants = {
    primary: {
      background: "var(--primary-color)",
      color: "white",
      border: "1px solid var(--primary-color)",
      boxShadow: "0 4px 6px -1px rgba(37, 99, 235, 0.2)",
    },
    secondary: {
      background: "var(--secondary-color)",
      color: "white",
      border: "1px solid var(--secondary-color)",
    },
    outline: {
      background: "transparent",
      color: "var(--primary-color)",
      border: "1px solid var(--primary-color)",
    },
    danger: {
      background: "var(--danger-color)",
      color: "white",
      border: "1px solid var(--danger-color)",
    },
    ghost: {
      background: "transparent",
      color: "var(--text-secondary)",
      border: "1px solid transparent",
    },
  };

  const sizes = {
    sm: {
      padding: "0.4rem 0.8rem",
      fontSize: "0.875rem",
    },
    md: {
      padding: "0.6rem 1.2rem",
      fontSize: "1rem",
    },
    lg: {
      padding: "0.8rem 1.6rem",
      fontSize: "1.125rem",
    },
  };

  const combinedStyles = {
    ...baseStyles,
    ...variants[variant],
    ...sizes[size],
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${className}`}
      style={combinedStyles}
      onMouseOver={(e) => {
        if (!disabled && variant !== 'ghost' && variant !== 'outline') {
           e.currentTarget.style.transform = 'translateY(-1px)';
           e.currentTarget.style.boxShadow = '0 6px 8px -1px rgba(0, 0, 0, 0.1)';
        }
      }}
      onMouseOut={(e) => {
        if (!disabled && variant !== 'ghost' && variant !== 'outline') {
           e.currentTarget.style.transform = 'translateY(0)';
           e.currentTarget.style.boxShadow = variants[variant].boxShadow || 'none';
        }
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
