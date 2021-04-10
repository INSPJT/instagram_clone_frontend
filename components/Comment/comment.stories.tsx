import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { FeedAuthor, Member, Feed } from 'types';
import AuthorComment from 'components/Comment/AuthorComment';
import CommentArea from 'components/Comment/CommentArea';
import CommentNav from 'components/Comment/CommentNav';
import CommentItem from './CommentItem';
import Comment, { CommentsProps } from '.';
import CommentComponent from ".";

export default {
  title: 'Comment',
  component: Comment,
} as Meta;

const user1: Member = {
  displayId: 'hangneu',
  nickname: '김하은',
  profileImageUrl:
    'https://post-phinf.pstatic.net/MjAxODA3MTlfMTIg/MDAxNTMxOTg5ODE5OTAw.edb-H-Rmhr2dFvKAqKA11flZ2k45cRi4Q4IaHirlMF4g.It6ziXN3vtf0R7B2p9DdwOy1hovG7aynuCPwAysStMcg.JPEG/jy180719b2.jpg?type=w1200',
};

const author: FeedAuthor = {
  displayId: 'kdongha',
  isFollowedByMe: true,
  profileImageUrl:
    'https://post-phinf.pstatic.net/MjAxODA3MTlfMTIg/MDAxNTMxOTg5ODE5OTAw.edb-H-Rmhr2dFvKAqKA11flZ2k45cRi4Q4IaHirlMF4g.It6ziXN3vtf0R7B2p9DdwOy1hovG7aynuCPwAysStMcg.JPEG/jy180719b2.jpg?type=w1200',
};

const date = '2020-03-26 20:30:11';

export const Template: Story<CommentsProps> = () => (
  <>
    <CommentNav />
    <CommentArea author={author} />
    <AuthorComment content="가지마 내 20대~!" author={author} created={date} />
    <ul>
      <CommentItem
        feedAuthor={author}
        id={1}
        author={user1}
        created={date}
        isLike
        replyLength={1}
        content="킹동하 팬이에요!"
        likeLength={3}
      />
    </ul>
  </>
);
