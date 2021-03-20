import styled from '@emotion/styled';
import React from 'react';

export type ModalItemProps = {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  bold?: boolean;
  color?: 'red' | 'blue';
};

const ModalItem = (props: ModalItemProps) => {
  const { children, onClick, bold, color } = props;
  return (
    <StyledModalItem bold={bold} color={color} onClick={onClick}>
      {children}
    </StyledModalItem>
  );
};

ModalItem.defaultProps = {
  bold: false,
  color: undefined,
};

const StyledModalItem = styled.button<ModalItemProps>`
  cursor: pointer;
  text-align: center;
  width: 200px;
  height: 32px;
  box-sizing: border-box;
  font-size: 14px;
  border: none;
  background-color: white;
  font-weight: ${({ bold }) => (bold ? 'bold' : '')};
  color: ${({ color }) => {
    switch (color) {
      case 'red':
        return 'rgb(237,73,86)';
      case 'blue':
        return 'rgb(0,149,246)';
      default:
        return 'black';
    }
  }};
  & + button {
    border-top: 1px solid rgb(219, 219, 219);
  }
`;

export default ModalItem;
