<template>
  <!-- 用户信息页面 -->
  <div class="userInformation">
    <BaseLayer>
      <!-- 头部部分 -->
      <template v-slot:header>
        <div class="user-icon">
          <router-link :to="{name:'main'}">
            <img src="../../../assets/imgs/my/iconLeft.png" alt />
          </router-link>
          <div class="noSee"></div>
        </div>
        <div class="user-des">
          <a href="#" class="headerPhoto">
            <img src="../../../assets/imgs/my/userPhoto.png" alt />
          </a>
          <div class="user-name">
            <div class="userName">
              <p class="p1">yujia1130</p>
              <div class="vip-box">
                <img src="../../../assets/imgs/my/vip.png" alt />
                <p class="p2">LV1</p>
              </div>
            </div>
            <p class="p3">同学有点懒，还没有签名</p>
            <div class="see-history">
              <div class="see wantSee">
                <p>想看</p>
                <p>12</p>
              </div>
              <div class="see alreadySee">
                <p>看过</p>
                <p>5</p>
              </div>
            </div>
          </div>
        </div>
      </template>
      <!-- 内容部分 -->
      <template v-slot:default>
        <div class="movie-title">看过电影</div>
        <!-- 电影(1) -->
        <div class="seeMovie-list">
          <div class="evaluate">
            <img src="../../../assets/imgs/my/starTwo.png" alt />
            <img src="../../../assets/imgs/my/starTwo.png" alt />
            <img src="../../../assets/imgs/my/starTwo.png" alt />
            <img src="../../../assets/imgs/my/starTwo.png" alt />
            <img src="../../../assets/imgs/my/starOne.png" alt />
            <p>9分，很好</p>
          </div>
          <div class="movie-name">
            <img src="../../../assets/imgs/my/us1.png" alt />
            <div class="movie-desc">
              <span>后来的我们</span>
              <p>剧情</p>
              <p>中国/105分钟</p>
              <p>购票时间2017-8-4</p>
            </div>
          </div>
        </div>
        <!-- 电影(2) -->
        <div class="seeMovie-list">
          <div class="evaluate">
            <img src="../../../assets/imgs/my/starTwo.png" alt />
            <img src="../../../assets/imgs/my/starTwo.png" alt />
            <img src="../../../assets/imgs/my/starTwo.png" alt />
            <img src="../../../assets/imgs/my/starTwo.png" alt />
            <img src="../../../assets/imgs/my/starThree.png" alt />
            <p>8分，一般</p>
          </div>
          <div class="movie-name">
            <img src="../../../assets/imgs/my/pading.png" alt />
            <div class="movie-desc">
              <span>帕丁顿熊</span>
              <p>动画/奇幻</p>
              <p>美国/105分钟</p>
              <p>购票时间2017-8-4</p>
            </div>
          </div>
        </div>
        <!-- 电影(3) -->
        <div class="seeMovie-list">
          <div class="evaluate">
            <img src="../../../assets/imgs/my/starTwo.png" alt />
            <img src="../../../assets/imgs/my/starTwo.png" alt />
            <img src="../../../assets/imgs/my/starTwo.png" alt />
            <img src="../../../assets/imgs/my/starTwo.png" alt />
            <img src="../../../assets/imgs/my/starOne.png" alt />
            <p>9分，很好</p>
          </div>
          <div class="movie-name">
            <img src="../../../assets/imgs/my/fish.png" alt />
            <div class="movie-desc">
              <span>大鱼海棠</span>
              <p>动画/奇幻</p>
              <p>中国/105分钟</p>
              <p>购票时间2018-8-4</p>
            </div>
          </div>
        </div>
        <!-- 电影(4) -->
        <div class="seeMovie-list">
          <div class="evaluate">
            <img src="../../../assets/imgs/my/starTwo.png" alt />
            <img src="../../../assets/imgs/my/starTwo.png" alt />
            <img src="../../../assets/imgs/my/starTwo.png" alt />
            <img src="../../../assets/imgs/my/starTwo.png" alt />
            <img src="../../../assets/imgs/my/starThree.png" alt />
            <p>8分，一般</p>
          </div>
          <div class="movie-name">
            <img src="../../../assets/imgs/my/aoman.png" alt />
            <div class="movie-desc">
              <span>傲慢与偏见</span>
              <p>剧情</p>
              <p>美国/105分钟</p>
              <p>购票时间2017-8-4</p>
            </div>
          </div>
        </div>

        <div class="empty"></div>
      </template>
    </BaseLayer>
  </div>
</template>

<script>
import BaseLayer from "@/components/BaseLayer";

export default {
  name: "userInformation",
  components: {
    BaseLayer
  },
  data() {
    return {
      count: 0
    };
  },
  methods: {}
};
</script>

<style lang='scss' scoped>
.userInformation {
  width: 100%;
  height: 100%;
  .baseLayer-main {
    ::v-deep .header-bar {
      position: static;
      width: 100%;
      height: auto;
      background-color: #23262d;
      .user-icon {
        width: 100%;
        height: 250px;
        background: linear-gradient(
          127deg,
          rgba(242, 98, 131, 1) 0%,
          rgba(241, 163, 99, 1) 100%
        );
        border-radius: 29px;
        display: flex;
        justify-content: space-between;
        a {
          display: block;
          width: 32px;
          height: 32px;
          margin-top: 30px;
          margin-left: 12px;
        }
      }
      .user-des {
        width: 336px;
        height: 180px;
        background-color: #33363d;
        box-shadow: 0px 0px 4px 3px rgba(0, 0, 0, 0.1);
        border-radius: 17px;
        margin: -150px auto 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        .headerPhoto {
          margin-top: -37px;
        }
        .user-name {
          display: flex;
          flex-direction: column;
          .userName {
            display: flex;
            margin-top: 5px;
            justify-content: center;
            align-items: center;
            .p1 {
              font-size: 18px;
              color: #ffffff;
              line-height: 25px;
            }
            .vip-box {
              width: 50px;
              height: 18px;
              border-radius: 12px;
              border: 1px solid rgba(251, 195, 73, 1);
              margin-left: 5px;
              display: flex;
              justify-content: center;
              align-items: center;
              .p2 {
                font-size: 10px;
                color: #fbc349;
                line-height: 14px;
              }
            }
          }
          .p3 {
            font-size: 14px;
            color: #63656b;
            line-height: 20px;
            margin-top: 5px;
          }
          .see-history {
            display: flex;
            margin-top: 30px;
            .see {
              display: flex;
              justify-content: space-around;
              align-items: center;
              width: 134px;
              height: 37px;
              border-radius: 6px;
              font-size: 14px;
              line-height: 20px;
              color: #ffffff;
              &.wantSee {
                border: 1px solid #ee9966;
              }
              &.alreadySee {
                margin-left: 10px;
                border: 1px solid #aa4287;
              }
            }
          }
        }
      }
    }
    ::v-deep .scroll-wapper {
      width: 100%;
      height: 330px;
      // margin-top: 300px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .scroll-content {
        width: 100%;
        height: 700px;
        .movie-title {
          width: 100%;
          padding: 0 20px;
          font-size: 18px;
          color: #ffffff;
          text-align: left;
          line-height: 25px;
        }
        .seeMovie-list {
          width: 100%;
          display: flex;
          flex-direction: column;
          margin-top: 10px;
          .evaluate {
            width: 100%;
            display: flex;
            align-items: center;
            padding: 0 20px;
            margin-bottom: 10px;
            img {
              width: 10px;
              height: 10px;
            }
            p {
              font-size: 12px;
              line-height: 17px;
              color: #fbc34a;
              margin-left: 5px;
            }
          }
          .movie-name {
            display: flex;
            justify-content: space-between;
            margin: 0 20px;
            background: #33363d;
            img {
              width: 94px;
              height: 120px;
            }
            .movie-desc {
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              border-top-right-radius: 6px;
              border-bottom-right-radius: 6px;
              width: 241px;
              height: 120px;
              box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.04);
              span {
                font-size: 16px;
                line-height: 22px;
                color: #ffffff;
                text-align: left;
                padding-left: 20px;
              }
              p {
                font-size: 12px;
                line-height: 17px;
                color: #5e6065;
                text-align: left;
                padding-left: 20px;
              }
            }
          }
        }
        .empty {
          width: 100%;
          height: 20px;
        }
      }
    }
  }
}
</style>