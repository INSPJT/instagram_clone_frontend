import React from 'react';
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';

export type ModalProps = {
  children: React.ReactNode;
};

function Modal({ children }: ModalProps) {
  const modal = document.getElementById('global_modal');
  if (!modal) {
    return null;
  }

  return ReactDOM.createPortal(
    <>
      <ModalOverlay>
        <ModalWrapper>
          <ModalContent>{children}</ModalContent>
        </ModalWrapper>
      </ModalOverlay>
    </>,
    modal,
  );
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.65);
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ModalContent = styled.div`
  border-radius: 12px;
  padding: 10px 0;
  background-color: white;
  border-color: black;
  border-width: 0px;
  width: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Modal;
