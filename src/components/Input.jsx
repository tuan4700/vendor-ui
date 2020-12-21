const Input = ({ name, id, label, isRequired, placeholder }) => {
  return (
    <div className="input">
      {label ? (
        <>
          <label
            className={`input_label ${isRequired ? "required" : ""}`}
            htmlFor={id}
          >
            {label}
          </label>
          <input
            className="input_input"
            name={name}
            id={id}
            placeholder={placeholder}
          ></input>
        </>
      ) : null}
    </div>
  );
};

export default Input;
