import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Input from 'components/Input';
import type { InputProps } from 'components/Input';

export default {
  title: 'Input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: '이메일',
};

export const Accepted = Template.bind({});
Accepted.args = {
  label: '이메일',
  state: 'accepted',
};

export const Error = Template.bind({});
Error.args = {
  label: '이메일',
  state: 'error',
};

export const Password = Template.bind({});
Password.args = {
  label: '비밀번호',
  type: 'password',
};

export const Number = Template.bind({});
Number.args = {
  label: '숫자',
  type: 'number',
};

export const GrayTheme = Template.bind({});
GrayTheme.args = {
  label: '닉네임',
  theme: 'gray',
};

export const PlaceHolder = Template.bind({});
PlaceHolder.args = {
  placeholder: '이메일',
};

export const PlaceHolderGray = Template.bind({});
PlaceHolderGray.args = {
  placeholder: '이메일',
  theme: 'gray',
};
