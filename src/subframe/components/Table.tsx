"use client";
/*
 * Documentation:
 * Table — https://app.subframe.com/library?component=Table_142dfde7-d0cc-48a1-a04c-a08ab2252633
 * Button — https://app.subframe.com/library?component=Button_3b777358-b86b-40af-9327-891efc6826fe
 */

import * as SubframeCore from "@subframe/core";
import React from "react";
import { Button } from "./Button";
import { Badge } from "./Badge";

interface RowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  children?: React.ReactNode;
  clickable?: boolean;
  className?: string;
}

const Row = React.forwardRef<HTMLElement, RowProps>(function Row(
  { children, clickable = false, className, ...otherProps }: RowProps,
  ref
) {
  return (
    <tr
      className={SubframeCore.twClassNames(
        "group/5d119f8d border-t border-solid border-neutral-border bg-default-background",
        { "hover:bg-neutral-50": clickable },
        className
      )}
      ref={ref as any}
      {...otherProps}
    >
      {children}
    </tr>
  );
});

interface CellProps extends React.TdHTMLAttributes<HTMLTableDataCellElement> {
  children?: React.ReactNode;
  className?: string;
}

const Cell = React.forwardRef<HTMLElement, CellProps>(function Cell(
  { children, className, ...otherProps }: CellProps,
  ref
) {
  return (
    <td {...otherProps}>
      <div
        className={SubframeCore.twClassNames(
          "flex h-12 w-full items-center gap-1 pr-3 pl-3",
          className
        )}
        ref={ref as any}
      >
        {children}
      </div>
    </td>
  );
});

interface TextCellProps
  extends React.TdHTMLAttributes<HTMLTableDataCellElement> {
  primary?: boolean;
  children?: string;
  className?: string;
}

const TextCell = React.forwardRef<HTMLElement, TextCellProps>(function TextCell(
  { primary = false, children = "", className, ...otherProps }: TextCellProps,
  ref
) {
  return (
    <td {...otherProps}>
      <div
        className={SubframeCore.twClassNames(
          "group/1c76039d flex h-12 w-full flex-col items-start justify-center gap-2 pr-3 pl-3",
          className
        )}
        ref={ref as any}
      >
        {children ? (
          <span
            className={SubframeCore.twClassNames(
              "text-body font-body text-neutral-500",
              { "text-body-bold font-body-bold text-neutral-700": primary }
            )}
          >
            {children}
          </span>
        ) : null}
      </div>
    </td>
  );
});

interface BadgeCellProps
  extends React.TdHTMLAttributes<HTMLTableDataCellElement> {
  children?: string;
  variant?: "Default" | "Neutral" | "Error" | "Warning" | "Success";
  className?: string;
}

const BadgeCell = React.forwardRef<HTMLElement, BadgeCellProps>(
  function BadgeCell(
    {
      children = "Badge",
      variant = "Default",
      className,
      ...otherProps
    }: BadgeCellProps,
    ref
  ) {
    return (
      <td {...otherProps}>
        <div
          className={SubframeCore.twClassNames(
            "group/f2160c74 flex h-12 items-center gap-1 pr-3 pl-3",
            className
          )}
          ref={ref as any}
        >
          <Badge
            className={SubframeCore.twClassNames({
              hidden:
                variant === "Success" ||
                variant === "Warning" ||
                variant === "Error" ||
                variant === "Neutral",
            })}
          >
            {children}
          </Badge>
          <Badge
            className={SubframeCore.twClassNames("hidden", {
              flex: variant === "Neutral",
            })}
            variant="Neutral"
          >
            {children}
          </Badge>
          <Badge
            className={SubframeCore.twClassNames("hidden", {
              flex: variant === "Error",
            })}
            variant="Error"
          >
            {children}
          </Badge>
          <Badge
            className={SubframeCore.twClassNames("hidden", {
              flex: variant === "Warning",
            })}
            variant="Warning"
          >
            {children}
          </Badge>
          <Badge
            className={SubframeCore.twClassNames("hidden", {
              flex: variant === "Success",
            })}
            variant="Success"
          >
            {children}
          </Badge>
        </div>
      </td>
    );
  }
);

interface HeaderRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  children?: React.ReactNode;
  className?: string;
}

const HeaderRow = React.forwardRef<HTMLElement, HeaderRowProps>(
  function HeaderRow(
    { children, className, ...otherProps }: HeaderRowProps,
    ref
  ) {
    return (
      <tr
        className={SubframeCore.twClassNames("bg-neutral-50", className)}
        ref={ref as any}
        {...otherProps}
      >
        {children}
      </tr>
    );
  }
);

interface HeaderCellProps
  extends React.ThHTMLAttributes<HTMLTableHeaderCellElement> {
  children?: string;
  icon?: SubframeCore.IconName;
  className?: string;
}

const HeaderCell = React.forwardRef<HTMLElement, HeaderCellProps>(
  function HeaderCell(
    { children = "", icon = null, className, ...otherProps }: HeaderCellProps,
    ref
  ) {
    return (
      <th {...otherProps}>
        <div
          className={SubframeCore.twClassNames(
            "flex h-10 w-full items-center gap-1 pr-3 pl-3",
            className
          )}
          ref={ref as any}
        >
          {children ? (
            <span className="text-body-bold font-body-bold text-neutral-700">
              {children}
            </span>
          ) : null}
          <SubframeCore.Icon
            className="text-body font-body text-default-font"
            name={icon}
          />
        </div>
      </th>
    );
  }
);

interface TableRootProps extends React.TableHTMLAttributes<HTMLTableElement> {
  children?: React.ReactNode;
  header?: React.ReactNode;
  className?: string;
}

const TableRoot = React.forwardRef<HTMLElement, TableRootProps>(
  function TableRoot(
    { children, header, className, ...otherProps }: TableRootProps,
    ref
  ) {
    return (
      <table
        className={SubframeCore.twClassNames(
          "w-full border border-solid border-neutral-border",
          className
        )}
        ref={ref as any}
        {...otherProps}
      >
        <thead>{header}</thead>
        <tbody>{children}</tbody>
      </table>
    );
  }
);

export const Table = Object.assign(TableRoot, {
  Row,
  Cell,
  TextCell,
  BadgeCell,
  HeaderRow,
  HeaderCell,
});
