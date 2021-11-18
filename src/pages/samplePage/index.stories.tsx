import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoryApp } from 'components/app';
import SamplePage from '.';

// // More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Pages/SamplePage',
  component: SamplePage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof SamplePage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SamplePage> = (args) => (
  <StoryApp>
    <SamplePage {...args} />;
  </StoryApp>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
