export type User = {
  id: number;
  nickName: string;
  thumbnail: string;
};

export type Member = {
  displayId: string;
  isFollowedByMe: boolean;
  profileImageUrl?: string;
};

export type Feed = {
  author: Member;
  body: string;
  commentLength: number;
  commentPreview: any[];
  createdAt: string;
  id: number;
  images: string[];
  isLike: boolean;
  likeLength: number;
  likeUser: Member;
  modifiedAt: string;
  viewCount: number;
};