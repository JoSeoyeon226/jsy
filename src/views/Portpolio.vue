<template>
    <div>
      <AppHeader />
    <Menu />
     <div class="section">
      <v-layout wrap>
        <v-flex xs4 class="pa-2" data-aos="fade-right">
          <v-responsive :aspect-ratio="1/1">
            <img src="image/top1.jpg" class="image">
          </v-responsive>
        </v-flex>
        <v-flex xs4 class="pa-2" data-aos="fade-down" data-aos-delay="100">
          <v-responsive :aspect-ratio="1/1">
            <img src="image/top2.jpg" class="image">
          </v-responsive>
        </v-flex>
        <v-flex xs4 class="pa-2" data-aos="fade-left" data-aos-delay="200">
          <v-responsive :aspect-ratio="1/1">
            <img src="image/top3.jpg" class="image">
          </v-responsive>
        </v-flex>
        <v-flex xs4 class="pa-2" data-aos="fade-right">
          <v-responsive :aspect-ratio="1/1">
            <img src="image/top1.jpg" class="image">
          </v-responsive>
        </v-flex>
        <v-flex xs4 class="pa-2" data-aos="fade-up" data-aos-delay="100">
          <v-responsive :aspect-ratio="1/1">
            <img src="image/top2.jpg" class="image">
          </v-responsive>
        </v-flex>
        <v-flex xs4 class="pa-2" data-aos="fade-left" data-aos-delay="200">
          <v-responsive :aspect-ratio="1/1">
            <img src="image/top3.jpg" class="image">
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
  }
}
</script>
<!-- <script>
export default{
    methods: {
        Move2019() {
			this.$router.push("/Portpolio/2019")
        },
        Move2020() {
			this.$router.push("/Portpolio/2020")
        },  
        Move2021() {
			this.$router.push("/Portpolio/2021")
        }, 
        Move2022() {
			this.$router.push("/Portpolio/2022")
        } 
    }
}
</script> -->

<style scoped lang="less">
// @media (min-width:768px) { 
//  .navbar .navbar-nav > li {
//     float: none;
//     display: inline-block;
//  }
//  ul{
//     font-size: 20px;
//     font-weight: bold;
//  }
//  .Year{
//     margin: 50px;
//     padding : 10px;
//  }
// }
  .section{
    width:1190px;
    margin: 0 auto;
    padding-top: 150px;
    padding-bottom: 40px;
    // .header{
    //   text-align: center;
    //   font-size: 40px;
    //   font-weight: bold;
    // }
    .image{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

</style>