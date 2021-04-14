// Button.stories.js

import Input from './Input.vue';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Input Material',
  component: Input,
  argTypes: {
    icon: {
      control: {
        type: 'radio',
        options: ['','event','keyboard_voice','description']
      }
    },
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
  //👇 This arg is for the story component
  placeholder: "",
  label_text: "Insert Answer",
  //👇 The remaining args get passed to the `Table` component
  max_length: 50,
  disabled: false
};