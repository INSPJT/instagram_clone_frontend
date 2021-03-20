import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Input, { InputType } from '../Input';

export default {
  title: 'Input',
  component: Input,
} as Meta;

const Template: Story<InputType> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: '팔로잉'
};

export const Blue = Template.bind({});
Blue.args = {
  theme: 'blue',
  children: '팔로우'
};

export const DefaultLoading = Template.bind({});
DefaultLoading.args = {
  loading: true,
  children: '팔로우'
};

export const BlueLoading = Template.bind({});
BlueLoading.args = {
  loading: true,
  theme: 'blue',
  children: '팔로우'
};
