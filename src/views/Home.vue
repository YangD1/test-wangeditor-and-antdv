<template>
  <img alt="Vue logo" src="@/assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  {{ name }}
  {{ mes }}
  <ul>
    <li v-for="item in listData" :key="item.id">{{ item.text }}</li>
  </ul>
  <a @click="goToTestPage">点击跳转test</a>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'

const router = useRouter()
const name = ref('yang')
const mes = ref('')
const listData = reactive([
  {id: 1, text: '信息1'},
  {id: 2, text: '信息2'},
  {id: 3, text: '信息3'},
])

const initFunc = () => {
  mes.value = `My name is ${name.value}.`
}

const goToTestPage = () => {
  console.log('123')
  router.push({
    name: 'test'
  })
}

onMounted(() => initFunc())
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
