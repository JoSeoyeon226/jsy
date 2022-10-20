<template>
  <div>
  <AppHeader />
  <Menu />
   <div class="section">
    <v-layout wrap>
      <v-flex xs4 class="pa-2" data-aos="fade-right">
        <v-responsive :aspect-ratio="1/1">
          <img src="/jsy/image/19.07.05.png" class="image" @click="Move2019_2">
        </v-responsive>
      </v-flex>
      <v-flex xs4 class="pa-2" data-aos="fade-up">
        <v-responsive :aspect-ratio="1/1">
          <img src="/jsy/image/mac.png" class="image" @click="Move2019_1">
        </v-responsive>
      </v-flex>
      <v-flex xs4 class="pa-2" data-aos="fade-left">
        <v-responsive :aspect-ratio="1/1">
          <img src="/jsy/image/muu.png" class="image">
        </v-responsive>
      </v-flex>
    </v-layout>
  </div>
</div>
</template>

<script>
import Menu from '@/components/Menu.vue'; //import 헤더 추가
import AppHeader from "@/components/AppHeader.vue"
export default {
name: 'App',
components: {
  Menu,AppHeader    
},
methods: {
            Move2019_1() {
                this.$router.push("/portpolio/2019/1")
            },
            Move2019_2() {
                this.$router.push("/portpolio/2019/2")
            },
          }
}
</script>

<style scoped lang="less">
.section{
  width:1190px;
  margin: 0 auto;
  padding-top: 150px;
  padding-bottom: 40px;
//  background-color: #111111;
  
  .image{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

</style>