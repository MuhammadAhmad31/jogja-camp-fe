import React from "react";

interface ButtonProps {
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  color: "black" | "slate";
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  color,
  icon,
}) => {
  const colorClasses = {
    black: "bg-black text-white hover:bg-gray-800",
    slate: "bg-neutral-300 text-black hover:bg-neutral-400",
  };

  return (
    <button
      className={`py-2 px-4 rounded flex items-center space-x-2 ${colorClasses[color]}`}
      onClick={onClick}
    >
      {icon && <span className="text-sm">{icon}</span>}
      <span>{label}</span>
    </button>
  );
};
