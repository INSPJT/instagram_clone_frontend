import { inherits } from 'node:util';
import React, { ReactElement } from 'react';
import * as svg from './svg';

export type IconTypes = keyof typeof svg;
export type IconProps = {
  name: IconTypes;
  size: keyof typeof sizes;
  color?: string;
};
export type attributeType = {
  width: number;
  height: number;
  fill?: string;
};

const defaultProps = { size: 'default' };

function Icon({ name, size, color }: IconProps): ReactElement {
  const attribute: attributeType = {
    width: sizes[size],
    height: sizes[size],
  };
  if (color) {
    attribute.fill = color;
  }
  return React.createElement(svg[name], {
    ...attribute,
  });
}

Icon.defaultProps = defaultProps;

export default Icon;

const sizes = {
  small: 12,
  default: 16,
  big: 24,
};
