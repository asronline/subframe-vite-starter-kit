"use client";
/*
 * Documentation:
 * Password Input — https://app.subframe.com/library?component=Password+Input_b3bf0b96-5d85-4550-8f7c-17370f1cd3c4
 */

import * as SubframeCore from "@subframe/core";
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  className?: string;
}

const Input = React.forwardRef<HTMLElement, InputProps>(function Input(
  { placeholder = "", className, ...otherProps }: InputProps,
  ref
) {
  return (
    <input
      className={SubframeCore.twClassNames(
        "h-full w-full border-none bg-transparent text-body font-body text-default-font outline-none",
        className
      )}
      placeholder={placeholder}
      type="password"
      ref={ref as any}
      {...otherProps}
    />
  );
});

interface PasswordInputRootProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  label?: string;
  children?: React.ReactNode;
  errorText?: string;
  icon?: SubframeCore.IconName;
  error?: boolean;
  className?: string;
}

const PasswordInputRoot = React.forwardRef<HTMLElement, PasswordInputRootProps>(
  function PasswordInputRoot(
    {
      label = "",
      children,
      errorText = "",
      icon = null,
      error = false,
      className,
      ...otherProps
    }: PasswordInputRootProps,
    ref
  ) {
    return (
      <label
        className={SubframeCore.twClassNames(
          "group/b3bf0b96 flex flex-col items-start gap-0.5",
          className
        )}
        ref={ref as any}
        {...otherProps}
      >
        {label ? (
          <span className="text-body-bold font-body-bold text-subtext-color">
            {label}
          </span>
        ) : null}
        <div
          className={SubframeCore.twClassNames(
            "flex h-8 w-full flex-none items-center gap-1.5 rounded-md border border-solid border-neutral-border pr-2 pl-2 group-focus-within/b3bf0b96:border group-focus-within/b3bf0b96:border-solid group-focus-within/b3bf0b96:border-brand-primary",
            { "border border-solid border-error-500": error }
          )}
        >
          <SubframeCore.Icon
            className={SubframeCore.twClassNames(
              "text-[16px] font-[400] leading-[20px] text-subtext-color",
              { "text-error-500": error }
            )}
            name={icon}
          />
          <div className="flex h-full w-full grow shrink-0 basis-0 flex-col items-start gap-2">
            {children}
          </div>
        </div>
        {errorText ? (
          <span className="text-body font-body text-error-800">
            {errorText}
          </span>
        ) : null}
      </label>
    );
  }
);

export const PasswordInput = Object.assign(PasswordInputRoot, {
  Input,
});
