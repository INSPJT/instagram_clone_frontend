import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Feed, { FeedProps } from './Feed';

export default {
  title: 'Feed',
  component: Feed,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story<FeedProps> = (args) => <Feed {...args} />;

export const Default = Template.bind({});
Default.args = {
  author: {
    displayId: '_dohakim',
    isFollowedByMe: true,
  },
  images: [
    'https://via.placeholder.com/300?text=1',
    'https://via.placeholder.com/300?text=2',
    'https://via.placeholder.com/300?text=3',
    'https://via.placeholder.com/300?text=4',
    'https://via.placeholder.com/300?text=5',
    'https://via.placeholder.com/300?text=6',
    'https://via.placeholder.com/300?text=7',
    'https://via.placeholder.com/300?text=8',
    'https://via.placeholder.com/300?text=9',
    'https://via.placeholder.com/300?text=10',
  ],
  isLike: true,
  likeLength: 1,
  likeUser: {
    displayId: 'dongha',
    profileImageUrl:
      'https://post-phinf.pstatic.net/MjAxODA3MTlfMTIg/MDAxNTMxOTg5ODE5OTAw.edb-H-Rmhr2dFvKAqKA11flZ2k45cRi4Q4IaHirlMF4g.It6ziXN3vtf0R7B2p9DdwOy1hovG7aynuCPwAysStMcg.JPEG/jy180719b2.jpg?type=w1200',
    isFollowedByMe: false,
  },
  body: 'in 송도',
  commentLength: 2,
  commentPreview: [
    {
      author: {
        displayId: 'dongha',
        profileImageUrl:
          'https://post-phinf.pstatic.net/MjAxODA3MTlfMTIg/MDAxNTMxOTg5ODE5OTAw.edb-H-Rmhr2dFvKAqKA11flZ2k45cRi4Q4IaHirlMF4g.It6ziXN3vtf0R7B2p9DdwOy1hovG7aynuCPwAysStMcg.JPEG/jy180719b2.jpg?type=w1200',
        isFollowedByMe: false,
      },
      content: '와 멋지다',
    },
    {
      author: {
        displayId: 'dongha',
        profileImageUrl:
          'https://post-phinf.pstatic.net/MjAxODA3MTlfMTIg/MDAxNTMxOTg5ODE5OTAw.edb-H-Rmhr2dFvKAqKA11flZ2k45cRi4Q4IaHirlMF4g.It6ziXN3vtf0R7B2p9DdwOy1hovG7aynuCPwAysStMcg.JPEG/jy180719b2.jpg?type=w1200',
        isFollowedByMe: false,
      },
      content: '와 멋지다2',
    },
  ],
};
