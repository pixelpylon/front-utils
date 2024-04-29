import React from 'react';
import { Meta } from '@storybook/react';
import { Components } from '../src/index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const meta: Meta = {
  title: 'Standard link',
  component: Components.StandardLink,
  argTypes: {
    children: {
      control: {
      },
    },
  },
  parameters: {
  },
};

export default meta;


const Component = () => {
  return (
    <div className='flex flex-col gap-6'>
      <Components.StandardLink to='/' >Link</Components.StandardLink>
      <Components.StandardLink onClick={() => { }} >Button</Components.StandardLink>
    </div>
  )
}

const Template = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Component />} />
      </Routes>
    </BrowserRouter>
  )
}

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
