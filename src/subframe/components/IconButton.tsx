"use client";
/*
 * Documentation:
 * Icon Button — https://app.subframe.com/library?component=Icon+Button_af9405b1-8c54-4e01-9786-5aad308224f6
 */

import classNames from "classnames";
import * as SubframeCore from "@subframe/core";
import React from "react";

interface IconButtonRootProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "Default"
    | "Branded"
    | "Contained"
    | "Brand Contained"
    | "Destructive"
    | "Destructive Contained";
  icon?: SubframeCore.IconName;
  size?: "Default" | "Small" | "XSmall";
  rounded?: boolean;
  loading?: boolean;
  className?: string;
}

const IconButtonRoot = React.forwardRef<HTMLElement, IconButtonRootProps>(
  function IconButtonRoot(
    {
      variant = "Default",
      icon = "FeatherPlus",
      size = "Default",
      rounded = false,
      loading = false,
      className,
      type = "button",
      ...otherProps
    }: IconButtonRootProps,
    ref
  ) {
    return (
      <button
        className={SubframeCore.twClassNames(
          "group/af9405b1 flex h-10 w-10 cursor-pointer items-center justify-center gap-2 rounded-md border-none bg-transparent hover:bg-neutral-100 active:bg-neutral-100 disabled:cursor-default disabled:bg-neutral-200",
          {
            "rounded-full": rounded,
            "h-6 w-6 flex-none": size === "XSmall",
            "h-8 w-8 flex-none": size === "Small",
            "bg-error-50 hover:bg-error-100 active:bg-error-100":
              variant === "Destructive Contained",
            "hover:bg-error-100 active:bg-error-100": variant === "Destructive",
            "bg-brand-50 hover:bg-brand-100 active:bg-brand-100":
              variant === "Brand Contained",
            "bg-neutral-100 hover:bg-neutral-200 active:bg-neutral-200":
              variant === "Contained",
            "hover:bg-brand-100 active:bg-brand-100": variant === "Branded",
          },
          className
        )}
        ref={ref as any}
        type={type}
        {...otherProps}
      >
        <SubframeCore.Icon
          className={SubframeCore.twClassNames(
            "text-[20px] font-[400] leading-[20px] text-neutral-700 group-hover/af9405b1:text-neutral-700 group-disabled/af9405b1:text-neutral-400",
            {
              hidden: loading,
              "text-[13px] font-[400] leading-[20px]": size === "XSmall",
              "text-[16px] font-[400] leading-[20px]": size === "Small",
              "text-error-700":
                variant === "Destructive Contained" ||
                variant === "Destructive",
              "text-brand-700":
                variant === "Brand Contained" || variant === "Branded",
            }
          )}
          name={icon}
        />
        <SubframeCore.Loader
          className={SubframeCore.twClassNames(
            "hidden text-[20px] font-[400] leading-[20px] text-neutral-500 group-disabled/af9405b1:text-neutral-400",
            {
              "inline-block": loading,
              "text-[16px] font-[400] leading-[20px]":
                size === "XSmall" || size === "Small",
              "text-brand-600":
                variant === "Brand Contained" || variant === "Branded",
            }
          )}
        />
      </button>
    );
  }
);

export const IconButton = IconButtonRoot;
