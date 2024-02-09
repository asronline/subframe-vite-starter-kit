"use client";
/*
 * Documentation:
 * Card — https://app.subframe.com/library?component=Card_a996a382-9ef8-4be3-9b9e-87b2d5bab5e5
 * Tooltip — https://app.subframe.com/library?component=Tooltip_ccebd1e9-f6ac-4737-8376-0dfacd90c9f3
 * Icon with background — https://app.subframe.com/library?component=Icon+with+background_c5d68c0e-4c0c-4cff-8d8c-6ff334859b3a
 * Button — https://app.subframe.com/library?component=Button_3b777358-b86b-40af-9327-891efc6826fe
 */

import * as SubframeCore from "@subframe/core";
import React from "react";
import { Tooltip } from "./Tooltip";
import { IconWithBackground } from "./IconWithBackground";
import { Button } from "./Button";

interface CardRootProps extends React.HTMLAttributes<HTMLDivElement> {
  text?: string;
  text3?: string;
  variant?: "Default";
  image?: string;
  className?: string;
}

const CardRoot = React.forwardRef<HTMLElement, CardRootProps>(function CardRoot(
  {
    text = "Voice name",
    text3 = "Description",
    variant = "Default",
    image = "https://res.cloudinary.com/demo/video/upload/v1707459810/elevenorb_orgmhf.mp4",
    className,
    ...otherProps
  }: CardRootProps,
  ref
) {
  return (
    <div
      className={SubframeCore.twClassNames(
        "transition ease-in-out delay-150 hover:drop-shadow-xl duration-300 flex h-full w-full flex-col items-start gap-4 rounded-md border border-solid border-neutral-border bg-default-background pt-6 pr-6 pb-6 pl-6 shadow",
        className
      )}
      ref={ref as any}
      {...otherProps}
    >
      <div className="flex w-full items-center gap-2">
        <img
          className="h-10 w-10 flex-none object-cover [clip-path:circle()]"
          src={image}
        />
        {text ? (
          <span className="line-clamp-1 w-full grow shrink-0 basis-0 text-body-bold font-body-bold text-default-font">
            {text}
          </span>
        ) : null}
        <SubframeCore.Tooltip.Provider>
          <SubframeCore.Tooltip.Root>
            <SubframeCore.Tooltip.Trigger asChild={true}>
              <IconWithBackground
                variant="Neutral"
                size="Large"
                icon="FeatherInfo"
              />
            </SubframeCore.Tooltip.Trigger>
            <SubframeCore.Tooltip.Portal>
              <SubframeCore.Tooltip.Content
                side="bottom"
                align="center"
                sideOffset={4}
                asChild={true}
              >
                <Tooltip>Copy ID</Tooltip>
              </SubframeCore.Tooltip.Content>
            </SubframeCore.Tooltip.Portal>
          </SubframeCore.Tooltip.Root>
        </SubframeCore.Tooltip.Provider>
      </div>
      {text3 ? (
        <span className="line-clamp-3 w-full text-body font-body text-subtext-color">
          {text3}
        </span>
      ) : null}
      <div className="flex h-full w-full grow shrink-0 basis-0 items-center justify-center gap-2">
        <Button
          className="h-10 w-full grow shrink-0 basis-0"
          variant="Neutral Secondary"
          icon="FeatherVolume2"
          rightIcon={null}
        >
          Use
        </Button>
        <Button
          className="h-10 w-full grow shrink-0 basis-0"
          variant="Neutral Secondary"
          icon="FeatherEdit2"
          rightIcon={null}
        >
          Edit
        </Button>
        <Button
          className="h-10 shrink-0 w-auto"
          variant="Neutral Secondary"
          icon="FeatherTrash"
          rightIcon={null}
        ></Button>
      </div>
    </div>
  );
});

export const Card = CardRoot;
