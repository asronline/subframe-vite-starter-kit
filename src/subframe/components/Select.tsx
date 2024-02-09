"use client";
/*
 * Documentation:
 * Select — https://app.subframe.com/library?component=Select_bb88f90b-8c43-4b73-9c2f-3558ce7838f3
 */

import * as SubframeCore from "@subframe/core";
import React from "react";

interface ItemProps
  extends React.ComponentProps<typeof SubframeCore.Select.Item> {
  value: string;
  className?: string;
}

const Item = React.forwardRef<HTMLElement, ItemProps>(function Item(
  { value = "Option 1", className, ...otherProps }: ItemProps,
  ref
) {
  return (
    <SubframeCore.Select.Item value={value} {...otherProps}>
      <div
        className={SubframeCore.twClassNames(
          "group/969e345b flex h-8 w-full cursor-pointer items-center gap-1 pr-3 pl-3 hover:bg-neutral-100 data-[highlighted]:bg-neutral-100",
          className
        )}
        ref={ref as any}
      >
        {value ? (
          <span className="w-full grow shrink-0 basis-0 text-body font-body text-default-font">
            {value}
          </span>
        ) : null}
        <SubframeCore.Icon
          className="hidden text-body font-body text-default-font group-hover/969e345b:hidden group-data-[state=checked]/969e345b:inline-flex"
          name="FeatherCheck"
        />
      </div>
    </SubframeCore.Select.Item>
  );
});

interface TriggerValueProps
  extends React.ComponentProps<typeof SubframeCore.Select.Value> {
  placeholder?: string;
  className?: string;
}

const TriggerValue = React.forwardRef<HTMLElement, TriggerValueProps>(
  function TriggerValue(
    {
      placeholder = "Make a selection ...",
      className,
      ...otherProps
    }: TriggerValueProps,
    ref
  ) {
    return (
      <SubframeCore.Select.Value
        className={SubframeCore.twClassNames(
          "w-full text-body font-body text-default-font",
          className
        )}
        ref={ref as any}
        placeholder={placeholder}
        {...otherProps}
      >
        Selected value
      </SubframeCore.Select.Value>
    );
  }
);

interface ContentProps
  extends React.ComponentProps<typeof SubframeCore.Select.Content> {
  children?: React.ReactNode;
  className?: string;
}

const Content = React.forwardRef<HTMLElement, ContentProps>(function Content(
  { children, className, ...otherProps }: ContentProps,
  ref
) {
  return (
    <SubframeCore.Select.Content asChild={true} {...otherProps}>
      <div
        className={SubframeCore.twClassNames(
          "flex w-full flex-col items-start overflow-hidden rounded-md border border-solid border-neutral-border bg-white pt-1 pb-1 shadow",
          className
        )}
        ref={ref as any}
      >
        {children}
      </div>
    </SubframeCore.Select.Content>
  );
});

interface TriggerProps
  extends React.ComponentProps<typeof SubframeCore.Select.Trigger> {
  placeholder?: string;
  className?: string;
}

const Trigger = React.forwardRef<HTMLElement, TriggerProps>(function Trigger(
  {
    placeholder = "Make a selection...",
    className,
    ...otherProps
  }: TriggerProps,
  ref
) {
  return (
    <SubframeCore.Select.Trigger asChild={true} {...otherProps}>
      <div
        className={SubframeCore.twClassNames(
          "flex h-full w-full cursor-pointer items-center gap-2 rounded-md border border-solid border-neutral-border pr-3.5 pl-3.5",
          className
        )}
        ref={ref as any}
      >
        <Select.TriggerValue placeholder={placeholder} />
        <SubframeCore.Icon
          className="text-body font-body text-default-font"
          name="FeatherChevronDown"
        />
      </div>
    </SubframeCore.Select.Trigger>
  );
});

interface SelectRootProps
  extends React.ComponentProps<typeof SubframeCore.Select.Root> {
  placeholder?: string;
  children?: React.ReactNode;
  size?: "Default" | "Small";
  className?: string;
}

const SelectRoot = React.forwardRef<HTMLElement, SelectRootProps>(
  function SelectRoot(
    {
      placeholder = "Make a selection...",
      children,
      size = "Default",
      className,
      ...otherProps
    }: SelectRootProps,
    ref
  ) {
    return (
      <SubframeCore.Select.Root {...otherProps}>
        <div
          className={SubframeCore.twClassNames(
            "group/bb88f90b flex h-10 flex-col items-start",
            { "h-8 w-auto flex-none": size === "Small" },
            className
          )}
          ref={ref as any}
        >
          <Trigger placeholder={placeholder} />
          <Content>
            <div className="flex h-full w-full grow shrink-0 basis-0 flex-col items-start">
              {children}
            </div>
          </Content>
        </div>
      </SubframeCore.Select.Root>
    );
  }
);

export const Select = Object.assign(SelectRoot, {
  Item,
  TriggerValue,
  Content,
  Trigger,
});
