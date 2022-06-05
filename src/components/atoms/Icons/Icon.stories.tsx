import React from "react";
import {IconProps,Icons} from "./Icon";
import {Story} from "@storybook/react";
import logo from '/home/prakhar.pandey/Desktop/LDPTraining/React/blinkit-app/images/logo.svg'

export default{
    title: 'Atoms/IconLogo',
    component: Icons
}

  const Template : Story<IconProps> = args =><Icons{...args} />

  export const Logo1 = Template.bind({})
  Logo1.args={
      className:"logo",
      src:logo

  }