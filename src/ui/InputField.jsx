import React from "react";

const InputField = ({
  label,
  type,
  placeHolder,
  name,
  error,
  onChange,
  onBlur,
  touched,
  value,
}) => {
  return (
    <div className="my-3">
      <div className="flex items-center justify-between mb-3">
        <label
          htmlFor={name}
          className={`text-lg font-semibold ${
            error && touched ? "text-red-600" : "text-inherit"
          }`}
        >
          {label}
        </label>
        {touched && error && (
          <span className="text-red-600 font-semibold">{error}!</span>
        )}
      </div>
      <input
        id={name}
        name={name}
        placeholder={placeHolder}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`h-[55px] border ${
          error && touched ? "border-red-600" : "border-gray-400"
        } w-full rounded-xl focus:border-gray-600 transition-all duration-300 outline-none px-3 text-lg`}
      />
    </div>
  );
};

export default InputField;
