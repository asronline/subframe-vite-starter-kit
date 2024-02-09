"use client";
/*
 * Documentation:
 * Tooltip — https://app.subframe.com/library?component=Tooltip_ccebd1e9-f6ac-4737-8376-0dfacd90c9f3
 */

import classNames from "classnames";
import * as SubframeCore from "@subframe/core";
import React from "react";

interface TooltipRootProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: string;
  className?: string;
}

const TooltipRoot = React.forwardRef<HTMLElement, TooltipRootProps>(
  function TooltipRoot(
    {
      children = "Tooltip contents",
      className,
      ...otherProps
    }: TooltipRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeCore.twClassNames(
          "flex flex-col items-start gap-2 rounded-md border border-solid border-neutral-border bg-default-background pt-1 pr-2 pb-1 pl-2 shadow",
          className
        )}
        ref={ref as any}
        {...otherProps}
      >
        {children ? (
          <span className="text-caption font-caption text-default-font">
            {children}
          </span>
        ) : null}
      </div>
    );
  }
);

export const Tooltip = TooltipRoot;
