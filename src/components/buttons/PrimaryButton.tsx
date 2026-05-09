import React from "react";
import "./button.scss";

interface PrimaryButtonProps {
  text: React.ReactNode;
  submitButton?: boolean;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  to?: string;
  load?: boolean;
  download?: boolean;
  target?: React.HTMLAttributeAnchorTarget;
}

function PrimaryButton({
  text,
  submitButton = false,
  className = "",
  onClick = () => {},
  to = "/",
  load = false,
  download = false,
  target,
}: PrimaryButtonProps) {
  return submitButton ? (
    <button
      type="button"
      onClick={onClick}
      className={`pg-btn ${className} button`}
      disabled={load}
    >
      {text}
    </button>
  ) : (
    <a
      className={`pg-btn ${className}`}
      download={download}
      href={to}
      target={target}
    >
      {text}
    </a>
  );
}

export default PrimaryButton;
