// Button.stories.js

import Button from './Button.vue';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    size: {
      control: {
        type: 'radio',
        options: ['small','medium','large']
      }
    },
    cursor: {
      control: {
        type: 'radio',
        options: ['pointer','crosshair','grab','help','not-allowed','wait']
      }
    }
  }
};

// This will lead to { onClick: action('clicked'), ... }

const ButtonStory = (args, { argTypes }) => ({
  title: 'Button',
  components: { Button },
  props: Object.keys(argTypes),
  template:
  `
    <Button v-bind="$props"/>
  `,
});

export const Default = ButtonStory.bind({});
Default.args = {
  //👇 This arg is for the story component
  label: "Submit",
  //👇 The remaining args get passed to the `Table` component
  size: 'large',
  border: '2px solid #000000',
  border_radius: '5px',
  cursor: 'pointer',
  default_color: '#ffafaf',
  hovering_color: '#858bdb',
  onClick: action('onClick'),
};