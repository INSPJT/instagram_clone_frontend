import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';

export type ProfileProps = {};

function Profile({}: ProfileProps): ReactElement {
  const router = useRouter();
  const { displayId } = router.query;
  return <div>{displayId}</div>;
}

export default Profile;
