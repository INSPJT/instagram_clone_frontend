import React from 'react';
import ListItem from 'components/ListItem';
import { Member } from 'types';

type Props = {
  items: Member[];
};

const List = ({ items }: Props) => (
  <ul>
    {items.map((item) => (
      <li key={item.displayId}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
);

export default List;
