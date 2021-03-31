import React from 'react';
import Link from 'next/link';

import { Member } from 'types';

type Props = {
  data: Member;
};

const ListItem = ({ data }: Props) => (
  <Link href="/users/[id]" as={`/users/${data.displayId}`}>
    <a>
      {data.displayId}: {data.nickname}
    </a>
  </Link>
);

export default ListItem;
