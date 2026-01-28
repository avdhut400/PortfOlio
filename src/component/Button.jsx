export const Button = ({ className = "", size = "default", children }) => {
  const baseClasses =
    "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background";

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;

  return (
    <button className={classes}>
      <span className="relative flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};
