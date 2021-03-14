import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Follower, { FollowerType } from '../Follower';

export default {
  title: 'Follower',
  component: Follower,
  argTypes: {
    onClickRemove: {action: 'onClickRemove'}
  }
} as Meta;

const Template: Story<FollowerType> = (args) => <Follower {...args} />;

export const Default = Template.bind({});
Default.args = {
  user: {
    id: 0,
    displayId: 'dongha',
    nickName: '김동하',
    thumbnail: 'https://post-phinf.pstatic.net/MjAxODA3MTlfMTIg/MDAxNTMxOTg5ODE5OTAw.edb-H-Rmhr2dFvKAqKA11flZ2k45cRi4Q4IaHirlMF4g.It6ziXN3vtf0R7B2p9DdwOy1hovG7aynuCPwAysStMcg.JPEG/jy180719b2.jpg?type=w1200',
  },
};

export const NoName = Template.bind({});
NoName.args = {
  user: {
    id: 0,
    displayId: 'dongha',
    thumbnail: 'https://post-phinf.pstatic.net/MjAxODA3MTlfMTIg/MDAxNTMxOTg5ODE5OTAw.edb-H-Rmhr2dFvKAqKA11flZ2k45cRi4Q4IaHirlMF4g.It6ziXN3vtf0R7B2p9DdwOy1hovG7aynuCPwAysStMcg.JPEG/jy180719b2.jpg?type=w1200'
  },
};