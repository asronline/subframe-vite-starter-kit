"use client";
/*
 * Documentation:
 * Eleven Sidebar — https://app.subframe.com/library?component=Eleven+Sidebar_221cad9e-3511-4462-a0b2-140efad3b9fe
 * Tooltip — https://app.subframe.com/library?component=Tooltip_ccebd1e9-f6ac-4737-8376-0dfacd90c9f3
 * Icon Button — https://app.subframe.com/library?component=Icon+Button_af9405b1-8c54-4e01-9786-5aad308224f6
 */

import * as SubframeCore from "@subframe/core";
import React from "react";
import { Tooltip } from "./Tooltip";
import { IconButton } from "./IconButton";

interface ItemProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: SubframeCore.IconName;
  children?: string;
  selected?: boolean;
  className?: string;
}

const Item = React.forwardRef<HTMLElement, ItemProps>(function Item(
  {
    icon = "FeatherHome",
    children = "Overview",
    selected = false,
    className,
    ...otherProps
  }: ItemProps,
  ref
) {
  return (
    <div
      className={SubframeCore.twClassNames(
        "group/4ab92cab flex w-full cursor-pointer items-center gap-2 rounded-md pt-2 pr-3 pb-2 pl-3 hover:bg-neutral-50",
        { "bg-neutral-100": selected },
        className
      )}
      ref={ref as any}
      {...otherProps}
    >
      <div className="flex items-start gap-2 pb-0.5">
        <SubframeCore.Icon
          className={SubframeCore.twClassNames(
            "text-[18px] font-[500] leading-[28px] text-neutral-500 group-hover/4ab92cab:text-neutral-800",
            { "text-neutral-900": selected }
          )}
          name={icon}
        />
      </div>
      {children ? (
        <span
          className={SubframeCore.twClassNames(
            "text-body-bold font-body-bold text-neutral-600 group-hover/4ab92cab:text-neutral-800",
            { "text-neutral-900": selected }
          )}
        >
          {children}
        </span>
      ) : null}
    </div>
  );
});

interface ElevenSidebarRootProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  hideLogo?: boolean;
  logoImage?: string;
  className?: string;
}

const ElevenSidebarRoot = React.forwardRef<HTMLElement, ElevenSidebarRootProps>(
  function ElevenSidebarRoot(
    {
      children,
      hideLogo = false,
      logoImage = "https://res.cloudinary.com/demo/image/upload/v1697145250/subframe-logo_os8p3j.png",
      className,
      ...otherProps
    }: ElevenSidebarRootProps,
    ref
  ) {
    return (
      <nav
        className={SubframeCore.twClassNames(
          "group/221cad9e flex h-full w-48 flex-col items-start gap-6 border-r border-solid border-neutral-border bg-white pt-5",
          className
        )}
        ref={ref as any}
        {...otherProps}
      >
        <div
          className={SubframeCore.twClassNames(
            "flex w-full flex-col items-start gap-2 pr-6 pl-6",
            { hidden: hideLogo }
          )}
        >
          <img
            className="h-full w-full grow shrink-0 basis-0"
            src="https://res.cloudinary.com/demo/image/upload/v1707445765/ElevenLogo_hrq0q0.png"
          />
        </div>
        <div className="flex h-full w-full grow shrink-0 basis-0 flex-col items-start gap-1 pr-3 pl-3">
          <Item icon="FeatherSpeech" selected={false}>
            Speech
          </Item>
          <Item icon="FeatherMic2" selected={true}>
            Voices
          </Item>
          <Item icon="FeatherBook">Projects</Item>
          <Item icon="FeatherLanguages">Dubbing</Item>
        </div>
        <div className="flex h-full w-full grow shrink-0 basis-0 items-end justify-between pr-3 pb-3 pl-3">
          {children}
        </div>
      </nav>
    );
  }
);

export const ElevenSidebar = Object.assign(ElevenSidebarRoot, {
  Item,
});
