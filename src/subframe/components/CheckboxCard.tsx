"use client";
/*
 * Documentation:
 * Checkbox Card — https://app.subframe.com/library?component=Checkbox+Card_de0b4dfb-3946-4702-be52-5678dd71925a
 * Icon with background — https://app.subframe.com/library?component=Icon+with+background_c5d68c0e-4c0c-4cff-8d8c-6ff334859b3a
 */

import classNames from "classnames";
import * as SubframeCore from "@subframe/core";
import React from "react";
import { IconWithBackground } from "./IconWithBackground";

interface CheckboxCardRootProps
  extends React.ComponentProps<typeof SubframeCore.Checkbox.Root> {
  iconSlot?: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
}

const CheckboxCardRoot = React.forwardRef<HTMLElement, CheckboxCardRootProps>(
  function CheckboxCardRoot(
    {
      iconSlot,
      title = "Enable notifications",
      description = "Be in the loop anytime something happens.",
      className,
      ...otherProps
    }: CheckboxCardRootProps,
    ref
  ) {
    return (
      <SubframeCore.Checkbox.Root asChild={true} {...otherProps}>
        <div
          className={SubframeCore.twClassNames(
            "group/de0b4dfb flex cursor-pointer items-center gap-3 rounded-md border border-solid border-neutral-200 pt-3 pr-3 pb-3 pl-3 hover:border hover:border-solid hover:border-neutral-300 aria-[checked=true]:border aria-[checked=true]:border-solid aria-[checked=true]:border-brand-600",
            className
          )}
          ref={ref as any}
        >
          <div className="flex h-full items-center gap-2">{iconSlot}</div>
          <div className="flex w-full grow shrink-0 basis-0 flex-col items-start">
            {title ? (
              <span className="text-body-bold font-body-bold text-default-font">
                {title}
              </span>
            ) : null}
            {description ? (
              <span className="text-caption font-caption text-subtext-color">
                {description}
              </span>
            ) : null}
          </div>
          <div className="flex h-5 w-5 flex-none flex-col items-center justify-center gap-2 rounded-md border border-solid border-neutral-300 group-hover/de0b4dfb:border group-hover/de0b4dfb:border-solid group-hover/de0b4dfb:border-neutral-400 group-aria-[checked=true]/de0b4dfb:border group-aria-[checked=true]/de0b4dfb:border-solid group-aria-[checked=true]/de0b4dfb:border-brand-600 group-aria-[checked=true]/de0b4dfb:bg-brand-600">
            <SubframeCore.Icon
              className="hidden text-[14px] font-[400] leading-[14px] text-white group-aria-[checked=true]/de0b4dfb:inline-flex group-aria-[checked=true]/de0b4dfb:text-[16px] group-aria-[checked=true]/de0b4dfb:font-[400] group-aria-[checked=true]/de0b4dfb:leading-[16px]"
              name="FeatherCheck"
            />
          </div>
        </div>
      </SubframeCore.Checkbox.Root>
    );
  }
);

export const CheckboxCard = CheckboxCardRoot;
