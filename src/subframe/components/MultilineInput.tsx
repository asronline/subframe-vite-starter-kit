"use client";
/*
 * Documentation:
 * Multiline Input — https://app.subframe.com/library?component=Multiline+Input_4ec05ee8-8f1c-46b2-b863-5419aa7f5cce
 */

import classNames from "classnames";
import * as SubframeCore from "@subframe/core";
import React from "react";

interface InputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder?: string;
  className?: string;
}

const Input = React.forwardRef<HTMLElement, InputProps>(function Input(
  { placeholder = "", className, ...otherProps }: InputProps,
  ref
) {
  return (
    <textarea
      className={SubframeCore.twClassNames(
        "h-full min-h-[32px] w-full border-none bg-transparent pt-1.5 pr-2 pb-1.5 pl-2 text-body font-body text-default-font outline-none",
        className
      )}
      placeholder={placeholder}
      ref={ref as any}
      {...otherProps}
    />
  );
});

interface MultilineInputRootProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  label?: string;
  children?: React.ReactNode;
  errorText?: string;
  error?: boolean;
  className?: string;
}

const MultilineInputRoot = React.forwardRef<
  HTMLElement,
  MultilineInputRootProps
>(function MultilineInputRoot(
  {
    label = "",
    children,
    errorText = "",
    error = false,
    className,
    ...otherProps
  }: MultilineInputRootProps,
  ref
) {
  return (
    <label
      className={SubframeCore.twClassNames(
        "group/4ec05ee8 flex flex-col items-start gap-0.5",
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
          "flex h-full w-full grow shrink-0 basis-0 flex-col items-start gap-0.5 rounded-md border border-solid border-neutral-border group-focus-within/4ec05ee8:border group-focus-within/4ec05ee8:border-solid group-focus-within/4ec05ee8:border-brand-primary",
          { "border border-solid border-error-500": error }
        )}
      >
        <div className="flex h-full w-full grow shrink-0 basis-0 flex-col items-start gap-1">
          {children}
        </div>
      </div>
      {errorText ? (
        <span className="text-body font-body text-error-800">{errorText}</span>
      ) : null}
    </label>
  );
});

export const MultilineInput = Object.assign(MultilineInputRoot, {
  Input,
});
