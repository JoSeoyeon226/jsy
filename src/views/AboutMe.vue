<template>
    <div>
        <AppHeader />
        <v-layout wrap>
        <v-flex data-aos="fade-right">
          <v-responsive>
            <img src="image/AboutMe.png" class="image">
            <!-- <div class="div_img">
                <img src="image/face_1.png" class="image">
            </div> -->
            
          </v-responsive>
        </v-flex>
    </v-layout>
       
    </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue"
export default {
  name: 'App',
  components: {
    AppHeader    
  }
}
</script>

<style scoped>
.div_img{
    display: flex;
    position: relative;
}
/* .slide{
      background-size:cover;
      background-position: center center;
} */

</style>