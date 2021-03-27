import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Modal, { ModalProps } from '../Modal';
import ModalItem from "../Modal/ModalItem";

export default {
    title: 'Modal',
    component : Modal,
} as Meta;

function consoleMessage () {
  console.log('print')
}

export const Template: Story<ModalProps> = () => (
    <Modal>
      <ModalItem onClick={consoleMessage}>킹동하</ModalItem>
    </Modal>
);

