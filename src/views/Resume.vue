<template>
  <div>
      <AppHeader />
      <v-layout wrap>
      <v-flex data-aos="fade-down">
        <v-responsive>
          <div class="img_css">
           <img src="image/resume.png" class="image">
          </div>
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
.image{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  /* .img_css{
    height: 100%;
  } */

</style>