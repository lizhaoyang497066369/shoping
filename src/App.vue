<template>
  <div id="app">
    <mt-header fixed :title="$route.meta.title">
        <a @click="acli" slot="left">
          <mt-button icon="back">返回</mt-button>
        </a>
    </mt-header>
    <router-view/>
    <Tabnav></Tabnav>
  </div>
</template>
<script>
import Tabnav from './components/Tabnav.vue'
export default {
  name:"app",
  methods:{
    acli(){
      this.$router.go(-1)
    }
  },
  components:{
    Tabnav
  }
}
</script>
<style lang="scss">
body{
  padding: 0;
  margin: 0;
  background: #f5f5f5;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
