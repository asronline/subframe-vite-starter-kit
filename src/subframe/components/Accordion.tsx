"use client";
/*
 * Documentation:
 * Accordion — https://app.subframe.com/library?component=Accordion_d2e81e20-863a-4027-826a-991d8910efd9
 */

import classNames from "classnames";
import * as SubframeCore from "@subframe/core";
import React from "react";

interface ChevronProps
  extends React.ComponentProps<typeof SubframeCore.Collapsible.Chevron> {
  className?: string;
}

const Chevron = React.forwardRef<HTMLElement, ChevronProps>(function Chevron(
  { className, ...otherProps }: ChevronProps,
  ref
) {
  return (
    <SubframeCore.Collapsible.Chevron {...otherProps}>
      <SubframeCore.Icon
        className={SubframeCore.twClassNames(
          "text-body font-body text-default-font",
          className
        )}
        name="FeatherChevronDown"
        ref={ref as any}
      />
    </SubframeCore.Collapsible.Chevron>
  );
});

interface ContentProps
  extends React.ComponentProps<typeof SubframeCore.Collapsible.Content> {
  children?: React.ReactNode;
  className?: string;
}

const Content = React.forwardRef<HTMLElement, ContentProps>(function Content(
  { children, className, ...otherProps }: ContentProps,
  ref
) {
  return (
    <SubframeCore.Collapsible.Content asChild={true} {...otherProps}>
      <div
        className={SubframeCore.twClassNames(
          "flex w-full flex-col items-start gap-2",
          className
        )}
        ref={ref as any}
      >
        {children}
      </div>
    </SubframeCore.Collapsible.Content>
  );
});

interface TriggerProps
  extends React.ComponentProps<typeof SubframeCore.Collapsible.Trigger> {
  children?: React.ReactNode;
  className?: string;
}

const Trigger = React.forwardRef<HTMLElement, TriggerProps>(function Trigger(
  { children, className, ...otherProps }: TriggerProps,
  ref
) {
  return (
    <SubframeCore.Collapsible.Trigger asChild={true} {...otherProps}>
      <div
        className={SubframeCore.twClassNames(
          "flex w-full cursor-pointer flex-col items-start gap-2",
          className
        )}
        ref={ref as any}
      >
        {children}
      </div>
    </SubframeCore.Collapsible.Trigger>
  );
});

interface AccordionRootProps
  extends React.ComponentProps<typeof SubframeCore.Collapsible.Root> {
  trigger?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

const AccordionRoot = React.forwardRef<HTMLElement, AccordionRootProps>(
  function AccordionRoot(
    { trigger, children, className, ...otherProps }: AccordionRootProps,
    ref
  ) {
    return (
      <SubframeCore.Collapsible.Root asChild={true} {...otherProps}>
        <div
          className={SubframeCore.twClassNames(
            "group/d2e81e20 flex w-full flex-col items-start rounded-md",
            className
          )}
          ref={ref as any}
        >
          <Trigger>
            <div className="flex h-full w-full grow shrink-0 basis-0 flex-col items-start group-data-[state=open]/d2e81e20:h-auto group-data-[state=open]/d2e81e20:w-full group-data-[state=open]/d2e81e20:flex-none">
              {trigger}
            </div>
          </Trigger>
          <Content>
            <div className="flex h-full w-full grow shrink-0 basis-0 flex-col items-start">
              {children}
            </div>
          </Content>
        </div>
      </SubframeCore.Collapsible.Root>
    );
  }
);

export const Accordion = Object.assign(AccordionRoot, {
  Chevron,
  Content,
  Trigger,
});