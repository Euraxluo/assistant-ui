"use client";

import { FC } from "react";
import { ContentPartPrimitive } from "@euraxluo/react";
import { INTERNAL } from "@euraxluo/react";
import classNames from "classnames";

const { useSmoothStatus, withSmoothContextProvider } = INTERNAL;

export const Text: FC = () => {
  const status = useSmoothStatus();
  return (
    <ContentPartPrimitive.Text
      className={classNames(
        "aui-text",
        status.type === "running" && "aui-text-running",
      )}
      component="p"
    />
  );
};

export const Reasoning: FC = () => {
  const status = useSmoothStatus();
  return (
    <ContentPartPrimitive.Reasoning
      className={classNames(
        "aui-text aui-reasoning",
        status.type === "running" && "aui-text-running",
      )}
      component="p"
    />
  );
};

const exports = { Text: withSmoothContextProvider(Text), Reasoning: withSmoothContextProvider(Reasoning) };

export default exports;
