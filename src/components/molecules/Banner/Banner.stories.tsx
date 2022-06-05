import React from "react";
import Banner from "./Banner";
import { BannerProps } from "./Banner";
import { Story } from "@storybook/react";

export default{
    title: "Molecules/Banner",
    component : Banner,
}

const Template :Story<BannerProps> = () => <Banner></Banner>

export const CardBanner = Template.bind({});

CardBanner.args = {};
