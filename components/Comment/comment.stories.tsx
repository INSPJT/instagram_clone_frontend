import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Member } from 'types';
import AuthorComment from 'components/Comment/AuthorComment';
import CommentArea from 'components/Comment/CommentArea';
import CommentNav from 'components/Comment/CommentNav';
import CommentItem from './CommentItem';
import Comment, { CommentsProps } from '.';

export default {
  title: 'Comment',
  component: Comment,
} as Meta;

const user1: Member = {
  displayId: 'hangneu',
  nickname: 'hangneu234',
  profileImageUrl:
    'https://post-phinf.pstatic.net/MjAxODA3MTlfMTIg/MDAxNTMxOTg5ODE5OTAw.edb-H-Rmhr2dFvKAqKA11flZ2k45cRi4Q4IaHirlMF4g.It6ziXN3vtf0R7B2p9DdwOy1hovG7aynuCPwAysStMcg.JPEG/jy180719b2.jpg?type=w1200',
};

const user2: Member = {
  displayId: 'kdongha',
  nickname: 'kdongha234',
  profileImageUrl:
    'https://post-phinf.pstatic.net/MjAxODA3MTlfMTIg/MDAxNTMxOTg5ODE5OTAw.edb-H-Rmhr2dFvKAqKA11flZ2k45cRi4Q4IaHirlMF4g.It6ziXN3vtf0R7B2p9DdwOy1hovG7aynuCPwAysStMcg.JPEG/jy180719b2.jpg?type=w1200',
};

const date = Date.parse('2020/03/26/20:30');

export const Template: Story<CommentsProps> = () => (
  <>
    <CommentNav />
    <CommentArea author={user1} />
    <AuthorComment content="가지마 내 20대~!" author={user2} created={date} />
    <CommentItem
      id={1}
      author={user1}
      created={date}
      isLike
      replyLength={1}
      content="킹동하 팬이에요!"
      likeLength={3}
    />
  </>
);
