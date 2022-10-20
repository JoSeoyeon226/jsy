<template>
    <div class="navbar navbar-fixed-top navbar-inverse" role="navigation">
          <div class="container">
            <div class="navbar-collapse collapse" style="height: 1px;margin: auto;text-align: center;">
              <ul class="nav navbar-nav">
                <li class="Year" @click="Move2019">2019</li>
                <li>|</li>
                <li class="Year" @click="Move2020">2020</li>
                <li>|</li>
                <li class="Year" @click="Move2021">2021</li>
                <li>|</li>
                <li class="Year" @click="Move2022">2022</li>
              </ul>
            </div>
          </div>
        </div>
    </template>
    
    <script>
    export default{
        methods: {
            Move2019() {
                this.$router.push("/portpolio/2019")
            },
            Move2020() {
                this.$router.push("/portpolio/2020")
            },  
            Move2021() {
                this.$router.push("/portpolio/2021")
            }, 
            Move2022() {
                this.$router.push("/portpolio/2022")
            } 
        }
    }
    </script>
    
    <style scoped>
    @media (min-width:768px) { 
     .navbar .navbar-nav > li {
        float: none;
        display: inline-block;
     }
     ul{
        font-size: 20px;
        font-weight: bold;
     }
     .Year{
        margin: 50px;
        padding : 10px;
     }
    }</style>