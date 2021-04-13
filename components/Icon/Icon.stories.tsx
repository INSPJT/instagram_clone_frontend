import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Icon, { IconProps } from './Icon';

export default {
  title: 'Icon',
  component: Icon,
  argTypes: {
    color: { control: 'color' },
  },
} as Meta;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const Menu = Template.bind({});
Menu.args = {
  name: 'menu',
  size: 'big',
};

export const Home = Template.bind({});
Home.args = {
  name: 'home',
  size: 'big',
};

export const Activity = Template.bind({});
Activity.args = {
  name: 'activity',
  size: 'big',
};

export const Explore = Template.bind({});
Explore.args = {
  name: 'explore',
  size: 'big',
};

export const Favarite = Template.bind({});
Favarite.args = {
  name: 'favorite',
  size: 'big',
};

export const Comment = Template.bind({});
Comment.args = {
  name: 'comment',
  size: 'big',
};

export const Share = Template.bind({});
Share.args = {
  name: 'share',
  size: 'big',
};

export const Bookmark = Template.bind({});
Bookmark.args = {
  name: 'bookmark',
  size: 'big',
};

export const Newpost = Template.bind({});
Newpost.args = {
  name: 'newPost',
  size: 'big',
};

export const Back = Template.bind({});
Back.args = {
  name: 'back',
  size: 'big',
};
