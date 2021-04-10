import { createContext } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { Member } from 'types/index';

type MemberContextProps = {
  member: null | Member;
  setMember?: Dispatch<SetStateAction<null | Member>>;
};

const MemberContext = createContext<MemberContextProps>({
  member: null,
  setMember: () => {},
});

export default MemberContext;
