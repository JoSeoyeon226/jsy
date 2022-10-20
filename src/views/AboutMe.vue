<template>
    <div>
        <AppHeader />
        <v-layout wrap>
        <v-flex data-aos="fade-up">
          <v-responsive>
            <img src="image/AboutMe.png" class="image">
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
</style>