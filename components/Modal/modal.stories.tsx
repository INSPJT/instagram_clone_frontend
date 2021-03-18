import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import styled from '@emotion/styled';
import Modal, { ModalProps } from '../Modal';
import ModalItem, {ModalItemType} from "../Modal/ModalItem";

export default {
    title: 'Modal',
    component : Modal,
} as Meta;

export const Template: Story<ModalProps> = (args) => (
    <Modal>
        <ModalItem bold={true} color={"red"}>신고하기</ModalItem>
        <ModalItem bold={true} color={"blue"}>킹동하짱</ModalItem>
        <ModalItem bold={false}>공유하기</ModalItem>
    </Modal>
);

