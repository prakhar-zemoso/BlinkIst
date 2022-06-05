import React from "react";
import {Story} from "@storybook/react";
import ProgressBar, { ProgressBarProps } from "./ProgressBary";

export default{
    title: 'Atoms/ProgressBar',
    component: ProgressBar
}

  const Template : Story<ProgressBarProps> = args =><ProgressBar{...args} />

  export const progress = Template.bind({})
  progress.args={
     progress:30,
      

  }