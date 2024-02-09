"use client";
/*
 * Documentation:
 * Text Input — https://app.subframe.com/library?component=Text+Input_be48ca43-f8e7-4c0e-8870-d219ea11abfe
 */

import classNames from "classnames";
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
      ref={ref as any}
      {...otherProps}
    />
  );
});

interface TextInputRootProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  label?: string;
  children?: React.ReactNode;
  errorText?: string;
  error?: boolean;
  icon?: SubframeCore.IconName;
  className?: string;
}

const TextInputRoot = React.forwardRef<HTMLElement, TextInputRootProps>(
  function TextInputRoot(
    {
      label = "",
      children,
      errorText = "",
      error = false,
      icon = null,
      className,
      ...otherProps
    }: TextInputRootProps,
    ref
  ) {
    return (
      <label
        className={SubframeCore.twClassNames(
          "group/be48ca43 flex flex-col items-start gap-0.5",
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
            "flex h-8 w-full flex-none items-center gap-1.5 rounded-md border border-solid border-neutral-border pr-2 pl-2 group-focus-within/be48ca43:border group-focus-within/be48ca43:border-solid group-focus-within/be48ca43:border-brand-primary",
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
          <div className="flex h-full w-full grow shrink-0 basis-0 flex-col items-start">
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

export const TextInput = Object.assign(TextInputRoot, {
  Input,
});
