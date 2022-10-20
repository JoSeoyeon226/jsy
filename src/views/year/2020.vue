<template>
    <div>
    <AppHeader />
    <Menu />
    </div>
  </template>
  
  <script>
  import Menu from '@/components/Menu.vue'; //import 헤더 추가
  import AppHeader from "@/components/AppHeader.vue"
  export default {
    name: 'App',
    components: {
      Menu,AppHeader    
    }
  }
  </script>