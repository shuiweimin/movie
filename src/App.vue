<template>
  <div id="app">
    <router-view/>
    <Footer v-show="$route.meta.footShow"></Footer>
  </div>
</template>
<script>
import Footer from '@/components/Footer';
export default {
  name:'App',
  components:{
    Footer
  }
}
</script>
<style lang="scss">
@import "@/assets/css/common/common.scss";

body,html{
  height: 100%;
}
body{
  background-color: $baseBgColor;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
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
.test{
  font-size: 37.5px;
}
a,
button {
  //保持android/ios 超链接被点击的特性的统一
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
</style>
