<template>
  <div id="app">
    <transition :name="transitionName" mode="out-in">
      <router-view class="router-view"></router-view>
    </transition>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from "@/components/Footer";
export default {
  name: "App",
  data() {
    return {
      transitionName: "fade"
    };
  },
  components: {
    Footer
  },
  watch: {
    $route(to, from) {
      const tabPath = [
        "/home",
        "/cinema",
        "/movie/bar",
        "/movie/foo",
        "/ticket",
        "/main"
      ];
      //从tab来而且到tab去 不要走slide动画
      if (
        tabPath.some(item => item == to.path) &&
        tabPath.some(item => item == from.path)
      ) {
        this.transitionName = "fade";
      } else {
        // console.log('to.path',to.path)
        // 比如:  #/news/123  ==> #/news  退出
        const toDepth = to.path.split("/").length;
        const fromDepth = from.path.split("/").length;
        this.transitionName =
          toDepth < fromDepth ? "slide-right" : "slide-left";
      }
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/css/common/common.scss";
body,
html {
  height: 100%;
}
body {
  background-color: $baseBgColor;
}
a,
button {
  //保持android/ios 超链接被点击的特性的统一
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
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
.test {
  font-size: 37.5px;
}
.router-view{
  overflow-x: hidden;
}
// 从左到右
.slide-right-enter-active {
  animation: slideRight 0.4s;
}

.slide-left-enter-active {
  animation: slideLeft 0.4s;
}
.fade-enter-active {
  animation: fade 0.4s;
}
@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes slideLeft {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
@keyframes slideRight {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
