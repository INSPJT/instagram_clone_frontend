export type Member = {
  nickname: string;
  displayId: string;
  profileImageUrl: string;
};

export type Comment = {
  id: number;
  content: string;
  author: Member;
  isLike: Boolean;
  likeLength: number;
  replyLength: number;
  created: number; // millisecond
};

export type FeedAuthor = {
  displayId: string;
  isFollowedByMe: boolean;
  profileImageUrl?: string;
};

export type Feed = {
  author: FeedAuthor;
  body: string;
  commentLength: number;
  commentPreview: any[];
  createdAt: string;
  id: number;
  images: string[];
  isLike: boolean;
  likeLength: number;
  likeUser: FeedAuthor;
  modifiedAt: string;
  viewCount: number;
};
