import { Meta, StoryObj } from '@storybook/react';

import { SmartRange, ISmartRangeProps } from './index';

export default {
  title: 'Components/SmartRange',
  component: SmartRange,
  args: {
    corners: 'rounded',
    variant: 'standard',
  },
  argTypes: {
    corners: {
      options: ['square', 'rounded', 'round'],
      control: {
        type: 'inline-radio',
      },
    },
    variant: {
      options: ['outlined', 'standard'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<ISmartRangeProps>;

export const Default: StoryObj = {};
