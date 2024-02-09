"use client";
/*
 * Documentation:
 * Breadcrumb — https://app.subframe.com/library?component=Breadcrumb_fd1b7b4a-ddc4-402a-ab31-dbe6a075e17c
 */

import classNames from "classnames";
import * as SubframeCore from "@subframe/core";
import React from "react";

interface ItemProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: string;
  size?: "Default" | "Subheader" | "Section Header" | "Header";
  active?: boolean;
  className?: string;
}

const Item = React.forwardRef<HTMLElement, ItemProps>(function Item(
  {
    children = "Breadcrumb Item",
    size = "Default",
    active = false,
    className,
    ...otherProps
  }: ItemProps,
  ref
) {
  return children ? (
    <span
      className={SubframeCore.twClassNames(
        "group/1454df40 line-clamp-1 cursor-pointer break-words text-body font-body text-subtext-color hover:text-default-font",
        {
          "text-default-font": active,
          "text-heading-1 font-heading-1": size === "Header",
          "text-heading-2 font-heading-2": size === "Section Header",
          "text-heading-3 font-heading-3": size === "Subheader",
        },
        className
      )}
      ref={ref as any}
      {...otherProps}
    >
      {children}
    </span>
  ) : null;
});

interface DividerProps
  extends SubframeCore.TypescriptHelpers.Optional<
    React.ComponentProps<typeof SubframeCore.Icon>,
    "name"
  > {
  variant?: "Default" | "Subheader" | "Section Header" | "Header";
  className?: string;
}

const Divider = React.forwardRef<HTMLElement, DividerProps>(function Divider(
  { variant = "Default", className, ...otherProps }: DividerProps,
  ref
) {
  return (
    <SubframeCore.Icon
      className={SubframeCore.twClassNames(
        "group/36e17780 text-body font-body text-subtext-color",
        {
          "text-heading-1 font-heading-1": variant === "Header",
          "text-heading-2 font-heading-2": variant === "Section Header",
          "text-heading-3 font-heading-3": variant === "Subheader",
        },
        className
      )}
      name="FeatherChevronRight"
      ref={ref as any}
      {...otherProps}
    />
  );
});

interface BreadcrumbRootProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

const BreadcrumbRoot = React.forwardRef<HTMLElement, BreadcrumbRootProps>(
  function BreadcrumbRoot(
    { children, className, ...otherProps }: BreadcrumbRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeCore.twClassNames(
          "flex items-center gap-2",
          className
        )}
        ref={ref as any}
        {...otherProps}
      >
        {children}
      </div>
    );
  }
);

export const Breadcrumb = Object.assign(BreadcrumbRoot, {
  Item,
  Divider,
});
