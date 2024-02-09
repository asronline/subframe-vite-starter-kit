"use client";
/*
 * Documentation:
 * Link Button — https://app.subframe.com/library?component=Link+Button_a4ee726a-774c-4091-8c49-55b659356024
 */

import * as SubframeCore from "@subframe/core";
import React from "react";

interface LinkButtonRootProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?:
    | "Default"
    | "Label"
    | "Label Bold"
    | "Body Bold"
    | "Subheader"
    | "Section Header"
    | "Header";
  icon?: SubframeCore.IconName;
  children?: string;
  className?: string;
}

const LinkButtonRoot = React.forwardRef<HTMLElement, LinkButtonRootProps>(
  function LinkButtonRoot(
    {
      size = "Default",
      icon = "FeatherPlus",
      children = "Label",
      className,
      type = "button",
      ...otherProps
    }: LinkButtonRootProps,
    ref
  ) {
    return (
      <button
        className={SubframeCore.twClassNames(
          "group/a4ee726a flex cursor-pointer items-center gap-1 border-none bg-transparent",
          {
            "flex-row gap-2":
              size === "Header" ||
              size === "Section Header" ||
              size === "Subheader",
          },
          className
        )}
        ref={ref as any}
        type={type}
        {...otherProps}
      >
        <SubframeCore.Icon
          className={SubframeCore.twClassNames(
            "text-body font-body text-subtext-color group-hover/a4ee726a:text-default-font group-disabled/a4ee726a:text-neutral-400",
            {
              "text-heading-1 font-heading-1": size === "Header",
              "text-heading-2 font-heading-2": size === "Section Header",
              "text-heading-3 font-heading-3": size === "Subheader",
              "text-body-bold font-body-bold": size === "Body Bold",
              "text-caption-bold font-caption-bold": size === "Label Bold",
              "text-caption font-caption": size === "Label",
            }
          )}
          name={icon}
        />
        {children ? (
          <span
            className={SubframeCore.twClassNames(
              "text-body font-body text-subtext-color group-hover/a4ee726a:text-default-font group-disabled/a4ee726a:text-neutral-400",
              {
                "text-heading-1 font-heading-1": size === "Header",
                "text-heading-2 font-heading-2": size === "Section Header",
                "text-heading-3 font-heading-3": size === "Subheader",
                "text-body-bold font-body-bold": size === "Body Bold",
                "text-caption-bold font-caption-bold": size === "Label Bold",
                "text-caption font-caption": size === "Label",
              }
            )}
          >
            {children}
          </span>
        ) : null}
      </button>
    );
  }
);

export const LinkButton = LinkButtonRoot;
