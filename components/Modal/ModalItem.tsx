import styled from '@emotion/styled';

export type ModalItemType = {
  bold: boolean;
  color?: 'red' | 'blue';
  // undefined면 black default
};

export const ModalItem = styled.button<ModalItemType>`
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
