import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Modal, { ModalProps } from '.';
import ModalItem from './ModalItem';

export default {
  title: 'Modal',
  component: Modal,
} as Meta;

export const Template: Story<ModalProps> = () => (
  <Modal>
    <ModalItem bold color="red">
      신고하기
    </ModalItem>
    <ModalItem bold color="blue">
      킹동하짱
    </ModalItem>
    <ModalItem bold>공유하기</ModalItem>
  </Modal>
);
