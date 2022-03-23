export const Button = ({ type, className, handleClick, label }) => {
  return (
    <button type={type} className={className} onClick={handleClick}>
      {label}
    </button>
  );
};
