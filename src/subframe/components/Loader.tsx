"use client";
/*
 * Documentation:
 * Loader — https://app.subframe.com/library?component=Loader_f2e570c8-e463-45c2-aae9-a960146bc5d5
 */

import classNames from "classnames";
import * as SubframeCore from "@subframe/core";
import React from "react";

interface LoaderRootProps
  extends React.ComponentProps<typeof SubframeCore.Loader> {
  size?: "Default" | "Label" | "Subheader" | "Section Header" | "Header";
  className?: string;
}

const LoaderRoot = React.forwardRef<HTMLElement, LoaderRootProps>(
  function LoaderRoot(
    { size = "Default", className, ...otherProps }: LoaderRootProps,
    ref
  ) {
    return (
      <SubframeCore.Loader
        className={SubframeCore.twClassNames(
          "group/f2e570c8 text-body font-body text-brand-600",
          {
            "text-heading-1 font-heading-1": size === "Header",
            "text-heading-2 font-heading-2": size === "Section Header",
            "text-heading-3 font-heading-3": size === "Subheader",
            "text-caption font-caption": size === "Label",
          },
          className
        )}
        ref={ref as any}
        {...otherProps}
      />
    );
  }
);

export const Loader = LoaderRoot;
