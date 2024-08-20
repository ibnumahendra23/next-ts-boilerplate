"use client";

import Link from "next/link";
import { useState } from "react";

export default function InputBasic(props) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={`flex flex-col gap-[5px] ${props.insideclass ?? ""}`}>
      <div className="flex justify-between items-center">
        {props.label && (
          <label
            className={`${props.labelClassName} text-sm leading-6 text-text_base`}
          >
            {props.label}
            {props.required && <span className="text-danger">*</span>}
          </label>
        )}
        {props.forgot && (
          <Link
            href={props.admin ? "/admin/forgot-password" : "/forgot-password"}
            className="text-sm leading-6 text-primary"
            tabIndex={3}
          >
            Forgot password?
          </Link>
        )}
      </div>
      <div className={`relative ${props.innerClass ?? ""}`}>
        {props.withCustom ? (
          <input
            data-cy={props.data_cy}
            disabled={props.disabled}
            onChange={props.onChange}
            value={props.value}
            maxLength={props.maxLength}
            autoComplete="off"
            className={`!pt-0 !pb-0 rounded-md !border bg-white text-text_base shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-text_base-300 placeholder:opacity-100 focus:!border-primary focus:ring-primary/10 focus:bg-primary-50 ${
              props.type === "password" && "pr-10"
            } ${props.className} ${
              props.rules?.errors[props.rules?.name]
                ? "!border-danger"
                : "!border-border-base"
            }`}
            placeholder={props.placeholder}
            type={
              props.type === "password"
                ? showPassword
                  ? "text"
                  : "password"
                : props.type
            }
          />
        ) : (
          <input
            data-cy={props.data_cy}
            disabled={props.disabled}
            {...props.rules?.register(props.rules?.name, props.rules?.rules)}
            autoComplete="off"
            className={`!pt-0 !pb-0 rounded-md !border  bg-white text-text_base shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-text_base-300 placeholder:opacity-100 focus:!border-primary focus:ring-primary/10 focus:bg-primary-50 ${
              props.type === "password" && "pr-10"
            } ${props.className} ${
              props.rules?.errors[props.rules?.name]
                ? "!border-danger"
                : "!border-border-base"
            }`}
            placeholder={props.placeholder}
            type={
              props.type === "password"
                ? showPassword
                  ? "text"
                  : "password"
                : props.type
            }
            // error={props.rules?.errors[props.rules?.name]}
          />
        )}

        {props.type === "password" ? (
          !showPassword ? (
            <svg
              width="20"
              height="20"
              viewBox="0 0 18 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-3 top-[10px]"
              onClick={() => setShowPassword(!showPassword)}
              role="button"
              data-cy="eye-icon"
            >
              <path
                d="M9.00023 0.25C13.0443 0.25 16.4088 3.15982 17.1142 7C16.4088 10.8401 13.0443 13.75 9.00023 13.75C4.95609 13.75 1.59161 10.8401 0.88623 7C1.59161 3.15982 4.95609 0.25 9.00023 0.25ZM9.00023 12.25C12.1769 12.25 14.8952 10.039 15.5833 7C14.8952 3.96102 12.1769 1.75 9.00023 1.75C5.82345 1.75 3.10517 3.96102 2.41709 7C3.10517 10.039 5.82345 12.25 9.00023 12.25ZM9.00023 10.375C7.13624 10.375 5.6252 8.86398 5.6252 7C5.6252 5.13604 7.13624 3.625 9.00023 3.625C10.8641 3.625 12.3752 5.13604 12.3752 7C12.3752 8.86398 10.8641 10.375 9.00023 10.375ZM9.00023 8.875C10.0358 8.875 10.8752 8.03552 10.8752 7C10.8752 5.96448 10.0358 5.125 9.00023 5.125C7.9647 5.125 7.1252 5.96448 7.1252 7C7.1252 8.03552 7.9647 8.875 9.00023 8.875Z"
                fill="#ACACAC"
              />
            </svg>
          ) : (
            <svg
              width="20"
              height="20"
              aria-hidden="true"
              fill="none"
              strokeWidth={2}
              stroke="#ACACAC"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-3 top-[10px]"
              onClick={() => setShowPassword(!showPassword)}
              role="button"
            >
              <path
                d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )
        ) : null}
      </div>
      {props.rules?.errors[props.rules?.name] && (
        <div className="mt-1 text-xs text-danger" data-cy="invalid-feedback">
          {props.rules?.errors[props.rules?.name]?.message && (
            <>{props.rules?.errors[props.rules?.name]?.message}</>
          )}
        </div>
      )}
    </div>
  );
}
