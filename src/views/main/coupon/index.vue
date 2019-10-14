<template>
  <div class="coupon">
    <div class="header">
      <div class="item l" @click="$router.go(-1)">
          <img class="arr-l" src="../../../assets/imgs/icons/arrow-left2x.png" alt="">
      </div>
      <h2 class="tacket">我的影票</h2>
      <div class="item r"></div>
    </div>
    <div class="message">
        <p class="message-text">你有2张优惠券可用</p>
    </div>
    <div class="wrapper">
        <div class="content">
            <div class="main-coupon y">
                <ul class="coupon-l">
                    <li class="item-title">电影专享代金券</li>
                    <li class="item-center">购票即可抵扣 快去购票</li>
                    <li class="item-time">有效期至： 2018-04-11</li>
                </ul>
                <ul class="coupon-r">
                    <li class="price">5元</li>
                    <li class="purchase">购票</li>
                </ul>
            </div>

            <div class="main-coupon y">
                <ul class="coupon-l">
                    <li class="item-title">电影专享代金券</li>
                    <li class="item-center">购票即可抵扣 快去购票</li>
                    <li class="item-time">有效期至： 2018-04-11</li>
                </ul>
                <ul class="coupon-r">
                    <li class="price">5元</li>
                    <li class="purchase">购票</li>
                </ul>
            </div>

            <div class="main-coupon w">
                <ul class="coupon-l">
                    <li class="item-title">电影专享代金券</li>
                    <li class="item-center">购票即可抵扣 快去购票</li>
                    <li class="item-time">有效期至： 2018-04-05</li>
                </ul>
                <ul class="coupon-r">
                    <li class="price">5元</li>
                    <li class="expired"><img src="@/assets/imgs/coupon/past-due.png" alt=""></li>
                </ul>
            </div>

            <div class="main-coupon w">
                <ul class="coupon-l">
                    <li class="item-title">电影专享代金券</li>
                    <li class="item-center">购票即可抵扣 快去购票</li>
                    <li class="item-time">有效期至： 2018-04-05</li>
                </ul>
                <ul class="coupon-r">
                    <li class="price">5元</li>
                    <li class="expired"><img src="@/assets/imgs/coupon/past-due.png" alt=""></li>
                </ul>
            </div>

            <div class="main-coupon w">
                <ul class="coupon-l">
                    <li class="item-title">电影专享代金券</li>
                    <li class="item-center">购票即可抵扣 快去购票</li>
                    <li class="item-time">有效期至： 2018-04-05</li>
                </ul>
                <ul class="coupon-r">
                    <li class="price">5元</li>
                    <li class="expired"><img src="@/assets/imgs/coupon/past-due.png" alt=""></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="footer">
        <router-link to="{name:'home'}">去购票 > </router-link>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core';
export default {
  name: "Coupon",
  data() {
    return {};
  },
  mounted() {
    var wrapper = document.querySelector('.wrapper');
    var scroll = new BScroll(wrapper,{
        click:true
    });
    // console.log(scroll);
  }
};
</script>

<style lang='scss' scoped>
.coupon {
    margin: 0 auto;
    width: 100%;
    height: 100%;
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 44px;
        .tacket {
        color: #ffffff;
        font-size: 16px;
        }
        .item {
        width: 40px;
        height: 100%;
        font-size: 26px;
        text-align: center;
        color: gray;
        line-height: 44px;
        .arr-l{
            width: 7px;
            height: 13px;
        }
        }
    }
    .message{
        line-height: 30px;
        width: 100%;
        height: 30px;
        background-color:#2C2F36;
        .message-text{
            float: left;
            margin-left: 10px;
            font-size: 12px;
            color: gray;
        }
    }
}
.wrapper{
    margin-top: 14px;
    width: 100%;
    height: calc(100% - 158px);
    overflow: hidden;
    .content{
        width: 100%;
        height: auto;
        .main-coupon{
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 0 auto;
            margin-top: 14px;
            width: 335px;
            height: 120px;
            background: url("../../../assets/imgs/coupon/rectangle.png") no-repeat center;
            .coupon-l{
                margin-left: 30px;
                display: flex;
                flex-flow: column;
                justify-content: space-between;
                align-items: flex-start;
                width: 130px;
                height: 75px;
                color: #ffffff;
                .item-title{
                    font-size: 18px;
                    color: #FFFFFF;
                }
                .item-center ,.item-time{
                    font-size: 12px;
                    color: gray;
                }
            }
            .coupon-r{
                display: flex;
                flex-flow: column;
                justify-content: space-around;
                width: 120px;
                height: 120px;
                .price{
                    margin-top: 15px;
                    font-size: 24px;
                    color: #FFFFFF;
                }
                .purchase{
                    margin-bottom: 15px;
                    font-size: 18px;
                    color: #FFFFFF;
                }
            }
        }
        .main-coupon.w{
            background: url("../../../assets/imgs/coupon/rectangle00.png") no-repeat center;
            .coupon-r .expired{
                position: fixed;
                margin-top: 25px;
                margin-left: 45px;
            }
        }
    }
}
.footer{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70px;
    font-size: 18px;
    color: gray;
    line-height: 70px;
    background-color: #2C2F36;
    a{
        color: #ffffff;
        text-decoration: none;
    }
}
</style>