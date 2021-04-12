import React, { ReactElement } from 'react';
import styled from '@emotion/styled';
import ButtonGroup from 'components/Feed/ButtonGroup';
import LikeSection from 'components/Feed/LikeSection';
import { FeedAuthor, PreviewComment } from 'types/index';
import ContentBody from 'components/Feed/ContentBody';
import CommentPreview from 'components/Feed/CommentPreview';

export type FeedBodyProps = {
  isLike: boolean;
  likeUser: FeedAuthor;
  likeLength: number;
  author: FeedAuthor;
  body: string;
  commentLength: number;
  commentPreview: PreviewComment[];
  createdAt: string;
};

function FeedBody({
  isLike,
  likeUser,
  likeLength,
  body,
  author,
  commentLength,
  commentPreview,
}: FeedBodyProps): ReactElement {
  return (
    <Container>
      <ButtonGroup isLike={isLike} />
      {likeLength > 0 && <LikeSection likeUser={likeUser} likeLength={likeLength} />}
      <ContentBody body={body} author={author} />
      {commentLength > 0 && <CommentLengthContainer>댓글 {commentLength}개 모두 보기</CommentLengthContainer>}
      <CommentPreviewList>
        {commentPreview.map((previewComment) => (
          <CommentPreview {...previewComment} />
        ))}
      </CommentPreviewList>
    </Container>
  );
}

export default FeedBody;

const Container = styled.div`
  display: flex;
  padding: 0 16px;
  flex-direction: column;
  font-size: 14px;
`;

const CommentLengthContainer = styled.div`
  color: rgb(142, 142, 142);
  margin-bottom: 4px;
`;

const CommentPreviewList = styled.ul`
  all: unset;
`;
