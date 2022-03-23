export const FormInput = ({
  name,
  type,
  placeholder,
  onChange,
  className,
  value,
  error,
  children,
  label,
  ...props
}) => {
  return (
    <>
      <label htmlFor={name}>
        {label}
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          className={className}
          style={error && { border: "solid 1px red" }}
        />
      </label>
      {error && <p>{error}</p>}
    </>
  );
};
