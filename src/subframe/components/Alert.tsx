"use client";
/*
 * Documentation:
 * Alert — https://app.subframe.com/library?component=Alert_3a65613d-d546-467c-80f4-aaba6a7edcd5
 */

import * as SubframeCore from "@subframe/core";
import React from "react";

interface AlertRootProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "Neutral" | "Success" | "Error" | "Warning";
  icon?: SubframeCore.IconName;
  title?: string;
  description?: string;
  className?: string;
}

const AlertRoot = React.forwardRef<HTMLElement, AlertRootProps>(
  function AlertRoot(
    {
      variant = "Neutral",
      icon = "FeatherInfo",
      title = "We just released something new!",
      description = "Check out all the latest changes in your profile.",
      className,
      ...otherProps
    }: AlertRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeCore.twClassNames(
          "group/3a65613d flex w-full flex-col items-start gap-2 rounded-md border border-solid border-neutral-border bg-default-background pt-4 pr-4 pb-4 pl-4",
          {
            "border border-solid border-warning-300 bg-warning-50":
              variant === "Warning",
            "border border-solid border-error-300 bg-error-50":
              variant === "Error",
            "border border-solid border-success-400 bg-success-50":
              variant === "Success",
          },
          className
        )}
        ref={ref as any}
        {...otherProps}
      >
        <div className="flex items-start gap-2">
          <SubframeCore.Icon
            className={SubframeCore.twClassNames(
              "text-[20px] font-[500] leading-[28px] text-neutral-800",
              {
                "text-warning-900": variant === "Warning",
                "text-error-900": variant === "Error",
                "text-success-900": variant === "Success",
              }
            )}
            name={icon}
          />
          <div className="flex flex-col items-start gap-0.5">
            {title ? (
              <span
                className={SubframeCore.twClassNames(
                  "text-body-bold font-body-bold text-neutral-800",
                  {
                    "text-warning-900": variant === "Warning",
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
                    "text-warning-900": variant === "Warning",
                    "text-error-900": variant === "Error",
                    "text-body font-body text-success-900":
                      variant === "Success",
                  }
                )}
              >
                {description}
              </span>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
);

export const Alert = AlertRoot;
