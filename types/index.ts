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
