<template>
  <el-input placeholder="Please input" v-model="input"></el-input>
</template>

<script>
import { action } from '@storybook/addon-actions';

export default {
  name: 'Input',
  props: {
  },
  computed: {
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

<style scoped>
</style>