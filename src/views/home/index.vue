<template>
  <div class="home-main">
    <!-- <transition name="slide-left" mode="out-in"> -->
      <BaseLayer v-show="isShow">
        <!-- 头部 -->
        <template v-slot:header>
          <div class="header">
            <router-link class="city" :to="{name:'city'}" tag="div">
              <p>{{nowCity.name}}</p>
              <span class="b-btn"></span>
            </router-link>
            <input class="search" type="text" placeholder="搜影片 影院 影人" @focus="goSearch" />
            <router-link class="sign" :to="{name:'sign'}" tag="div"></router-link>
          </div>
        </template>

        <!-- 内容 -->
        <template v-slot:default>
          <div class="banner">
            <swiper class="banner-swiper" :options="swiperOption" ref="mySwiper">
              <!-- slides -->
              <swiper-slide v-for="m in imgs" :key="m.id">
                <img class="banner-img" :src="m.url" alt />
              </swiper-slide>
              <!-- Optional controls -->
            </swiper>
            <div class="swiper-pagination" slot="pagination"></div>
          </div>
          <div class="container">
            <div class="title">
              <div class="title-left">
                <div class="t-line"></div>
                <div class="t-text">热映影片</div>
              </div>
              <router-link class="title-right" :to="{name:'movieHot'}" tag="div">
                全部
                <span class="r-btn"></span>
              </router-link>
            </div>
            <div class="hot">
              <swiper class="hot-swiper" :options="hot_swiperOption" ref="hotSwiper">
                <!-- slides -->
                <swiper-slide v-for="m in hotArr" :key="m.id">
                  <div class="hot-item">
                    <img class="hot-img" :src="m.url" alt />
                    <div class="hot-title">{{m.title}}</div>
                    <router-link class="shop-btn" :to="{name:'shopping'}" tag='div'>购票</router-link>
                    <!-- <div class="shop-btn">购票</div> -->
                  </div>
                </swiper-slide>
                <!-- Optional controls -->
              </swiper>
            </div>
            <div class="title">
              <div class="title-left">
                <div class="t-line"></div>
                <div class="t-text">即将上映</div>
              </div>
              <router-link class="title-right" :to="{name:'movieSoon'}" tag="div">
                全部
                <span class="r-btn"></span>
              </router-link>
            </div>
            <div class="coming">
              <swiper class="com-swiper" :options="come_swiperOption" ref="comSwiper">
                <!-- slides -->
                <swiper-slide v-for="m in comArr" :key="m.id">
                  <div class="com-item">
                    <img class="com-img" :src="m.url" alt />
                    <div class="com-title">{{m.title}}</div>
                    <div class="up-date">{{m.date}}</div>
                  </div>
                </swiper-slide>
                <!-- Optional controls -->
              </swiper>
            </div>
            <div class="title">
              <div class="title-left">
                <div class="t-line"></div>
                <div class="t-text">精选预告</div>
              </div>
              <div class="title-right">
                更多
                <span class="r-btn"></span>
              </div>
            </div>
            <div class="prevue">
              <swiper class="video-swiper" :options="video_swiperOption" ref="videoSwiper">
                <!-- slides -->
                <swiper-slide>
                  <div class="video-item">
                    <video
                      loop
                      controls
                      preload="auto"
                      poster="../../assets/imgs/home/jt-2@3x.png"
                      src="../../assets/imgs/home/xlgs.mp4"
                    >
                      <source src="../../assets/imgs/home/xlgs.mp4" type="video/mp4" />
                    </video>
                    <div class="prevue-desc">《大护法》是一部能够体现反专制、反乌托邦式的寓言动 画…</div>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="video-item">
                    <video
                      loop
                      controls
                      preload="auto"
                      poster="../../assets/imgs/home/ju-1@3x.png"
                      src="../../assets/imgs/home/xlgs.mp4"
                    >
                      <source src="../../assets/imgs/home/xlgs.mp4" type="video/mp4" />
                    </video>
                    <div class="prevue-desc">《大护法》是一部能够体现反专制、反乌托邦式的寓言动 画…</div>
                  </div>
                </swiper-slide>
                <!-- Optional controls -->
              </swiper>
            </div>
          </div>
        </template>
      </BaseLayer>
    <!-- </transition> -->
    <transition name="slide-right" mode="out-in">
      <!-- <transition enter-active-class="animated slideInRight"> -->
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import BaseLayer from "@/components/BaseLayer";
import Foo from "@/components/Foo";
// import animated from "animate.css";
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
export default {
  name: "Home",
  components: {
    swiper,
    swiperSlide,
    BaseLayer,
    Foo
  },
  data() {
    // 在vue的js中引入图片资源 应该使用require
    return {
      isShow: true,
      imgs: [
        {
          id: 11,
          url: require("@/assets/imgs/home/banner1.png")
        },
        {
          id: 12,
          url: require("@/assets/imgs/home/banner2.png")
        },
        {
          id: 13,
          url: require("@/assets/imgs/home/banner3.png")
        }
      ],
      hotArr: [
        {
          id: 21,
          title: "韩国电影",
          url: require("@/assets/imgs/home/hot-1@2x.png")
        },
        {
          id: 22,
          title: "傲慢与偏见",
          url: require("@/assets/imgs/home/hot-2@2x.png")
        },
        {
          id: 23,
          title: "帕丁顿熊",
          url: require("@/assets/imgs/home/hot-3@2x.png")
        },
        {
          id: 24,
          title: "THE WORLD NEDS",
          url: require("@/assets/imgs/home/hot-4@2x.png")
        }
      ],
      comArr: [
        {
          id: 31,
          title: "My bluebery…",
          date: "1月5日",
          url: require("@/assets/imgs/home/com-3@2x.png")
        },
        {
          id: 321,
          title: "BABBIT HOLE ",
          date: "1月5日",
          url: require("@/assets/imgs/home/com-4@2x.png")
        },
        {
          id: 33,
          title: "Basty…",
          date: "1月5日",
          url: require("@/assets/imgs/home/com-1@2x.png")
        },
        {
          id: 34,
          title: "My bluebery…",
          date: "1月5日",
          url: require("@/assets/imgs/home/com-2@2x.png")
        }
      ],
      swiperOption: {
        autoplay: true,
        slidesPerView: 1.2,
        spaceBetween: 10,
        centeredSlides: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination"
        }
      },
      hot_swiperOption: {
        slidesPerView: 3.3
      },
      come_swiperOption: {
        slidesPerView: 2.7
      },
      video_swiperOption: {
        slidesPerView: 1.2
      }
    };
  },
  created() {
    if (this.$route.name != "home") {
      this.isShow = false;
    }
  },
  mounted() {},
  computed: {
    ...mapState({
      nowCity: state => state.city.nowCity
    })
  },
  methods: {
    goSearch() {
      this.$router.push({
        name: "search"
      });
    }
  },
  beforeRouteUpdate(to, from, next) {
    if (to.name != "home") {
      this.isShow = false;
    } else {
      this.isShow = true;
    }
    next();
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/common/common.scss";
.home-main {
  height: 100%;
  ::v-deep .baseLayer-main {
    height: 100%;
    .header-bar {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 40px;
      background-color: #23262d;
      z-index: 999;
    }
    .scroll-wapper {
      height: 100%;
      overflow: hidden;
      margin: 0px;
      .scroll-content {
        padding: 40px 0 100px;
        overflow: hidden;
      }
    }
  }
  .header {
    display: flex;
    width: 100%;
    height: 40px;
    justify-content: space-around;
    align-items: center;
    color: #fff;
    background-color: #23262d;
    .city {
      width: 50px;
      height: 100%;
      margin-left: 20px;
      font-size: 14px;
      line-height: 40px;
      color: $baseColor;
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        width: 100%;
        height: 100%;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .b-btn {
        display: inline-block;
        width: 12px;
        height: 100%;
        margin-left: 5px;
        background: url(../../assets/imgs/home/b-btn2x.png) no-repeat center;
        background-size: 12px 6px;
      }
    }
    .search {
      width: 220px;
      height: 30px;
      padding: 0 10px;
      margin: 5px;
      text-indent: 25px;
      background: #33363d url(../../assets/imgs/home/search@2x.png) no-repeat
        10px center;
      background-size: 20px 20px;
      border: none;
      outline: none;
      border-radius: 16px;
      color: $baseColor;
    }
    .sign {
      width: 20px;
      height: 100%;
      margin-right: 20px;
      background: url(../../assets/imgs/home/sgin@2x.png) no-repeat center;
      background-size: 20px 20px;
    }
  }

  .banner {
    width: 100%;
    height: 145px;
    margin-top: 12px;
    .banner-swiper {
      width: 100%;
      height: 145px;
      .swiper-slide {
        width: 335px;
        transform: scale(1.02, 0.8);
        transition: all ease 0.4s;
        .banner-img {
          width: 100%;
          height: 100%;
        }
        &.swiper-slide-active {
          transform: scale(1);
        }
      }
    }
    .swiper-pagination {
      position: static;
      margin: 8px auto;
      ::v-deep .swiper-pagination-bullet {
        width: 4px;
        height: 4px;
        background-color: #b2b2b2;
        border-radius: 2px;
        margin: 0 4px;
        transition: all ease 0.4s;
        &.swiper-pagination-bullet-active {
          width: 14px;
          height: 3px;
          background-color: #fff;
        }
      }
    }
  }
  .container {
    box-sizing: border-box;
    width: 100%;
    padding-left: 20px;
    margin: 20px 0 0;
    overflow: hidden;
    .title {
      display: flex;
      width: 100%;
      height: 20px;
      margin: 10px 0;
      justify-content: space-between;
      align-items: center;
      .title-left {
        .t-line {
          float: left;
          width: 4px;
          height: 20px;
          background: linear-gradient(
            90deg,
            rgba(242, 97, 130, 1) 0%,
            rgba(241, 160, 100, 1) 100%
          );
        }
        .t-text {
          float: left;
          margin-left: 5px;
          font-size: 18px;
          line-height: 20px;
          font-weight: bold;
          color: #dfdfdf;
        }
      }
      .title-right {
        width: 50px;
        height: 100%;
        margin-right: 20px;
        line-height: 23px;
        color: #dfdfdf;
        .r-btn {
          float: right;
          width: 12px;
          height: 20px;
          height: 100%;
          margin-left: 5px;
          background: url(../../assets/imgs/home/r-btn.png) no-repeat center;
          background-size: 12px 12px;
        }
      }
    }
    .hot {
      width: 100%;
      margin-bottom: 20px;
      .hot-item {
        width: 90px;
        margin-right: 15px;
        .hot-img {
          display: block;
          width: 90px;
          height: 122px;
        }
        .hot-title {
          width: 90px;
          height: 12px;
          margin: 10px 0;
          font-size: 12px;
          text-align: left;
          text-overflow: ellipsis;
          color: #dfdfdf;
        }
        .shop-btn {
          width: 50px;
          height: 22px;
          margin: 0 auto;
          line-height: 22px;
          color: #dfdfdf;
          background: linear-gradient(
            150deg,
            rgba(242, 91, 134, 1) 0%,
            rgba(241, 172, 94, 1) 100%
          );
          box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.5);
          border-radius: 11px;
        }
      }
    }
    .coming {
      width: 100%;
      .com-item {
        width: 120px;
        margin-right: 15px;
        .com-img {
          display: block;
          width: 120px;
          height: 162px;
        }
        .com-title {
          width: 120px;
          height: 14px;
          margin: 10px 0;
          font-size: 14px;
          text-align: left;
          text-overflow: ellipsis;
          color: #dfdfdf;
        }
        .up-date {
          width: 120px;
          height: 14px;
          margin: 10px 0;
          font-size: 14px;
          text-align: left;
          text-overflow: ellipsis;
          color: #5e6166;
        }
      }
    }
    .prevue {
      width: 100%;
      .video-item {
        width: 295px;
        video {
          width: 295px;
          height: 160px;
        }
        .prevue-desc {
          width: 295px;
          height: 40px;
          font-size: 12px;
          line-height: 20px;
          text-align: left;
          color: #dfdfdf;
        }
      }
    }
  }
}

.slide-right-enter-active {
  animation: slideRight 0.4s ease-out;
}

.slide-left-enter-active {
  animation: slideLeft 0.4s ease-out;
}

@keyframes slideLeft {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes slideRight {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
