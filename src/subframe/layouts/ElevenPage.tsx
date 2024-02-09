"use client";
/*
 * Documentation:
 * ElevenPage — https://app.subframe.com/library?component=ElevenPage_a57b1c43-310a-493f-b807-8cc88e2452cf
 * Dropdown Menu — https://app.subframe.com/library?component=Dropdown+Menu_99951515-459b-4286-919e-a89e7549b43b
 * Icon Button — https://app.subframe.com/library?component=Icon+Button_af9405b1-8c54-4e01-9786-5aad308224f6
 * Eleven Sidebar — https://app.subframe.com/library?component=Eleven+Sidebar_221cad9e-3511-4462-a0b2-140efad3b9fe
 */

import * as SubframeCore from "@subframe/core";
import React from "react";
import { DropdownMenu } from "../components/DropdownMenu";
import { IconButton } from "../components/IconButton";
import { ElevenSidebar } from "../components/ElevenSidebar";

interface ElevenPageRootProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

const ElevenPageRoot = React.forwardRef<HTMLElement, ElevenPageRootProps>(
  function ElevenPageRoot(
    { children, className, ...otherProps }: ElevenPageRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeCore.twClassNames(
          "flex h-screen w-full items-center",
          className
        )}
        ref={ref as any}
        {...otherProps}
      >
        <ElevenSidebar>
          <SubframeCore.DropdownMenu.Root>
            <SubframeCore.DropdownMenu.Trigger asChild={true}>
              <IconButton
                variant="Brand Contained"
                icon="FeatherUser"
                size="Default"
                rounded={false}
                disabled={false}
                loading={false}
              />
            </SubframeCore.DropdownMenu.Trigger>
            <SubframeCore.DropdownMenu.Portal>
              <SubframeCore.DropdownMenu.Content
                side="bottom"
                align="start"
                sideOffset={8}
                asChild={true}
              >
                <DropdownMenu>
                  <DropdownMenu.DropdownItem icon="FeatherUserCircle">
                    Profile
                  </DropdownMenu.DropdownItem>
                  <DropdownMenu.DropdownItem icon="FeatherActivity">
                    Usage
                  </DropdownMenu.DropdownItem>
                  <DropdownMenu.DropdownItem icon="FeatherCircleDollarSign">
                    Share and earn
                  </DropdownMenu.DropdownItem>
                  <div className="flex w-full flex-col items-start pt-0.5 pb-0.5">
                    <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-300" />
                  </div>
                  <DropdownMenu.DropdownItem icon="FeatherLogOut">
                    Sign out
                  </DropdownMenu.DropdownItem>
                </DropdownMenu>
              </SubframeCore.DropdownMenu.Content>
            </SubframeCore.DropdownMenu.Portal>
          </SubframeCore.DropdownMenu.Root>
          <SubframeCore.DropdownMenu.Root>
            <SubframeCore.DropdownMenu.Trigger asChild={true}>
              <IconButton
                variant="Brand Contained"
                icon="FeatherMail"
                size="Default"
                rounded={false}
                disabled={false}
                loading={false}
              />
            </SubframeCore.DropdownMenu.Trigger>
            <SubframeCore.DropdownMenu.Portal>
              <SubframeCore.DropdownMenu.Content
                side="bottom"
                align="start"
                sideOffset={8}
                asChild={true}
              >
                <DropdownMenu>
                  <DropdownMenu.DropdownItem icon={null}>
                    Help center
                  </DropdownMenu.DropdownItem>
                  <DropdownMenu.DropdownItem icon={null}>
                    Community
                  </DropdownMenu.DropdownItem>
                  <DropdownMenu.DropdownItem icon={null}>
                    Join our team
                  </DropdownMenu.DropdownItem>
                </DropdownMenu>
              </SubframeCore.DropdownMenu.Content>
            </SubframeCore.DropdownMenu.Portal>
          </SubframeCore.DropdownMenu.Root>
          <SubframeCore.DropdownMenu.Root>
            <SubframeCore.DropdownMenu.Trigger asChild={true}>
              <IconButton
                variant="Brand Contained"
                icon="FeatherHelpCircle"
                size="Default"
                rounded={false}
                disabled={false}
                loading={false}
              />
            </SubframeCore.DropdownMenu.Trigger>
            <SubframeCore.DropdownMenu.Portal>
              <SubframeCore.DropdownMenu.Content
                side="bottom"
                align="start"
                sideOffset={8}
                asChild={true}
              >
                <DropdownMenu>
                  <DropdownMenu.DropdownItem icon={null}>
                    Guides
                  </DropdownMenu.DropdownItem>
                  <DropdownMenu.DropdownItem icon={null}>
                    API reference
                  </DropdownMenu.DropdownItem>
                  <DropdownMenu.DropdownItem icon={null}>
                    Changelog
                  </DropdownMenu.DropdownItem>
                  <DropdownMenu.DropdownItem icon={null}>
                    Terms
                  </DropdownMenu.DropdownItem>
                  <DropdownMenu.DropdownItem icon={null}>
                    Privacy
                  </DropdownMenu.DropdownItem>
                </DropdownMenu>
              </SubframeCore.DropdownMenu.Content>
            </SubframeCore.DropdownMenu.Portal>
          </SubframeCore.DropdownMenu.Root>
        </ElevenSidebar>
        {children !== undefined ? (
          <div className="flex h-full w-full grow shrink-0 basis-0 flex-col items-start gap-4 overflow-y-auto">
            {children}
          </div>
        ) : null}
      </div>
    );
  }
);

export const ElevenPage = ElevenPageRoot;
