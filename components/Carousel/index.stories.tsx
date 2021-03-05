import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Carousel, {CarouselType} from '../Carousel';
import styled from '@emotion/styled';

export default {
  title: 'Carousel',
  component: Carousel,
} as Meta;

const Container = styled.div`
  width: 300px;
`;

const Template: Story<CarouselType> = (args) => <Container><Carousel {...args} /></Container>;

export const Default = Template.bind({});
Default.args = {
  images:['https://via.placeholder.com/300', 'https://via.placeholder.com/150', 'https://via.placeholder.com/450'],
  showDots: true,
};

export const One = Template.bind({});
One.args = {
  images:['https://via.placeholder.com/300?text=1']
};

export const Ten = Template.bind({});
Ten.args = {
  images:['https://via.placeholder.com/300?text=1', 'https://via.placeholder.com/300?text=2', 'https://via.placeholder.com/300?text=3', 'https://via.placeholder.com/300?text=4', 'https://via.placeholder.com/300?text=5', 'https://via.placeholder.com/300?text=6', 'https://via.placeholder.com/300?text=7', 'https://via.placeholder.com/300?text=8', 'https://via.placeholder.com/300?text=9', 'https://via.placeholder.com/300?text=10'],
  showDots: true,
}

