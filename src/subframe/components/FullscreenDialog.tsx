"use client";
/*
 * Documentation:
 * Fullscreen Dialog — https://app.subframe.com/library?component=Fullscreen+Dialog_3f094173-71de-4378-a09a-05c482f7a137
 * Text Input — https://app.subframe.com/library?component=Text+Input_be48ca43-f8e7-4c0e-8870-d219ea11abfe
 * Multiline Input — https://app.subframe.com/library?component=Multiline+Input_4ec05ee8-8f1c-46b2-b863-5419aa7f5cce
 * Button — https://app.subframe.com/library?component=Button_3b777358-b86b-40af-9327-891efc6826fe
 */

import classNames from "classnames";
import * as SubframeCore from "@subframe/core";
import React from "react";
import { TextInput } from "./TextInput";
import { MultilineInput } from "./MultilineInput";
import { Button } from "./Button";

interface FullscreenDialogRootProps
  extends React.ComponentProps<typeof SubframeCore.FullScreenDialog.Root> {
  children?: React.ReactNode;
  className?: string;
}

const FullscreenDialogRoot = React.forwardRef<
  HTMLElement,
  FullscreenDialogRootProps
>(function FullscreenDialogRoot(
  { children, className, ...otherProps }: FullscreenDialogRootProps,
  ref
) {
  return (
    <SubframeCore.FullScreenDialog.Root asChild={true} {...otherProps}>
      <div
        className={SubframeCore.twClassNames(
          "flex h-full w-full flex-col items-start",
          className
        )}
        ref={ref as any}
      >
        {children}
      </div>
    </SubframeCore.FullScreenDialog.Root>
  );
});

export const FullscreenDialog = FullscreenDialogRoot;
