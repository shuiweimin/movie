<template>
  <div class="main-main" >
    <!-- 用户登录信息 -->
    <div class="user">
      <!-- 用户姓名 头像信息 -->
      <div class="user-info">
        <!-- 用户头像 -->
        <a href="#" class="a-img">
          <img src="../../assets/imgs/my/userPhoto.png" alt />
        </a>
        <!-- 用户姓名 -->
        <div class="user-list">
          <span class="user-name">yujia1130</span>
          <span class="user-vipInfo">
            V1青铜会员
            <a href="#">
              <img src="../../assets/imgs/my/iconRight.png" alt />
            </a>
          </span>
        </div>
      </div>
      <!-- VIP会员信息 -->
      <div class="user-vip">
        <p class="vipCenter">会员中心</p>
        <span class="line"></span>
        <div class="vip-box">
          <p class="p1">会员中心</p>
          <p>50元通兑劵天天送</p>
        </div>
        <a href="#">
          <img src="../../assets/imgs/my/money.png" alt />
        </a>
      </div>
      <div class="small-icons">
        <router-link :to="{name:'setUp'}">
          <img src="../../assets/imgs/my/set.png" alt />
        </router-link>
        <router-link :to="{name:'information'}">
          <img src="../../assets/imgs/my/talk.png" alt />
       </router-link>
      </div>
       <!-- 跳转页面箭头 -->
      <div class="jump"> 
        <router-link :to="{name:'userInformation'}">
          <img src="../../assets/imgs/my/Bigright.png" alt />
        </router-link>
      </div>
    </div>

    <!-- 我的订单 -->
    <div class="my-Other">
      <!-- 标头内容 -->
      <div class="my-title">
        <p>我的订单</p>
        <div class="my-all">
          <p>全部</p>
          <router-link :to="{name:'all'}">
            <img src="../../assets/imgs/my/iconRight.png" alt />
          </router-link>
        </div>
      </div>
      <!-- 分类内容 -->
      <ul class="my-type">
        <li class="type-list">
          <router-link :to="{name:'all'}">
            <img src="../../assets/imgs/my/xiaofei.png" alt />
          </router-link>
          <a href="#">未消费</a>
        </li>
        <li class="type-list">
          <router-link :to="{name:'payment'}">
            <img src="../../assets/imgs/my/buy.png" alt />
          </router-link>
          <a href="#">待付款</a>
        </li>
        <li class="type-list">
          <router-link :to="{name:'evaluate'}">
            <img src="../../assets/imgs/my/pingjia.png" alt />
          </router-link>
          <a href="#">待评价</a>
        </li>
        <li class="type-list">
          <router-link :to="{name:'refund'}">
            <img src="../../assets/imgs/my/tuikuan.png" alt />
          </router-link>
          <a href="#">退款</a>
        </li>
      </ul>
    </div>

    <!-- 我的其他内容信息与网页信息 -->

    <div class="movie-info">
      <div class="movie-list">
        <p>影城会员卡</p>
        <router-link :to="{name:'vipcard'}">
          <img src="../../assets/imgs/my/iconRight.png" alt />
        </router-link>
      </div>
      <div class="movie-list">
        <p>优惠劵</p>
        <router-link :to="{name:'coupon'}">
          <img src="../../assets/imgs/my/iconRight.png" alt />
        </router-link>
      </div>
      <div class="movie-list">
        <p>我的收藏</p>
        <router-link :to="{name:'setUp'}">
          <img src="../../assets/imgs/my/iconRight.png" alt />
        </router-link>
      </div>
      <div class="movie-list">
        <p>帮助与反馈</p>
         <router-link :to="{name:'setUp'}">
          <img src="../../assets/imgs/my/iconRight.png" alt />
         </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {};
  },

  methods: {}
};
</script>

<style lang='scss' scoped>
.main-main {
  width: 100%;
  .user {
   position: relative;
    width: 100%;
    .user-info {
      width: 100%;
      height: 160px;
      background: linear-gradient(
        123deg,
        rgba(242, 94, 133, 1) 0%,
        rgba(241, 166, 97, 1) 100%
      );
      border-radius: 29px;
      display: flex;
      align-items: center;
      z-index: -1;
      .a-img {
        margin-left: 20px;
      }
      .user-list {
        display: flex;
        flex-direction: column;
        margin-left: 20px;
        .user-name {
          font-size: 18px;
          color: #ffffff;
          line-height: 25px;
          font-weight: 500;
        }
        .user-vipInfo {
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          width: 99px;
          height: 23px;
          background-color: #33363d;
          color: #ffffff;
          font-size: 14px;
          line-height: 23px;
          font-weight: 400;
          border-radius: 5px;
          opacity: 0.7;
          a {
            display: block;
            width: 16px;
            height: 16px;
          }
        }
      }
    }
    .user-vip {
      display: flex;
      align-items: center;
      width: 336px;
      height: 68px;
      margin: -30px auto 0 auto;
      background: rgba(51, 54, 61, 1);
      box-shadow: 0px 0px 4px 3px rgba(0, 0, 0, 0.1);
      border-radius: 17px;
      z-index: 1;
      .vipCenter {
        font-size: 18px;
        color: #ffffff;
        line-height: 25px;
        font-weight: 500;
        margin-left: 36px;
      }
      .line {
        width: 1px;
        height: 47px;
        background-color: #979797;
        margin-left: 11px;
        margin-right: 16px;
      }
      .vip-box {
        margin-right: 48px;
        text-align: left;
        color: #b7b8ba;
        font-size: 12px;
        line-height: 17px;
        .p1 {
          margin-bottom: 8px;
        }
      }
    }
    .small-icons {
      position: absolute;
      top: 20px;
      right: 20px;
      a {
        margin-left: 12px;
      }
    }
    .jump{
      position: absolute;
      top: 70px;
      right: 10px;
    }
  }
  .my-Other {
    width: 100%;
    height: 137px;
    background: rgba(51, 54, 61, 1);
    margin: 15px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .my-title {
      display: flex;
      justify-content: space-between;
      padding: 10px 20px;
      p {
        font-size: 18px;
        line-height: 25px;
        color: #ffffff;
      }
      .my-all {
        display: flex;
        align-items: center;
        p {
          font-size: 14px;
          line-height: 20px;
          color: #6d6f74;
        }
      }
    }
    .my-type {
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 0 20px;
      margin-bottom: 30px;
      .type-list {
        display: flex;
        flex-direction: column;
        a {
          text-decoration: none;
          font-size: 14px;
          line-height: 20px;
          color: #ffffff;
          margin-top: 14px;
        }
      }
    }
  }
  .movie-info {
    width: 100%;
    height: 200px;
    background-color: rgba(51, 54, 61, 1);
    .movie-list {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: calc(200px / 4);
      padding: 0 20px;
      p {
        font-size: 16px;
        line-height: 22px;
        color: #ffffff;
      }
    }
  }
}
</style>
