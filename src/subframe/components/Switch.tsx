"use client";
/*
 * Documentation:
 * Switch — https://app.subframe.com/library?component=Switch_7a464794-9ea9-4040-b1de-5bfb2ce599d9
 */

import * as SubframeCore from "@subframe/core";
import React from "react";

interface ThumbProps
  extends React.ComponentProps<typeof SubframeCore.Switch.Thumb> {
  className?: string;
}

const Thumb = React.forwardRef<HTMLElement, ThumbProps>(function Thumb(
  { className, ...otherProps }: ThumbProps,
  ref
) {
  return (
    <SubframeCore.Switch.Thumb asChild={true} {...otherProps}>
      <div
        className={SubframeCore.twClassNames(
          "flex h-3.5 w-3.5 flex-col items-start gap-2 rounded-full bg-brand-600",
          className
        )}
        ref={ref as any}
      />
    </SubframeCore.Switch.Thumb>
  );
});

interface SwitchRootProps
  extends React.ComponentProps<typeof SubframeCore.Switch.Root> {
  children?: React.ReactNode;
  className?: string;
}

const SwitchRoot = React.forwardRef<HTMLElement, SwitchRootProps>(
  function SwitchRoot(
    { children, className, ...otherProps }: SwitchRootProps,
    ref
  ) {
    return (
      <SubframeCore.Switch.Root asChild={true} {...otherProps}>
        <div
          className={SubframeCore.twClassNames(
            "group/7a464794 flex h-5 w-9 cursor-pointer flex-col items-start justify-center gap-2 rounded-full border border-solid border-neutral-border bg-neutral-100 pr-0.5 pl-0.5 hover:border hover:border-solid hover:border-neutral-300 aria-[checked=true]:border aria-[checked=true]:border-solid aria-[checked=true]:border-brand-200 aria-[checked=true]:bg-brand-200",
            className
          )}
          ref={ref as any}
        >
          {children}
        </div>
      </SubframeCore.Switch.Root>
    );
  }
);

export const Switch = Object.assign(SwitchRoot, {
  Thumb,
});
