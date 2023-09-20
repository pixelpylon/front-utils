import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Components } from '../src/index';

const meta: Meta = {
  title: 'Input',
  component: Components.Input,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = () => <Components.Input type='text' />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
