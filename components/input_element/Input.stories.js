// Button.stories.js

import Input from './Input.vue';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Input Element',
  component: Input,
  argTypes: {
  }
};

const InputStory = (args, { argTypes }) => ({
  title: 'Input',
  components: { Input },
  props: Object.keys(argTypes),
  template:
  `
    <Input v-bind="$props"/>
  `,
});

export const Default = InputStory.bind({});
Default.args = {

};