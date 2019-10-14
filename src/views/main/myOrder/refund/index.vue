<template>
<div class="main refund">
  <div class="content">
    <div class="content-main b" @click="$router.push('/main/mytackets')">
      <div class="refund-item">
        <div class="item-title">
          <h2>万达国际影城
            <img class="arr-r" src="../../../../assets/imgs/icons/arrow-left2x.png" alt />
          </h2>
          <h2>等待退款</h2>
        </div>
        <div class="item-refund">
          <img src="@/assets/imgs/myOrder/star.png" alt />
          <div class="all">
            <div class="item-text">
              <h2>星空</h2>
              <h2>1张</h2>
            </div>
            <div class="item-date">
              <p class="date-text">5月18日 12:00</p>
              <p class="position">五号厅 5排14座 5排15座</p>
            </div>
          </div>
        </div>
        <div class="item-end">
          <p class="price">总价: 70元</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import BScroll from "@better-scroll/core";
export default {
  name: "Refund",
  data() {
    return {};
  },
  mounted() {
    var wrapper = document.querySelector(".main");
    var scroll = new BScroll(wrapper,{
      click:true
    });
    // console.log(scroll);
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/common/common.scss";
html,
body {
  height: 100%;
  width: 100%;
}
.main {
  width: 100%;
  height: calc(100% - 100px);
  overflow: hidden;
  .content {
    width: 100%;
    height: auto;
    .content-main {
      width: 335px;
      height: 161px;
      margin: 0 auto;
      margin-bottom: 15px;
      background-color: #33363d;
      border-radius: 8px;
      .refund-item {
        width: 90%;
        height: 90%;
        margin: 0 auto;
        transform: translateY(5%);
        line-height: 100%;
        .item-title {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          height: 30px;
          font-size: 14px;
          color: #ffffff;
          h2 {
            display: flex;
            align-items: center;
            .arr-r {
              margin-left: 8px;
              width: 7px;
              height: 13px;
              transform: rotate(180deg);
            }
          }
        }
        .item-refund {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          height: 81px;
          .all {
            margin-left: 16px;
            width: 100%;
            .item-text {
              display: flex;
              align-items: center;
              justify-content: space-between;
              width: 150px;
              height: 20px;
              font-size: 14px;
              color: #ffffff;
            }
            .item-date {
              display: flex;
              flex-flow: column;
              justify-content: space-between;
              width: 132px;
              height: 32px;
              margin-top: 10px;
              font-size: 12px;
              color: $baseColor;
              .date-text {
                margin-left: -54px;
              }
            }
          }
        }
        .item-end {
          width: 100%;
          height: 35px;
          .price {
            float: left;
            font-size: 12px;
            color: $baseColor;
            line-height: 35px;
          }
        }
      }
    }
  }
}
</style>