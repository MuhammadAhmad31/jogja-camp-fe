import React from "react";

interface ArrowProps {
  className: string;
  style: React.CSSProperties;
  onClick: () => void;
}

const Arrow: React.FC<ArrowProps> = ({ className, style, onClick }) => {
  const isPrev = className.includes("slick-prev");

  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        width: "40px",
        height: "40px",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        borderRadius: "50%",
        color: "white",
        fontSize: "24px",
        lineHeight: "40px",
        textAlign: "center",
        cursor: "pointer",
        zIndex: 1,
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        left: isPrev ? "15px" : undefined,
        right: !isPrev ? "15px" : undefined,
      }}
      onClick={onClick}
    ></div>
  );
};

export default Arrow;
