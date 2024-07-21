import React, { useState } from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { InputVariant } from "@/types/common";

interface InputProps<T extends FieldValues> {
  label?: string;
  type?: string;
  name: Path<T>;
  control: Control<T>;
  placeholder?: string;
  required?: boolean;
  error?: string;
  variant?: InputVariant;
  icon?: React.ReactNode;
  labelClassName?: string;
  inputClassName?: string;
}

function Input<T extends FieldValues>({
  label,
  type = "text",
  name,
  control,
  placeholder,
  required,
  error,
  variant = InputVariant.DEFAULT,
  icon,
  labelClassName = "text-heading6 !text-gray-90",
  inputClassName = " border-1 border-gray-50 w-full appearance-none rounded-md border px-3 py-2 text-base text-white bg-gray-60 placeholder-gray-80 focus:border-gray-50 focus:outline-none",
}: InputProps<T>) {
  const [showPassword, setShowPassword] = useState(false);

  const getInputClassName = (hasError: boolean) => `
    ${inputClassName}
    ${hasError ? "border-red-500" : ""}`;

  const renderInput = (field: any) => {
    switch (variant) {
      case InputVariant.WITH_ADORNMENT:
        return (
          <div className="relative">
            {icon && (
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                {icon}
              </span>
            )}
            <input
              {...field}
              type={type}
              id={name}
              placeholder={placeholder}
              className={`${getInputClassName(!!error)} ${icon ? "pl-10" : ""}`}
            />
          </div>
        );
      case InputVariant.PASSWORD:
        return (
          <div className="relative">
            <input
              {...field}
              type={showPassword ? "text" : "password"}
              id={name}
              placeholder={placeholder}
              className={getInputClassName(!!error)}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 flex items-center pr-3"
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5 text-gray-400" />
              ) : (
                <Eye className="h-5 w-5 text-gray-400" />
              )}
            </button>
          </div>
        );
      default:
        return (
          <input
            {...field}
            type={type}
            id={name}
            placeholder={placeholder}
            className={getInputClassName(!!error)}
          />
        );
    }
  };

  return (
    <div className="">
      <div className="w-full flex flex-col gap-2">
        {label && (
          <label  className={labelClassName}>
            {label}
          </label>
        )}
        <Controller
          control={control}
          name={name}
          render={({ field }) => renderInput(field)}
        />
      </div>
      {error && <span className="text-heading6 text-red-500 mt-1 font-light text-[12px]">{error}</span>}
    </div>
  );
}

export default Input;
