<template>
    <div class="header">
        <v-layout align-center>
            <div class="logo" @click="MoveMain">조서연의 포트폴리오</div>
            <v-spacer></v-spacer>
            <v-btn text @click="MoveAboutMe">About Me</v-btn>
            <v-btn text @click="MoveResume">Resume</v-btn>
            <v-btn text @click="MovePortpolio">PortPolio</v-btn>
            
        </v-layout>
    </div>
</template>

<script>
export default{
    methods: {
        MoveMain() {
			this.$router.push("/")
        },
        MoveAboutMe() {
			this.$router.push("/aboutme")
        },
        MoveResume() {
			this.$router.push("/resume")
        },   
	    MovePortpolio() {
			this.$router.push("/portpolio")
        }   
    }
}

</script>

<style scoped>
    .header{
        padding:20px;
        box-shadow: 0 6px 6px #eee

    }
    .header .logo{
        font-size:20px;
        font-weight:bold;
    }
</style>