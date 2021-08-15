const Input = (props: any) => {
  const { label, type, htmlFor, placeholder, onChange, name, inputMode, minLength, maxLength, value} =
    props;
  return (
    <div className="form-group mb-3">
      <label htmlFor={htmlFor}>{label}</label>
      <input
        type={type}
        name={name}
        className="form-control"
        id={htmlFor}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        inputMode={inputMode}
        minLength={minLength}
        maxLength={maxLength}
        required={true}
        value={value}
      />
    </div>
  );
};

export default Input;

Input.defaultProps = {
  label: "",
  type: "",
  htmlFor: "",
  placeholder: "",
  name: "",
  inputMode: "",
  minLength: "",
  maxLength: "",
};
