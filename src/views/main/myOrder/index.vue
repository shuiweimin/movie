<template>
  <div class="my-order">
    <div class="header">
      <div class="header-c">
        <router-link class="l" :to="{name:'main'}"> 
            <img class="arr-l" src="../../../assets/imgs/icons/arrow-left2x.png" alt="">
        </router-link>
        <h2>我的订单</h2>
        <p class="edit">编辑</p>
      </div>
      <div class="header-d">
        <router-link class="header-item all" :to="{name:'all'}">全部</router-link>
        <router-link class="header-item payment" :to="{name:'payment'}">待付款</router-link>
        <router-link class="header-item evaluate" :to="{name:'evaluate'}">待评价</router-link>
        <router-link class="header-item refund" :to="{name:'refund'}">退款</router-link>
      </div>
    </div>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: "MyOrder",
  data() {
      return {};
  },
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/common/common.scss";
.my-order {
  height: 100%;
  width: 100%;
  .header {
    width: 100%;
    height: 90px;
    background-color: $baseBgColor;
    .header-c {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 44px;
      width: 100%;
      .l {
        width: 42px;
        height: 42px;
        line-height: 42px;
        text-align: center;
        margin-left: 5px;
        font-size: 18px;
        text-decoration: none;
        color: #ffffff;
        .arr-l{
          width: 7px;
          height: 13px;
        }
      }
      h2 {
        font-size: 16px;
        color: #ffffff;
      }
      .edit {
        width: 42px;
        height: 20px;
        margin-right: 15px;
        font-size: 12px;
        line-height: 20px;
        text-align: center;
        border: 1px solid #f9c34a;
        color: #f9c34a;
      }
    }
    .header-d {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;
      width: 90%;
      height: 46px;
      font-size: 14px;
      .header-all.router-link-active {
        color: #f9c34a;
      }
      .header-item.router-link-active:after {
        content: "";
        display: inline-block;
        margin: 5px auto 0;
        width: 26px;
        height: 3px;
        border-radius: 1px;
        background-color: #f9c34a;
      }
      .header-item.payment.router-link-active:after {
        content: "";
        width: 42px;
      }
      .header-item.evaluate.router-link-active:after {
        content: "";
        width: 42px;
      }
      a {
        display: flex;
        flex-flow: column;
        height: 22px;
        text-decoration: none;
        color: #ffffff;
      }
    }
  }
}
</style>