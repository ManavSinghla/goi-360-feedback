import React from "react";

const Card = ({ children, className = "", glass = false, ...props }) => {
  return (
    <div
      className={`${glass ? "glass-card" : ""} ${className}`}
      style={{
        background: glass ? undefined : "white",
        borderRadius: "12px",
        padding: "24px",
        boxShadow: glass ? undefined : "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
        border: glass ? undefined : "1px solid #f1f5f9",
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
