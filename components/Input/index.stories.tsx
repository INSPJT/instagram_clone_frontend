import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import Input, { InputType } from '.';


export default {
  title: 'Input',
  component: Input,
} as Meta;

const Template: Story<InputType> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: '이메일'
};

export const Password = Template.bind({});
Password.args = {
  label: '비밀번호',
  inputType: 'password'
};

export const GrayTheme = Template.bind({});
GrayTheme.args = {
  label: '닉네임',
  theme: 'gray'
};