import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Components } from '../src/index';

const meta: Meta = {
  title: 'Select',
  component: Components.Select,
  argTypes: {
    children: {
      control: {
        options: [{label: 'option 1', value: '1'}, {label: 'option 2', value: '2'}],
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = () => <Components.Select options={[{label: 'option 1', value: '1'}, {label: 'option 2', value: '2'}]} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
