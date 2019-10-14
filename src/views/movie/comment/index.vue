<template>
  <div class="comment">
    <BaseLayer>
      <template v-slot:default>
        <div class="comment-header">
          <router-link class="movie" :to="{name:'details'}">
            <img class="header-1" src="@/assets/imgs/details/left.png" />
          </router-link>
          <img class="header-2" src="@/assets/imgs/details/share.png" />
        </div>
        <div class="cont">
          <div class="intr-title">
            <div class="title-1">简介</div>
            <div class="title-2">
              影评
              <sup class="sup">999+</sup>
              <div class="line"></div>
            </div>
            <div class="title-3">讨论</div>
            <div class="title-4">更多</div>
          </div>
          <div class="hot-title">
            <span class="hot">观众热评</span>
            <span class="write">写影评</span>
          </div>
          <div class="main">
            <p class="main-1">全部</p>
            <p class="main-2">最新</p>
            <p class="main-3">
              陪伴是最长情的告白
              <sup class="sup">1902</sup>
            </p>
            <p class="main-4">
              爱狗人士必看
              <sup class="sup">1902</sup>
            </p>
            <p class="main-5">
              好评
              <sup class="sup">5412</sup>
            </p>
            <p class="main-6">
              差评
              <sup class="sup">69</sup>
            </p>
            <p class="main-7">
              点映
              <sup class="sup">69</sup>
            </p>
            <p class="main-8">
              购票
              <sup class="sup">5790</sup>
            </p>
            <p class="main-9">
              影评达人
              <sup class="sup">13</sup>
            </p>
            <p class="main-10">
              同城
              <sup class="sup">69</sup>
            </p>
            <img class="header-3" src="@/assets/imgs/details/left.png" />
          </div>

          <div class="main-c">
            <div class="cont-1">
              <div class="pl-1">
                <img src="@/assets/imgs/comment/img-1.png" alt />
                <div class="yp">
                  <p class="yp-p">yujia2754</p>
                  <div class="star">
                    <img class="star-9" src="@/assets/imgs/details/star-1.png" alt />
                    <img class="star-9" src="@/assets/imgs/details/star-1.png" alt />
                    <img class="star-9" src="@/assets/imgs/details/star-1.png" alt />
                    <img class="star-9" src="@/assets/imgs/details/star-1.png" alt />
                    <img class="star-9" src="@/assets/imgs/details/star-2.png" alt />
                    <p class="pf-9">9.0</p>
                  </div>
                </div>
                <p class="sl"></p>
                <p class="sl"></p>
                <p class="sl"></p>
              </div>
              <div class="pl-2">
                <p
                  class="p"
                >2002年，15岁的石原里美参加了HORIPRO公司第27回艺人新人 选拔，获得最佳新人“完美少女”奖 。2003年2月15日，参演的 爱情电影《小岛之恋》上映…</p>
              </div>
              <div class="pl-3">
                <p class="time">05-17 09:34</p>
                <div class="dz">
                  <img src="@/assets/imgs/comment/con-2.png" alt />
                  <p>56</p>
                  <img src="@/assets/imgs/comment/con-3.png" alt />
                  <p>1</p>
                </div>
              </div>
            </div>
            <div class="cont-2">
              <div class="pl-1">
                <img src="@/assets/imgs/comment/img-2.png" alt />
                <div class="yp">
                  <p class="yp-p">yujia2754</p>
                  <div class="star">
                    <img class="star-9" src="@/assets/imgs/details/star-1.png" alt />
                    <img class="star-9" src="@/assets/imgs/details/star-1.png" alt />
                    <img class="star-9" src="@/assets/imgs/details/star-1.png" alt />
                    <img class="star-9" src="@/assets/imgs/details/star-1.png" alt />
                    <img class="star-9" src="@/assets/imgs/details/star-2.png" alt />
                    <p class="pf-9">9.0</p>
                  </div>
                </div>
                <p class="sl"></p>
                <p class="sl"></p>
                <p class="sl"></p>
              </div>
              <div class="pl-2">
                <p
                  class="p"
                >2002年，15岁的石原里美参加了HORIPRO公司第27回艺人新人 选拔，获得最佳新人“完美少女”奖 。2003年2月15日，参演的 爱情电影《小岛之恋》上映…</p>
              </div>
              <div class="pl-3">
                <p class="time">05-17 09:34</p>
                <div class="dz">
                  <img src="@/assets/imgs/comment/con-2.png" alt />
                  <p>56</p>
                  <img src="@/assets/imgs/comment/con-3.png" alt />
                  <p>1</p>
                </div>
              </div>
            </div>
            <div class="cont-3">
              <div class="pl-1">
                <img src="@/assets/imgs/comment/img-3.png" alt />
                <div class="yp">
                  <p class="yp-p">yujia2754</p>
                  <div class="star">
                    <img class="star-9" src="@/assets/imgs/details/star-1.png" alt />
                    <img class="star-9" src="@/assets/imgs/details/star-1.png" alt />
                    <img class="star-9" src="@/assets/imgs/details/star-1.png" alt />
                    <img class="star-9" src="@/assets/imgs/details/star-1.png" alt />
                    <img class="star-9" src="@/assets/imgs/details/star-2.png" alt />
                    <p class="pf-9">9.0</p>
                  </div>
                </div>
                <p class="sl"></p>
                <p class="sl"></p>
                <p class="sl"></p>
              </div>
              <div class="pl-2">
                <p
                  class="p"
                >2002年，15岁的石原里美参加了HORIPRO公司第27回艺人新人 选拔，获得最佳新人“完美少女”奖 。2003年2月15日，参演的 爱情电影《小岛之恋》上映…</p>
              </div>
              <div class="pl-3">
                <p class="time">05-17 09:34</p>
                <div class="dz">
                  <img src="@/assets/imgs/comment/con-2.png" alt />
                  <p>56</p>
                  <img src="@/assets/imgs/comment/con-3.png" alt />
                  <p>1</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-buy">
          <router-link class="footer-p" :to="{name:'choose'}" tag="div">特惠选座</router-link>
        </div>
      </template>
    </BaseLayer>
  </div>
</template>

<script>
import BaseLayer from "@/components/BaseLayer";
export default {
  name: "Comment",
  components: {
    BaseLayer
  },
  data() {
    return {};
  },

  methods: {}
};
</script>

<style lang='scss' scoped>
.comment {
  height: 100%;
  color: #fff;
  ::v-deep .header-bar{
    height: 0;
  }
  ::v-deep .scroll-wapper{
      margin-top: 0;
          height: 100%;
    }
  .comment-header {
    position: relative;
    width: 100%;
    height: 50px;
    .movie {
      position: absolute;
      left: 0;
      top: 0;
      margin: 10px;
    }
    .header-2 {
      position: absolute;
      top: 0;
      right: 0;
      display: block;
      width: 19px;
      height: 19px;
      margin: 20px;
    }
  }

  .cont {
    width: 100%;
    color: #fff;
    .intr-title {
      display: flex;
      width: 100%;
      font-size: 14px;
      margin: 20px;
      .title-2 {
        margin: 0 30px;
        .sup {
          display: inline-block;
          font-size: 8px;
        }
      }
      .title-4 {
        margin: 0 30px;
      }
      .line {
        width: 29px;
        height: 3px;
        margin: 2px 0;
        background: linear-gradient(
          135deg,
          rgba(241, 100, 129, 1) 0%,
          rgba(241, 144, 108, 1) 100%
        );
      }
    }
    .hot-title {
      width: 100%;
      margin: 20px 0;
      font-size: 12px;
      .hot {
        display: inline-block;
        width: 72px;
        height: 17px;
        font-size: 18px;
        margin-right: 209px;
      }
      .write {
        display: inline-block;
        width: 54px;
        height: 25px;
        line-height: 25px;
        background: linear-gradient(
          150deg,
          rgba(242, 91, 134, 1) 0%,
          rgba(241, 172, 94, 1) 100%
        );
        box-shadow: 0px 0px 4px 1px rgba(242, 109, 125, 0.18);
        border-radius: 13px;
      }
    }
    .main {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      font-size: 12px;
      margin-left: 20px;
      // margin: 0 90px 18px 30px;
      p {
        height: 22px;
        line-height: 22px;
        margin-right: 14px;
        margin-bottom: 15px;
        text-align: center;
        background: rgba(51, 54, 61, 1);
        border-radius: 10px;
        .sup {
          display: inline-block;
          font-size: 10px;
        }
      }
      .main-1,
      .main-2 {
        width: 44px;
      }
      .main-3,
      .main-4 {
        width: 149px;
        background: url(../../../assets/imgs/comment/con-1.png) no-repeat center;
      }
      .main-5,
      .main-8 {
        width: 65px;
      }
      .main-6,
      .main-7,
      .main-10 {
        width: 54px;
      }
      .main-9 {
        width: 75px;
      }
      .header-3 {
        transform: translate(-160px, 30px) rotate(-90deg);
      }
    }
    .main-c {
      width: 100%;
      margin: 40px 20px 10px;
      .cont-2 {
        margin: 25px 0;
      }
      .pl-1 {
        display: flex;
        align-items: center;
        .yp {
          margin-right: 150px;
          .yp-p {
            width: 65px;
            height: 14px;
            font-size: 14px;
            margin: 8px;
          }
          .star {
            display: flex;
            margin: 10px;
            .star-9 {
              width: 10px;
              height: 10px;
            }
            .pf-9 {
              width: 23px;
              height: 14px;
              font-size: 10px;
              color: #fbc34a;
            }
          }
        }
        .sl {
          width: 3px;
          height: 3px;
          background: rgba(255, 255, 255, 1);
          opacity: 0.7785;
          margin: 0 4px;
        }
      }
      .pl-2 {
        width: 337px;
        height: 54px;
        font-size: 12px;
        line-height: 18px;
        text-align: left;
      }
      .pl-3 {
        display: flex;
        margin-top:10px;
        .time {
          width: 70px;
          height: 17px;
          font-size: 12px;
          line-height: 17px;
          text-align: left;
        }
        .dz {
          display: flex;
          margin-left:180px;
          img {
            width: 17px;
            height: 17px;
          }
          p {
            width: 15px;
            height: 17px;
            font-size: 12px;
            line-height: 17px;
            margin: 1px 6px 0 2px;
          }
        }
      }
    }
  }
}

.footer-buy {
  width: 100%;
  width: 375px;
  height: 44px;
  background: linear-gradient(
    150deg,
    rgba(242, 91, 134, 1) 0%,
    rgba(241, 172, 94, 1) 100%
  );
  box-shadow: 0px 0px 4px 1px rgba(242, 109, 125, 0.18);
  border-radius: 6px;
  .footer-p {
    color: #fff;
    width: 73px;
    height: 40px;
    font-size: 18px;
    line-height:40px;
    margin: 20px auto;
  }
}
</style>
