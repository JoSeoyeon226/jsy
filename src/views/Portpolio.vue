<template>
    <div>
    <AppHeader />
    <Menu />
     <div class="section">
      <v-layout wrap>
        <v-flex xs4 class="pa-2" data-aos="fade-right">
          <v-responsive :aspect-ratio="1/1">
            <img src="image/mac.png" class="image" @click="Move2019_1">
          </v-responsive>
        </v-flex>
        <v-flex xs4 class="pa-2" data-aos="fade-down" data-aos-delay="100">
          <v-responsive :aspect-ratio="1/1">
            <img src="image/haenaem.png" class="image" @click="Move2022_1">
          </v-responsive>
        </v-flex>
        <v-flex xs4 class="pa-2" data-aos="fade-left" data-aos-delay="200">
          <v-responsive :aspect-ratio="1/1">
            <img src="image/system.png" class="image" @click="Move2022_2">
          </v-responsive>
        </v-flex>
        <v-flex xs4 class="pa-2" data-aos="fade-right">
          <v-responsive :aspect-ratio="1/1">
            <img src="image/flimou.png" class="image" @click="Move2022_3">
          </v-responsive>
        </v-flex>
        <v-flex xs4 class="pa-2" data-aos="fade-up" data-aos-delay="100">
          <v-responsive :aspect-ratio="1/1">
            <img src="image/19.07.05.png" class="image" @click="Move2019_2">
          </v-responsive>
        </v-flex>
        <v-flex xs4 class="pa-2" data-aos="fade-left" data-aos-delay="200">
          <v-responsive :aspect-ratio="1/1">
            <img src="image/20.11.16.png" class="image" @click="Move2020_1">
          </v-responsive>
        </v-flex>
        <v-flex xs4 class="pa-2" data-aos="fade-right">
          <v-responsive :aspect-ratio="1/1">
            <img src="image/21.12.17.png" class="image" @click="Move2021_1">
          </v-responsive>
        </v-flex>
        <v-flex xs4 class="pa-2" data-aos="fade-up" data-aos-delay="100" >
          <v-responsive :aspect-ratio="1/1">
            <img src="image/21.12.17.2.png" class="image" @click="Move2021_2">
          </v-responsive>
        </v-flex>
        <v-flex xs4 class="pa-2" data-aos="fade-left" data-aos-delay="200" >
          <v-responsive :aspect-ratio="1/1">
            <img src="image/22.08.31.png" class="image" @click="Move2022_4">
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
            Move2020_1() {
                this.$router.push("/portpolio/2020/1")
            },
            Move2021_1() {
                this.$router.push("/portpolio/2021/1")
            },
            Move2021_2() {
                this.$router.push("/portpolio/2021/2")
            },
            Move2022_1() {
                this.$router.push("/portpolio/2022/1")
            },
            Move2022_2() {
                this.$router.push("/portpolio/2022/2")
            },
            Move2022_3() {
                this.$router.push("/portpolio/2022/3")
            },
            Move2022_4() {
                this.$router.push("/portpolio/2022/4")
            }
          }
}
</script>

<style scoped lang="less">
  .section{
    width:1190px;
    margin: 0 auto;
    padding-top: 150px;
    padding-bottom: 40px;
  
    .image{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

</style>