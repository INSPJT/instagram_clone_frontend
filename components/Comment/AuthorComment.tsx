import React from 'react';
import { FeedAuthor } from 'types/index';
import styled from '@emotion/styled';
import Created from 'components/Comment/Created';
import Link from 'next/link';

export type AuthorCommentProps = {
  content: string;
  author: FeedAuthor;
  created: string;
};

function AuthorComment({ content, author: { displayId, profileImageUrl }, created }: AuthorCommentProps) {
  return (
    <VerticalMiddleDiv>
      <StyledCommentThumbnail>
        <Link href={`${displayId}`}>
          <StyledAtag>
            <StyledImg src={profileImageUrl} alt={`${displayId} 님의 프로필 사진`} />
          </StyledAtag>
        </Link>
      </StyledCommentThumbnail>
      <InlineDiv>
        <div>
          <InlineH3>
            <Link href={`${displayId}`}>
              <StyledAtag> {displayId}</StyledAtag>
            </Link>
          </InlineH3>
          <StyledSpan>{content}</StyledSpan>
        </div>
        <Created currentTime={created} />
      </InlineDiv>
    </VerticalMiddleDiv>
  );
}

const StyledAtag = styled.a`
  text-decoration: none;
  color: inherit;
`;

const StyledImg = styled.img`
  height: 42px;
  width: 42px;
`;

const StyledCommentThumbnail = styled.div`
  display: inline-block;
  border-radius: 70%;
  overflow: hidden;
  object-fit: cover;
  height: 42px;
  width: 42px;
  margin: 0 16px;
`;

const VerticalMiddleDiv = styled.div`
  border-bottom: 1px solid rgba(239, 239, 239, 1);
  margin-bottom: 16px;
  padding-bottom: 16px;
  display: flex;
  align-items: center;
`;

const StyledSpan = styled.span`
  font-size: 14px;
`;

const InlineH3 = styled.h3`
  display: inline-block;
  font-size: 18px;
  margin-right: 10px;
`;

const InlineDiv = styled.div`
  display: inline-block;
`;

export default AuthorComment;
