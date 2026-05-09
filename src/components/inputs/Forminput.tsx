import React, { useState } from "react";
import "./formStyles.scss";
import { FiEye, FiEyeOff } from "react-icons/fi";

interface formAlias {
  containerClassName?: string;
  label?: string;
  placeholder?: string;
  leftIcon?: string;
  rightIcon?: string;
  type?: string;
  onchange?: (value: string) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  value?: string;
  error?: string;
  telephone?: boolean;
  readOnly?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
}

function Forminput({
  containerClassName = "",
  label,
  placeholder,
  leftIcon,
  rightIcon,
  type = "text",
  onchange,
  onKeyDown,
  value = "",
  error,
  readOnly = false,
  minLength,
  maxLength,
  pattern,
}: formAlias) {
  // states
  const [showToggle, setShowToggle] = useState<boolean>(false);

  return (
    <div
      className={`form_input_container ${containerClassName} ${
        type == "textarea" ? "textAreCont" : ""
      }`}
    >
      {label && type != "file" && <b className="form_label">{label}</b>}
      <div className={`inptCont ${error ? "error" : ""}`}>
        {/* lefticon */}
        {leftIcon && <div className="leftIcon">{leftIcon}</div>}
        {type != "textarea" ? (
          <input
            type={showToggle ? "text" : type}
            readOnly={readOnly}
            placeholder={placeholder}
            onChange={(e) => onchange?.(e.target.value)}
            value={value}
            minLength={minLength}
            maxLength={maxLength}
            onKeyDown={onKeyDown}
            pattern={pattern}
            autoComplete="false"
            autoCapitalize="none"
          />
        ) : (
          <textarea
            placeholder={placeholder}
            onChange={(e) => onchange?.(e.target.value)}
            value={value}
          />
        )}
        {/* righticon */}
        {rightIcon && <div className="rightIcon">{rightIcon}</div>}

        {type == "password" && (
          <button
            type="button"
            className="rightIcon"
            onClick={() => setShowToggle(!showToggle)}
          >
            {showToggle ? <FiEye /> : <FiEyeOff />}
          </button>
        )}
      </div>
      {error && <span className="error">{error}</span>}
    </div>
  );
}

export default Forminput;
