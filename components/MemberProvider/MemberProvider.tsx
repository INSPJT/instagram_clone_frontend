import React, { ReactElement, useState } from 'react';
import MemberContext from 'components/MemberProvider/MemberContext';
import { Member } from 'types/index';

export type MemberProviderProps = {
  children: ReactElement;
};

function MemberProvider({ children }: MemberProviderProps): ReactElement {
  const [member, setMember] = useState<null | Member>(null);
  return <MemberContext.Provider value={{ member, setMember }}>{children}</MemberContext.Provider>;
}

export default MemberProvider;
