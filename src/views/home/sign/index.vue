<template>
  <div class="sign">
    <div class="adorn"></div>
    <BaseLayer>
      <template v-slot:header>
        <div class="header">
          <div class="header-c">
            <router-link class="x-btn" :to="{name:'home'}" tag="div"></router-link>
            <div class="l-btn"></div>
          </div>
        </div>
      </template>
      <template v-slot:default>
        <div class="photo" name="move" mode="out-in" appear>
          <swiper class="photo-swiper" :options="swiperOption" ref="photoSwiper">
            <!-- slides -->
            <swiper-slide v-for="m in photoArr" :key="m.id">
              <div class="photo-item">
                <img class="photo-img" :src="m.url" alt />
                <div class="text">
                  <div class="photo-desc">{{m.desc}}</div>
                  <div class="photo-title">{{m.title}}</div>
                </div>
                <div class="r-btn">8s</div>
              </div>
            </swiper-slide>
          </swiper>
          <div class="btn-list">
            <div class="btn-item movie"></div>
            <div class="btn-item share"></div>
            <div class="btn-item prase"></div>
            <div class="btn-item talk"></div>
          </div>
        </div>
      </template>
    </BaseLayer>
  </div>
</template>

<script>
import { request } from "http";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import BaseLayer from "@/components/BaseLayer";
export default {
  name: "Sign",
  components: {
    swiper,
    swiperSlide,
    BaseLayer
  },
  props: {},
  data() {
    return {
      photoArr: [
        {
          id: 1,
          desc: "“要是他没有触犯我的骄傲， 我也很容易原谅他的骄傲。”",
          title: "<<傲慢与偏见>>",
          url: require("@/assets/imgs/home/sgin/amypj.png")
        },
        {
          id: 2,
          desc: "“要是他没有触犯我的骄傲， 我也很容易原谅他的骄傲。”",
          title: "<<傲慢与偏见>>",
          url: require("@/assets/imgs/home/sgin/prxd.png")
        },
        {
          id: 3,
          desc: "“要是他没有触犯我的骄傲， 我也很容易原谅他的骄傲。”",
          title: "<<傲慢与偏见>>",
          url: require("@/assets/imgs/home/sgin/lmjq.png")
        }
      ],
      swiperOption: {
        direction: "horizontal",
        effect: "coverflow",
        slidesPerView: 1,
        centeredSlides: true,
        coverflowEffect: {
          rotate: 30,
          stretch: 10,
          depth: 60,
          modifier: 4,
          slideShadows: true
        }
      }
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.sign {
  width: 100%;
  height: 100%;
  ::v-deep .baseLayer-main {
    height: 100%;
    padding: 1px;
    .header-bar {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100px;
      background-color: rgba(35, 38, 45, 0);
      z-index: 999;
    }  
    .scroll-wapper {
      height: calc(100%-100px);
      margin-top: 100px;
      overflow: hidden;
     .scroll-content {
        padding: 0px 0px 100px;
      }
    }
  }
  .adorn {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 200px;
    border-radius: 30px;
    background: linear-gradient(
      130deg,
      rgba(242, 94, 132, 1) 0%,
      rgba(241, 165, 98, 1) 100%
    );
  }
  .header {
    margin-top: 24px;
    width: 100%;
    .header-c {
      display: flex;
      box-sizing: border-box;
      width: 100%;
      height: 40px;
      padding: 0 20px;
      justify-content: space-between;
      align-items: center;
      .x-btn {
        width: 16px;
        height: 100%;
        background: url(../../../assets/imgs/home/sgin/cw2.png) no-repeat center;
        background-size: 16px 16px;
      }
      .l-btn {
        width: 21px;
        height: 100%;
        background: url(../../../assets/imgs/home/sgin/cw1.png) no-repeat center;
        background-size: 21px 16px;
      }
    }
  }
  .photo {
    width: 350px;
    margin: 0 auto 40px;
    .photo-item {
      position: relative;
      width: 350px;
      height: 600px;
      background: url(../../../assets/imgs/home/sgin/dbj1.png) no-repeat 20px
          50px /320px,
        url(../../../assets/imgs/home/sgin/dbj2.png) no-repeat 20px 75px /320px;
      .photo-img {
        width: 350px;
        border-radius: 35px;
      }
      .text {
        position: absolute;
        left: 20px;
        bottom: 120px;
        width: 227px;
        .photo-desc {
          font-size: 18px;
          line-height: 25px;
          color: rgb(224, 224, 224);
        }
        .photo-title {
          text-align: left;
          line-height: 25px;
          color: rgb(151, 151, 151);
        }
      }
      .r-btn {
        position: absolute;
        right: 20px;
        bottom: 120px;
        width: 73px;
        height: 30px;
        font-size: 16px;
        line-height: 30px;
        color: #f7f7f7;
        background: url(../../../assets/imgs/home/sgin/lb@3x.png) no-repeat 5px
            center/ 16px 16px,
          linear-gradient(
            150deg,
            rgba(242, 91, 134, 1) 0%,
            rgba(241, 172, 94, 1) 100%
          );
        box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.5);
        border-radius: 11px;
      }
    }
  }
  .btn-list {
    display: flex;
    box-sizing: border-box;
    width: 100%;
    height: 22px;
    padding: 0 20px;
    justify-content: space-around;
    align-items: center;
    .btn-item {
      width: 21px;
      height: 21px;
      background-position: center;
      background-size: 21px 21px;
      &.movie {
        background-image: url(../../../assets/imgs/home/sgin/dy@3x.png);
      }
      &.share {
        background-image: url(../../../assets/imgs/home/sgin/fx@3x.png);
      }
      &.prase {
        background-image: url(../../../assets/imgs/home/sgin/dz@3x.png);
      }
      &.talk {
        background-image: url(../../../assets/imgs/home/sgin/pl@3x.png);
      }
    }
  }
}
</style>