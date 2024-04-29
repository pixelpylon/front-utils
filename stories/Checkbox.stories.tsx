import React from 'react';
import { Meta } from '@storybook/react';
import { Components } from '../src/index';

const meta: Meta = {
  title: 'Checkbox',
  component: Components.Checkbox,
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

const Template = () => {
  return (
    <div className='h-screen bg-gray-100 p-4'>
      <Components.Checkbox label='checkbox' onChange={(event) => console.log(event.target.checked)}/>
    </div>
  )
}

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
