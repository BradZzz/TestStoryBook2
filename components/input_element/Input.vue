<template>
  <el-input :style="style" placeholder="Please input" v-model="input" class="episource-input"></el-input>
</template>

<script>
import { action } from '@storybook/addon-actions';

export default {
  name: 'Input',
  props: {
  },
  computed: {
    style () {
      return {
      };
    }
  },
  data () {
    return {
      input: ''
    }
  },
  methods: {
  }
}
</script>

<style>
.episource-input .el-input__inner {
  padding: 1em !important;
}
</style>