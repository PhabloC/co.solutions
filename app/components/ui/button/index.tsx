import { ButtonProps } from "./types";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
  className = "",
}: ButtonProps) {
  const baseStyles =
    "font-semibold rounded-lg transition-all duration-200 cursor-pointer";

  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800",
    secondary: "bg-gray-600 text-white hover:bg-gray-700 active:bg-gray-800",
    outline:
      "border-2 border-blue-600 text-blue-600 hover:bg-blue-50 active:bg-blue-100",
    glass:
      "group relative overflow-hidden border border-white/30 bg-gradient-to-r from-white/20 to-white/10 px-4 py-2 text-sm rounded-lg font-medium tracking-wide text-white backdrop-blur-sm transition-[border-color,background-color,box-shadow] duration-500 hover:border-white/50 hover:bg-white/20 hover:shadow-lg hover:shadow-white/10 cursor-pointer",
  };

  const sizeStyles = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "";

  const finalClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`;

  return (
    <button className={finalClassName} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
