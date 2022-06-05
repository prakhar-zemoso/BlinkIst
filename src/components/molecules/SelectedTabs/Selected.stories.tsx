import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import {BasicTabs} from './SelectedTabs'

export default {
  title: 'molecules/TabsMenu',
  component: BasicTabs
} as ComponentMeta<typeof BasicTabs>

const Template: ComponentStory<typeof BasicTabs> = () => <BasicTabs  />

export const Tabsmenu = Template.bind({})