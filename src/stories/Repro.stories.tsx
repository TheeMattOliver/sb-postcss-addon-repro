import React, { ComponentProps } from "react";
import { Meta, Story } from "@storybook/react";
import { Repro } from "..";

type ReproProps = ComponentProps<typeof Repro>;

export default {
  title: "Repro",
  component: Repro,
  parameters: {
    controls: { expanded: true },
  },
} as Meta;

export const repro = (args: ReproProps) => {
  return <Repro>the snozzberries taste like snozzberries</Repro>;
};
repro.argTypes = {};
repro.args = {};
repro.storyName = "Repro";
