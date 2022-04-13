<template>
  <Tag>{{ name }}</Tag>
  <Input />
</template>

<script setup>
import {ref} from 'vue'
import { Tag, Input } from 'ant-design-vue'

const name = ref("yangdi")
</script>