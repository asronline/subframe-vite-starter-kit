"use client";
/*
 * Documentation:
 * Drawer — https://app.subframe.com/library?component=Drawer_1e71b2cb-8d72-4e67-b368-8805179e9444
 * Text Input — https://app.subframe.com/library?component=Text+Input_be48ca43-f8e7-4c0e-8870-d219ea11abfe
 * Button — https://app.subframe.com/library?component=Button_3b777358-b86b-40af-9327-891efc6826fe
 */

import * as SubframeCore from "@subframe/core";
import React from "react";
import { TextInput } from "./TextInput";
import { Button } from "./Button";

interface ContentProps
  extends React.ComponentProps<typeof SubframeCore.Drawer.Content> {
  children?: React.ReactNode;
  className?: string;
}

const Content = React.forwardRef<HTMLElement, ContentProps>(function Content(
  { children, className, ...otherProps }: ContentProps,
  ref
) {
  return (
    <SubframeCore.Drawer.Content asChild={true} {...otherProps}>
      <div
        className={SubframeCore.twClassNames(
          "flex h-full min-w-[320px] flex-col items-start gap-2 border-l border-solid border-neutral-border bg-default-background",
          className
        )}
        ref={ref as any}
      >
        {children}
      </div>
    </SubframeCore.Drawer.Content>
  );
});

interface DrawerRootProps
  extends React.ComponentProps<typeof SubframeCore.Drawer.Root> {
  children?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

const DrawerRoot = React.forwardRef<HTMLElement, DrawerRootProps>(
  function DrawerRoot(
    { children, className, ...otherProps }: DrawerRootProps,
    ref
  ) {
    return (
      <SubframeCore.Drawer.Root asChild={true} {...otherProps}>
        <div
          className={SubframeCore.twClassNames(
            "flex h-full w-full flex-col items-end justify-center gap-2 bg-[#00000066]",
            className
          )}
          ref={ref as any}
        >
          {children}
        </div>
      </SubframeCore.Drawer.Root>
    );
  }
);

export const Drawer = Object.assign(DrawerRoot, {
  Content,
});
