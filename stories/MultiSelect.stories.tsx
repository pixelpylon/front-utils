import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Components } from '../src/index';

const meta: Meta = {
  title: 'MultiSelect',
  component: Components.MultiSelect,
  argTypes: {
    size: {
      options: ['sm', 'default', 'lg'],
      control: { type: 'radio' },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = () => <Components.MultiSelect options={[
  {label: 'option 1', value: '1'},
   {label: 'option 2', value: '2'},
   {label: 'option 3', value: '3'},
   {label: 'option 4', value: '4'},
   {label: 'option 5', value: '5'},
   {label: 'option 6', value: '6'},
   {label: 'option 7', value: '7'},
   {label: 'option 8', value: '8'},
   {label: 'option 9', value: '9'},
   {label: 'option 10', value: '10'},
   {label: 'option 11', value: '11'},
   {label: 'option 12', value: '12'},
]} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
