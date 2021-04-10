import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Button, { ButtonType } from '.';

export default {
  title: 'Button',
  component: Button,
} as Meta;

const Template: Story<ButtonType> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: '팔로잉',
};

export const Blue = Template.bind({});
Blue.args = {
  theme: 'blue',
  children: '팔로우',
};

export const DefaultLoading = Template.bind({});
DefaultLoading.args = {
  loading: true,
  children: '팔로우',
};

export const BlueLoading = Template.bind({});
BlueLoading.args = {
  loading: true,
  theme: 'blue',
  children: '팔로우',
};

export const DefaultSignup = Template.bind({});
DefaultSignup.args = {
  children: '가입하기',
  full: true,
};

export const BlueSignup = Template.bind({});
BlueSignup.args = {
  theme: 'blue',
  children: '가입하기',
  full: true,
};
