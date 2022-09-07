import { Select } from "antd";
import classNames from "classnames";
import React, { useState } from "react";

const { Option } = Select;

interface PropType {
  type?: "text" | "email" | "number" | "select";
  name: string;
  label: string;
  onChange?: (e: any) => void;
  placeholder?: string;
  Icon?: any;
  defaultValue?: string | Date | number;

  hasError?: boolean;
  disabled?: boolean;
  helperText?: string;
  className?: string;
  labelClassName?: string;
  options?: { value: string; label: string }[] | any;
  required?: boolean;
  rest?: any;
}

const InputField: React.FC<PropType> = ({
  type = "text",
  name,
  label = "Input",
  placeholder,
  Icon,
  onChange,
  rest,
  defaultValue,
  hasError,
  helperText,
  className,
  labelClassName,
  options = [{ label: "Label", value: "value" }],
  required = false,
  disabled,
}) => {
  return (
    <div className="w-full grid gap-1.5">
      <label
        className={`text-lg font-semibold ${labelClassName}`}
        htmlFor={name}
      >
        {label}
        <span className="text-red-400">{required && "*"}</span>
      </label>
      <div className="relative">
        {type === "select" ? (
          <div className="relative">
            <Select
              className={classNames(
                `input_select w-full h-12 pl-10 rounded text-lg border hover:border-primary/30 focus:border-primary ${className}`,
                {
                  "disabled:bg-slate-200 cursor-not-allowed": disabled,
                }
              )}
              placeholder={placeholder}
              bordered={false}
            >
              {options.map(
                (option: { value: string; label: string }, i: number) => {
                  return (
                    <Option key={i} value={option.value}>
                      {option.label}
                    </Option>
                  );
                }
              )}
            </Select>
            <span className="absolute top-4 left-3">{Icon}</span>
          </div>
        ) : (
          <div className="relative">
            <input
              className={classNames(
                `w-full h-12 rounded pl-12 text-lg border hover:border-primary/30 focus:border-primary ${className}`,
                {
                  "disabled:bg-slate-200 cursor-not-allowed": disabled,
                }
              )}
              id={name}
              onChange={onChange}
              value={defaultValue}
              type={type}
              name={name}
              placeholder={placeholder}
              disabled={disabled}
              {...rest}
            />
            <span className="absolute top-4 left-3">{Icon}</span>
          </div>
        )}

        {helperText && (
          <p
            className={classNames("text-sm absolute", {
              "text-red-500": hasError,
              "text-gray-500": !hasError,
            })}
          >
            {helperText}
          </p>
        )}
      </div>
    </div>
  );
};

export default InputField;
