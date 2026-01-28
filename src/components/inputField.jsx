const InputField = ({ placeholder, value, onChange, onBlur, className = "" }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      className={`border border-gray-300 rounded-md px-4 py-2
                  text-black placeholder-gray-400
                  focus:outline-none focus:ring-2 focus:ring-blue-500
                  ${className} ${!className.includes("w-") ? "w-full" : ""}`}
    />
  );
};

export default InputField;
