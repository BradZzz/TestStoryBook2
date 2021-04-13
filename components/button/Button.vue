<template>
  <button size="lg" :style="style" @mouseover="hovering=true" @mouseleave="hovering=false" @click="buttonClick()">{{ label }}</button>
</template>

<script>
import { action } from '@storybook/addon-actions';
export default {
  name: 'Button',
  props: {
    cursor: {
      type: String,
      required: true
    },
    border: {
      type: String,
      required: true
    },
    border_radius: {
      type: String,
      required: true
    },
    onClick: {
      type: Function,
      required: true
    },
    size: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    default_color: {
      type: String,
      required: true
    },
    hovering_color: {
      type: String,
      required: true
    }
  },
  computed: {
    style () {
      return {
        ...{ 'cursor': this.cursor },
        ...{ 'background-color': (this.hovering ? this.hovering_color: this.default_color)},
        ...this.possible_sizes[this.size],
        ...{ 'border': this.border },
        ...{ 'border-radius': this.border_radius }
      };
    }
  },
  data () {
    return {
      possible_sizes:{
        small: { 'height' : '24px', 'width' : '72px' },
        medium: { 'height' : '48px', 'width' : '96px' },
        large: { 'height' : '96px', 'width' : '144px' },
      },
      hovering: false
    }
  },
  methods: {
    buttonClick: function(){
      this.onClick()
    }
  }
}
</script>

<style scoped>
</style>