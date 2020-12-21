const Button = ({ variant, children }) => {
  return (
    <button
      className={`button ${variant ? `button-${variant}` : "button-default"}`}
    >
      {children}
    </button>
  );
};

export default Button;
