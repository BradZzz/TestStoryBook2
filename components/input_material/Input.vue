<template>
  <md-field>
    <md-icon v-if="icon">{{ icon }}</md-icon>
    <label>{{ label_text }}</label>
    <md-input v-model="initial" :disabled="disabled" :maxlength="max_length" :placeholder="placeholder"></md-input>
  </md-field>
</template>

<script>
import { action } from '@storybook/addon-actions';

export default {
  name: 'Input',
  props: {
    icon: {
      type: String,
      default: "",
      required: false
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false
    },
    max_length: {
      type: Number,
      default: null,
      required: false
    },
    label_text: {
      type: String,
      default: "",
      required: false
    },
    placeholder: {
      type: String,
      default: "",
      required: false
    }
  },
  computed: {
    style () {
      return {
      };
    }
  },
  data () {
    return {
      initial: ''
    }
  },
  methods: {
  }
}
</script>

<style>
</style>