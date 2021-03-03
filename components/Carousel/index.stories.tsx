import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Carousel, {CarouselType} from '../Carousel';

export default {
  title: 'Carousel',
  component: Carousel,
} as Meta;

const Template: Story<CarouselType> = (args) => <Carousel {...args} />;

export const Default = Template.bind({});
Default.args = {
  images:['https://via.placeholder.com/150?text=1', 'https://via.placeholder.com/150?text=2', 'https://via.placeholder.com/150?text=3']
};

export const One = Template.bind({});
One.args = {
  images:['https://via.placeholder.com/150?text=1']
};

