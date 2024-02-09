"use client";
/*
 * Documentation:
 * Tabs — https://app.subframe.com/library?component=Tabs_e1ad5091-8ad8-4319-b1f7-3e47f0256c20
 */

import * as SubframeCore from "@subframe/core";
import React from "react";

interface ItemProps extends React.HTMLAttributes<HTMLDivElement> {
  checked?: boolean;
  children?: string;
  icon?: SubframeCore.IconName;
  className?: string;
}

const Item = React.forwardRef<HTMLElement, ItemProps>(function Item(
  {
    checked = false,
    children = "Details",
    icon = null,
    className,
    ...otherProps
  }: ItemProps,
  ref
) {
  return (
    <div
      className={SubframeCore.twClassNames(
        "group/d5612535 flex cursor-pointer items-center justify-center gap-1.5 border-b-2 border-solid border-neutral-200 pt-2 pr-4 pb-2 pl-4 hover:border-b-2 hover:border-solid hover:border-neutral-300",
        {
          "border-b-2 border-solid border-brand-500 hover:border-b-2 hover:border-solid hover:border-brand-500":
            checked,
        },
        className
      )}
      ref={ref as any}
      {...otherProps}
    >
      <SubframeCore.Icon
        className={SubframeCore.twClassNames(
          "text-body font-body text-neutral-500 group-hover/d5612535:text-neutral-600",
          { "text-brand-600 group-hover/d5612535:text-brand-600": checked }
        )}
        name={icon}
      />
      {children ? (
        <span
          className={SubframeCore.twClassNames(
            "text-body-bold font-body-bold text-neutral-500 group-hover/d5612535:text-neutral-600",
            { "text-brand-600 group-hover/d5612535:text-brand-600": checked }
          )}
        >
          {children}
        </span>
      ) : null}
    </div>
  );
});

interface TabsRootProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

const TabsRoot = React.forwardRef<HTMLElement, TabsRootProps>(function TabsRoot(
  { children, className, ...otherProps }: TabsRootProps,
  ref
) {
  return (
    <div
      className={SubframeCore.twClassNames(
        "flex w-full flex-col items-start gap-2",
        className
      )}
      ref={ref as any}
      {...otherProps}
    >
      <div className="flex h-full w-full grow shrink-0 basis-0 items-start">
        <div className="flex h-full items-start">{children}</div>
        <div className="flex h-full w-full grow shrink-0 basis-0 flex-col items-start gap-2 border-b-2 border-solid border-neutral-border" />
      </div>
    </div>
  );
});

export const Tabs = Object.assign(TabsRoot, {
  Item,
});
