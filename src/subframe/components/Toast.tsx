"use client";
/*
 * Documentation:
 * Toast — https://app.subframe.com/library?component=Toast_2c7966c2-a95d-468a-83fe-bf196b95be7a
 */

import * as SubframeCore from "@subframe/core";
import React from "react";

interface ToastRootProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: SubframeCore.IconName;
  title?: string;
  description?: string;
  variant?: "Default" | "Success" | "Error";
  className?: string;
}

const ToastRoot = React.forwardRef<HTMLElement, ToastRootProps>(
  function ToastRoot(
    {
      icon = null,
      title = "Title of toast",
      description = "Some optional description",
      variant = "Default",
      className,
      ...otherProps
    }: ToastRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeCore.twClassNames(
          "group/2c7966c2 flex w-80 items-start gap-2 rounded-md border border-solid border-neutral-border bg-default-background pt-3 pr-4 pb-3 pl-4 shadow",
          {
            "border border-solid border-error-100 bg-error-50":
              variant === "Error",
            "border border-solid border-success-100 bg-success-50":
              variant === "Success",
          },
          className
        )}
        ref={ref as any}
        {...otherProps}
      >
        <SubframeCore.Icon
          className={SubframeCore.twClassNames(
            "text-[20px] font-[500] leading-[28px] text-default-font",
            {
              "text-error-900": variant === "Error",
              "text-success-900": variant === "Success",
            }
          )}
          name={icon}
        />
        <div className="flex w-full grow shrink-0 basis-0 flex-col items-start">
          {title ? (
            <span
              className={SubframeCore.twClassNames(
                "text-body-bold font-body-bold text-default-font",
                {
                  "text-error-900": variant === "Error",
                  "text-success-900": variant === "Success",
                }
              )}
            >
              {title}
            </span>
          ) : null}
          {description ? (
            <span
              className={SubframeCore.twClassNames(
                "text-body font-body text-neutral-700",
                {
                  "text-error-800": variant === "Error",
                  "text-success-800": variant === "Success",
                }
              )}
            >
              {description}
            </span>
          ) : null}
        </div>
      </div>
    );
  }
);

export const Toast = ToastRoot;
