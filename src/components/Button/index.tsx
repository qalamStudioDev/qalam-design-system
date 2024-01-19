interface ButtonProps {
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
const Button = ({ label, ...props }: ButtonProps) => {
  return (
    <button
      type="button"
      className="bg-blue-500"
      // style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
