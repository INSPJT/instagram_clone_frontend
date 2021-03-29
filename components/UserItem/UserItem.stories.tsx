import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import UserItem, { UserItemProps } from './UserItem';

export default {
  title: 'UserItem',
  component: UserItem,
  argTypes: {
    onClick: { action: 'onClick' },
  },
} as Meta;

const Template: Story<UserItemProps> = (args) => <UserItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  user: {
    id: 0,
    displayId: 'dongha',
    nickName: '김동하',
    thumbnail:
      'https://post-phinf.pstatic.net/MjAxODA3MTlfMTIg/MDAxNTMxOTg5ODE5OTAw.edb-H-Rmhr2dFvKAqKA11flZ2k45cRi4Q4IaHirlMF4g.It6ziXN3vtf0R7B2p9DdwOy1hovG7aynuCPwAysStMcg.JPEG/jy180719b2.jpg?type=w1200',
  },
  buttonChildren: '삭제',
};

export const NoName = Template.bind({});
NoName.args = {
  user: {
    id: 0,
    displayId: 'dongha',
    thumbnail:
      'https://post-phinf.pstatic.net/MjAxODA3MTlfMTIg/MDAxNTMxOTg5ODE5OTAw.edb-H-Rmhr2dFvKAqKA11flZ2k45cRi4Q4IaHirlMF4g.It6ziXN3vtf0R7B2p9DdwOy1hovG7aynuCPwAysStMcg.JPEG/jy180719b2.jpg?type=w1200',
  },
  buttonChildren: '팔로잉',
};

export const BlueTheme = Template.bind({});
BlueTheme.args = {
  user: {
    id: 0,
    displayId: 'dongha',
    thumbnail:
      'https://post-phinf.pstatic.net/MjAxODA3MTlfMTIg/MDAxNTMxOTg5ODE5OTAw.edb-H-Rmhr2dFvKAqKA11flZ2k45cRi4Q4IaHirlMF4g.It6ziXN3vtf0R7B2p9DdwOy1hovG7aynuCPwAysStMcg.JPEG/jy180719b2.jpg?type=w1200',
  },
  buttonChildren: '팔로우',
  buttonTheme: 'blue',
};

export const Loading = Template.bind({});
Loading.args = {
  user: {
    id: 0,
    displayId: 'dongha',
    thumbnail:
      'https://post-phinf.pstatic.net/MjAxODA3MTlfMTIg/MDAxNTMxOTg5ODE5OTAw.edb-H-Rmhr2dFvKAqKA11flZ2k45cRi4Q4IaHirlMF4g.It6ziXN3vtf0R7B2p9DdwOy1hovG7aynuCPwAysStMcg.JPEG/jy180719b2.jpg?type=w1200',
  },
  buttonChildren: '팔로우',
  buttonTheme: 'blue',
  loading: true,
};
