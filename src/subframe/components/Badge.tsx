"use client";
/*
 * Documentation:
 * Badge — https://app.subframe.com/library?component=Badge_97bdb082-1124-4dd7-a335-b14b822d0157
 */

import * as SubframeCore from "@subframe/core";
import React from "react";

interface BadgeRootProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "Brand" | "Neutral" | "Error" | "Warning" | "Success";
  children?: string;
  icon?: SubframeCore.IconName;
  className?: string;
}

const BadgeRoot = React.forwardRef<HTMLElement, BadgeRootProps>(
  function BadgeRoot(
    {
      variant = "Brand",
      children = "Badge",
      icon = null,
      className,
      ...otherProps
    }: BadgeRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeCore.twClassNames(
          "group/97bdb082 flex h-5 items-center gap-1 rounded-full border border-solid border-brand-200 bg-brand-50 pr-2.5 pl-2.5",
          {
            "border border-solid border-success-200 bg-success-50":
              variant === "Success",
            "border border-solid border-warning-200 bg-warning-50":
              variant === "Warning",
            "border border-solid border-error-200 bg-error-50":
              variant === "Error",
            "border border-solid border-neutral-200 bg-neutral-50":
              variant === "Neutral",
          },
          className
        )}
        ref={ref as any}
        {...otherProps}
      >
        <SubframeCore.Icon
          className={SubframeCore.twClassNames(
            "text-caption font-caption text-brand-800",
            {
              "text-success-800": variant === "Success",
              "text-warning-800": variant === "Warning",
              "text-error-800": variant === "Error",
              "text-neutral-800": variant === "Neutral",
            }
          )}
          name={icon}
        />
        {children ? (
          <span
            className={SubframeCore.twClassNames(
              "text-caption font-caption text-brand-800",
              {
                "text-success-800": variant === "Success",
                "text-warning-800": variant === "Warning",
                "text-error-800": variant === "Error",
                "text-neutral-800": variant === "Neutral",
              }
            )}
          >
            {children}
          </span>
        ) : null}
      </div>
    );
  }
);

export const Badge = BadgeRoot;
