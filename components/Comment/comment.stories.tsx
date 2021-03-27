import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Comment, { CommentProps } from '../Comment';
import CommentItem from "../Comment/CommentItem";
import { User } from 'types';
import AuthorComment from 'components/Comment/AuthorComment';
import CommentArea from 'components/Comment/CommentArea';
import CommentNav from 'components/Comment/CommentNav';

export default {
  title: 'Comment',
  component : Comment,
} as Meta;

const user1: User = {
  id: 1,
  nickName: 'hangneu',
  thumbnail: 'https://post-phinf.pstatic.net/MjAxODA3MTlfMTIg/MDAxNTMxOTg5ODE5OTAw.edb-H-Rmhr2dFvKAqKA11flZ2k45cRi4Q4IaHirlMF4g.It6ziXN3vtf0R7B2p9DdwOy1hovG7aynuCPwAysStMcg.JPEG/jy180719b2.jpg?type=w1200',
  link: '',
}

const user2: User = {
  id: 1,
  nickName: 'kdongha',
  thumbnail: 'https://post-phinf.pstatic.net/MjAxODA3MTlfMTIg/MDAxNTMxOTg5ODE5OTAw.edb-H-Rmhr2dFvKAqKA11flZ2k45cRi4Q4IaHirlMF4g.It6ziXN3vtf0R7B2p9DdwOy1hovG7aynuCPwAysStMcg.JPEG/jy180719b2.jpg?type=w1200',
  link: '',
}

const date = Date.parse('2020/03/26/20:30');

export const Template: Story<CommentProps> = () => (
  <>
    <CommentNav/>
    <CommentArea author={user1} />
    <AuthorComment content={'가지마 내 20대~!'} author={user2} created={date} />
    <CommentItem author={user1} created={date} isLike={true}
                 replyLength={3} content={'킹동하 팬이에요!'} likeLength={3} />
  </>
);

