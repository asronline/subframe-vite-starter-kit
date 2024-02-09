"use client";
/*
 * Documentation:
 * Checkbox — https://app.subframe.com/library?component=Checkbox_3816e3b5-c48c-499b-b45e-0777c6972523
 */

import * as SubframeCore from "@subframe/core";
import React from "react";

interface CheckboxRootProps
  extends React.ComponentProps<typeof SubframeCore.Checkbox.Root> {
  label?: string;
  className?: string;
}

const CheckboxRoot = React.forwardRef<HTMLElement, CheckboxRootProps>(
  function CheckboxRoot(
    { label = "", className, ...otherProps }: CheckboxRootProps,
    ref
  ) {
    return (
      <SubframeCore.Checkbox.Root asChild={true} {...otherProps}>
        <div
          className={SubframeCore.twClassNames(
            "group/3816e3b5 flex cursor-pointer items-center gap-1.5",
            className
          )}
          ref={ref as any}
        >
          <div className="flex h-4 w-4 flex-none flex-col items-center justify-center gap-2 rounded-sm border border-solid border-neutral-400 group-aria-[checked=true]/3816e3b5:border group-aria-[checked=true]/3816e3b5:border-solid group-aria-[checked=true]/3816e3b5:border-brand-600 group-aria-[checked=true]/3816e3b5:bg-brand-600">
            <SubframeCore.Icon
              className="hidden text-body font-body text-brand-600 group-aria-[checked=true]/3816e3b5:inline-flex group-aria-[checked=true]/3816e3b5:text-[14px] group-aria-[checked=true]/3816e3b5:font-[600] group-aria-[checked=true]/3816e3b5:leading-[14px] group-aria-[checked=true]/3816e3b5:text-white"
              name="FeatherCheck"
            />
          </div>
          {label ? (
            <span className="text-body font-body text-default-font">
              {label}
            </span>
          ) : null}
        </div>
      </SubframeCore.Checkbox.Root>
    );
  }
);

export const Checkbox = CheckboxRoot;
