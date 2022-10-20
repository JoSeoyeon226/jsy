<template>
  <div>
    <swiper :options="swiperOption" class="swiper">
      <swiper-slide data-aos="fade-in" data-aos-duration="1000" class="slide" style="background-color: #f9f4c2;">
        <v-layout data-aos="fade-up" data-aos-duration="1000" fill-height align-center justify-center>
          <div>
            <div class="slog">Jo Seoyeon</div>
            <div class="job">Product Manager</div>
            <v-spacer>
            <div class="btnl">
              <v-btn class="btn" @click="MoveResume">Resume</v-btn>
              <v-btn class="btn" @click="MovePortpolio">PortPolio</v-btn>
            </div>
          </v-spacer>
          </div>
        </v-layout></swiper-slide>
    </swiper> 
  </div>
   
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import AOS from "aos"
import "aos/dist/aos.css";

  export default {
    name: 'Home',
    methods: {
        MoveMain() {
			this.$router.push("/")
        },
        MoveResume() {
			this.$router.push("/resume")
        },   
	    MovePortpolio() {
			this.$router.push("/portpolio")
        }   
    },
    data() {
      return {
        swiperOption:{
          loop:true,
          autoplay:{
            delay:1000
          }
        }
      }
    },
    mounted(){
      AOS.init()
    },
    components:{
      Swiper,
      SwiperSlide
    }

  }
</script>
<style scoped lang="less">

  .swiper{
    height:100vh;
    .slide{
      background-size:cover;
      background-position: center center;
      .slog{
        font-size:60px;
        font-weight:bold;
        color: rgb(69, 71, 79);
        // display: flex;
        // align-items: center;  
      }
      .job{
        font-size:20px;
        font-weight:bold;
        color: rgb(69, 71, 79);
        text-align: center;
      } 
      // .btnl{
      //   display: flex;
      // }
   .btn{
    margin: 80px 20px 20px 30px;
    text-align: center;
   }
  }
}
</style>