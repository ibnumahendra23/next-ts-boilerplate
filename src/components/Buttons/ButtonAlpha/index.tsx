import { ButtonHTMLAttributes } from "react";

interface ButtonAlphaI extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "blue" | "green" | "red" | "yellow";
  outerclass?: string;
}

export function ButtonAlpha({ outerclass, ...buttonProps }: ButtonAlphaI) {
  return (
    <div className={outerclass}>
      <button {...buttonProps}>{buttonProps.children}</button>
    </div>
  );
}
