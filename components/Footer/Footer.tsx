import React, { ReactElement, useContext, useMemo } from 'react';
import styled from '@emotion/styled';
import MemberContext from 'components/MemberProvider/MemberContext';
import Icon from 'components/Icon';
import UserAvatar from 'components/UserAvatar';
import { useRouter } from 'next/router';
import { IconTypes } from 'components/Icon/Icon';
import Link from 'next/link';

const TAB_LIST = [
  { name: 'home', path: '/' },
  { name: 'explore', path: '/explore' },
  { name: 'newPost', path: '/newPost' },
  { name: 'activity', path: '/accounts/activity' },
];

function Footer(): ReactElement {
  const { member } = useContext(MemberContext);
  const { pathname } = useRouter();
  const tabList = useMemo(
    () => TAB_LIST.map(({ name, path }) => ({ name: path === pathname ? `${name}Filled` : name, path })),
    [pathname],
  );
  return (
    <Nav>
      {tabList.map(({ name, path }) =>
        name === 'newPost' ? (
          <Button>
            <Icon name={name as IconTypes} size="big" key={`${name}Icon`} />
          </Button>
        ) : (
          <Link href={path}>
            <Tab>
              <Icon name={name as IconTypes} size="big" key={`${name}Icon`} />
            </Tab>
          </Link>
        ),
      )}
      <Link href={`/profiles/${member?.displayId}`}>
        <Tab>
          <UserAvatar size="small" thumbnail={member?.profileImageUrl} />
        </Tab>
      </Link>
    </Nav>
  );
}

export default Footer;

const Nav = styled.nav`
  height: 44px;
  background-color: white;
  display: flex;
`;

const Tab = styled.a`
  all: unset;
  cursor: pointer;
  height: 100%;
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = Tab.withComponent('button');
