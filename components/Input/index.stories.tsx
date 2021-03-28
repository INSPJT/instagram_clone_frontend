import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import Input, { InputType, Input2 } from '.';


export default {
  title: 'Input',
  component: Input2,
} as Meta;

const Template: Story<InputType> = (args) => <Input2 {...args} />;

export const Default = Template.bind({});
Default.args = {
};