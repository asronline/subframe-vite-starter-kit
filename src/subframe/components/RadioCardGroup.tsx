"use client";
/*
 * Documentation:
 * Radio Card Group — https://app.subframe.com/library?component=Radio+Card+Group_6d5193b8-6043-4dc1-aad5-7f902ef872df
 * Icon with background — https://app.subframe.com/library?component=Icon+with+background_c5d68c0e-4c0c-4cff-8d8c-6ff334859b3a
 */

import classNames from "classnames";
import * as SubframeCore from "@subframe/core";
import React from "react";
import { IconWithBackground } from "./IconWithBackground";

interface RadioCardProps
  extends React.ComponentProps<typeof SubframeCore.RadioGroup.Item> {
  children?: React.ReactNode;
  className?: string;
}

const RadioCard = React.forwardRef<HTMLElement, RadioCardProps>(
  function RadioCard(
    { children, className, ...otherProps }: RadioCardProps,
    ref
  ) {
    return (
      <SubframeCore.RadioGroup.Item asChild={true} {...otherProps}>
        <button
          className={SubframeCore.twClassNames(
            "group/502d4919 flex cursor-pointer flex-col items-start gap-2 rounded-md border border-solid border-neutral-200 bg-default-background pt-3 pr-3 pb-3 pl-3 hover:border hover:border-solid hover:border-neutral-300 disabled:cursor-default disabled:bg-neutral-50 aria-[checked=true]:border aria-[checked=true]:border-solid aria-[checked=true]:border-brand-primary",
            className
          )}
          ref={ref as any}
        >
          <div className="flex w-full items-start gap-2">
            <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-2">
              {children}
            </div>
            <div className="flex items-start gap-2 pt-0.5">
              <div className="flex h-4 w-4 flex-none flex-col items-center justify-center gap-2 rounded-full border border-solid border-neutral-border group-disabled/502d4919:border group-disabled/502d4919:border-solid group-disabled/502d4919:border-neutral-200 group-aria-[checked=true]/502d4919:border group-aria-[checked=true]/502d4919:border-solid group-aria-[checked=true]/502d4919:border-brand-primary group-aria-[checked=true]/502d4919:bg-brand-primary">
                <SubframeCore.Icon
                  className="hidden text-caption-bold font-caption-bold text-white group-aria-[checked=true]/502d4919:inline-flex"
                  name="FeatherCheck"
                />
              </div>
            </div>
          </div>
        </button>
      </SubframeCore.RadioGroup.Item>
    );
  }
);

interface RadioCardGroupRootProps
  extends React.ComponentProps<typeof SubframeCore.RadioGroup.Root> {
  children?: React.ReactNode;
  className?: string;
}

const RadioCardGroupRoot = React.forwardRef<
  HTMLElement,
  RadioCardGroupRootProps
>(function RadioCardGroupRoot(
  { children, className, ...otherProps }: RadioCardGroupRootProps,
  ref
) {
  return (
    <SubframeCore.RadioGroup.Root asChild={true} {...otherProps}>
      <div
        className={SubframeCore.twClassNames(
          "flex items-start gap-2",
          className
        )}
        ref={ref as any}
      >
        {children}
      </div>
    </SubframeCore.RadioGroup.Root>
  );
});

export const RadioCardGroup = Object.assign(RadioCardGroupRoot, {
  RadioCard,
});
