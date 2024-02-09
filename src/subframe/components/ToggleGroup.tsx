"use client";
/*
 * Documentation:
 * Toggle Group — https://app.subframe.com/library?component=Toggle+Group_2026f10a-e3cc-4c89-80da-a7259acae3b7
 */

import classNames from "classnames";
import * as SubframeCore from "@subframe/core";
import React from "react";

interface ItemProps
  extends React.ComponentProps<typeof SubframeCore.ToggleGroup.Item> {
  children?: string;
  icon?: SubframeCore.IconName;
  className?: string;
}

const Item = React.forwardRef<HTMLElement, ItemProps>(function Item(
  {
    children = "Label",
    icon = "FeatherPlus",
    className,
    ...otherProps
  }: ItemProps,
  ref
) {
  return (
    <SubframeCore.ToggleGroup.Item asChild={true} {...otherProps}>
      <div
        className={SubframeCore.twClassNames(
          "group/56dea6ed flex h-10 cursor-pointer items-center gap-2 bg-white pr-4 pl-4 hover:bg-neutral-50 aria-[checked=true]:bg-brand-50",
          className
        )}
        ref={ref as any}
      >
        <SubframeCore.Icon
          className="text-[16px] font-[600] leading-[20px] text-subtext-color group-hover/56dea6ed:text-default-font group-aria-[checked=true]/56dea6ed:text-brand-700"
          name={icon}
        />
        {children ? (
          <span className="text-body-bold font-body-bold text-subtext-color group-hover/56dea6ed:text-default-font group-aria-[checked=true]/56dea6ed:text-brand-700">
            {children}
          </span>
        ) : null}
      </div>
    </SubframeCore.ToggleGroup.Item>
  );
});

interface ToggleGroupRootProps
  extends React.ComponentProps<typeof SubframeCore.ToggleGroup.Root> {
  children?: React.ReactNode;
  className?: string;
}

const ToggleGroupRoot = React.forwardRef<HTMLElement, ToggleGroupRootProps>(
  function ToggleGroupRoot(
    { children, className, ...otherProps }: ToggleGroupRootProps,
    ref
  ) {
    return (
      <SubframeCore.ToggleGroup.Root asChild={true} {...otherProps}>
        <div
          className={SubframeCore.twClassNames(
            "flex items-start gap-px overflow-hidden rounded-md border border-solid border-neutral-border bg-neutral-border",
            className
          )}
          ref={ref as any}
        >
          {children}
        </div>
      </SubframeCore.ToggleGroup.Root>
    );
  }
);

export const ToggleGroup = Object.assign(ToggleGroupRoot, {
  Item,
});
