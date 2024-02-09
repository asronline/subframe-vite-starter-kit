"use client";
/*
 * Documentation:
 * Button — https://app.subframe.com/library?component=Button_3b777358-b86b-40af-9327-891efc6826fe
 */

import * as SubframeCore from "@subframe/core";
import React from "react";

interface ButtonRootProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "Brand Primary"
    | "Brand Secondary"
    | "Brand Tertiary"
    | "Neutral Secondary"
    | "Neutral Tertiary"
    | "Destructive Primary"
    | "Destructive Secondary"
    | "Destructive Tertiary";
  children?: string;
  icon?: SubframeCore.IconName;
  rightIcon?: SubframeCore.IconName;
  size?: "Default" | "Small" | "XSmall";
  loading?: boolean;
  className?: string;
}

const ButtonRoot = React.forwardRef<HTMLElement, ButtonRootProps>(
  function ButtonRoot(
    {
      variant = "Brand Primary",
      children = "",
      icon = null,
      rightIcon = null,
      size = "Default",
      loading = false,
      className,
      type = "button",
      ...otherProps
    }: ButtonRootProps,
    ref
  ) {
    return (
      <button
        className={SubframeCore.twClassNames(
          "group/3b777358 flex h-10 cursor-pointer items-center justify-center gap-2 rounded-md border-none bg-brand-600 pr-4 pl-4 hover:bg-brand-700 active:bg-brand-700 disabled:cursor-default disabled:bg-neutral-200 hover:disabled:cursor-default hover:disabled:bg-neutral-200 active:disabled:cursor-default active:disabled:bg-neutral-200",
          {
            "h-6 w-auto flex-none flex-row gap-1 pt-0 pr-2 pb-0 pl-2":
              size === "XSmall",
            "h-8 w-auto flex-none flex-row gap-1 pt-0 pr-3 pb-0 pl-3":
              size === "Small",
            "bg-transparent hover:bg-error-50 active:bg-error-100":
              variant === "Destructive Tertiary",
            "bg-error-50 hover:bg-error-100 active:bg-error-200":
              variant === "Destructive Secondary",
            "bg-error-600 hover:bg-error-700 active:bg-error-700":
              variant === "Destructive Primary",
            "bg-transparent hover:bg-neutral-50 active:bg-neutral-100":
              variant === "Neutral Tertiary",
            "border border-solid border-neutral-border bg-default-background hover:bg-neutral-50 active:bg-neutral-100":
              variant === "Neutral Secondary",
            "bg-transparent hover:bg-brand-100 active:bg-brand-200":
              variant === "Brand Tertiary",
            "bg-brand-50 hover:bg-brand-100 active:bg-brand-200":
              variant === "Brand Secondary",
          },
          className
        )}
        ref={ref as any}
        type={type}
        {...otherProps}
      >
        <SubframeCore.Icon
          className={SubframeCore.twClassNames(
            "text-[16px] font-[400] leading-[20px] text-white group-disabled/3b777358:text-neutral-400 group-hover/3b777358:group-disabled/3b777358:text-neutral-400 group-active/3b777358:group-disabled/3b777358:text-neutral-400",
            {
              hidden: loading,
              "text-caption font-caption":
                size === "XSmall" || size === "Small",
              "text-error-700":
                variant === "Destructive Tertiary" ||
                variant === "Destructive Secondary",
              "text-neutral-700":
                variant === "Neutral Tertiary" ||
                variant === "Neutral Secondary",
              "text-brand-700":
                variant === "Brand Tertiary" || variant === "Brand Secondary",
            }
          )}
          name={icon}
        />
        <div
          className={SubframeCore.twClassNames(
            "hidden h-4 w-4 flex-none items-center justify-center gap-2",
            {
              flex: loading,
              "h-3 w-3 flex-none": size === "XSmall" || size === "Small",
            }
          )}
        >
          <SubframeCore.Loader
            className={SubframeCore.twClassNames(
              "text-body font-body text-white group-disabled/3b777358:text-neutral-400",
              {
                "inline-block": loading,
                "text-caption font-caption":
                  size === "XSmall" || size === "Small",
                "text-error-800":
                  variant === "Destructive Tertiary" ||
                  variant === "Destructive Secondary",
                "text-neutral-700":
                  variant === "Neutral Tertiary" ||
                  variant === "Neutral Secondary",
                "text-brand-700":
                  variant === "Brand Tertiary" || variant === "Brand Secondary",
              }
            )}
          />
        </div>
        {children ? (
          <span
            className={SubframeCore.twClassNames(
              "text-body-bold font-body-bold text-white group-disabled/3b777358:text-neutral-400",
              {
                "text-caption-bold font-caption-bold":
                  size === "XSmall" || size === "Small",
                "text-error-700": variant === "Destructive Tertiary",
                "text-error-800": variant === "Destructive Secondary",
                "text-neutral-700":
                  variant === "Neutral Tertiary" ||
                  variant === "Neutral Secondary",
                "text-brand-700":
                  variant === "Brand Tertiary" || variant === "Brand Secondary",
              }
            )}
          >
            {children}
          </span>
        ) : null}
        <SubframeCore.Icon
          className={SubframeCore.twClassNames(
            "text-[16px] font-[400] leading-[20px] text-white group-disabled/3b777358:text-neutral-400",
            {
              "text-caption-bold font-caption-bold":
                size === "XSmall" || size === "Small",
              "text-error-700": variant === "Destructive Tertiary",
              "text-error-800": variant === "Destructive Secondary",
              "text-neutral-700":
                variant === "Neutral Tertiary" ||
                variant === "Neutral Secondary",
              "text-brand-700":
                variant === "Brand Tertiary" || variant === "Brand Secondary",
            }
          )}
          name={rightIcon}
        />
      </button>
    );
  }
);

export const Button = ButtonRoot;
