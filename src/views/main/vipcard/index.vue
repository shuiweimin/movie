<template>
  <div class="movie-movie">
    <BaseLayer>
      <template v-slot:header>
        <div class="head">
         
          <img src="../../../assets/imgs/icons/return.png" @click="goout" alt class="return-img" />
          <p>影城卡</p>
          <div></div>
        </div>
      </template>

      <template v-slot:default>
        <div class="box">
          <div class="box-tit">
            <p class="where">成龙影城特权卡</p>
            <span class="money">10元起</span>
          </div>
          <div class="box-con">
            <p>开卡可享购票超值会员价</p>
          </div>
          <div class="box-bot">
            <p class="time">有效期六个月</p>
          </div>
        </div>
        <div class="box">
          <div class="box-tit">
            <p class="where">成龙影城特权卡</p>
            <span class="money">10元起</span>
          </div>
          <div class="box-con">
            <p>开卡可享购票超值会员价</p>
          </div>
          <div class="box-bot">
            <p class="time">有效期六个月</p>
          </div>
        </div>
        <div class="box">
          <div class="box-tit">
            <p class="where">成龙影城特权卡</p>
            <span class="money">10元起</span>
          </div>
          <div class="box-con">
            <p>开卡可享购票超值会员价</p>
          </div>
          <div class="box-bot">
            <p class="time">有效期六个月</p>
          </div>
        </div>
        <div class="box">
          <div class="box-tit">
            <p class="where">成龙影城特权卡</p>
            <span class="money">10元起</span>
          </div>
          <div class="box-con">
            <p>开卡可享购票超值会员价</p>
          </div>
          <div class="box-bot">
            <p class="time">有效期六个月</p>
          </div>
        </div>

      </template>
    </BaseLayer>
    <div class="shopping">去购票 ></div>

  </div>

</template>

<script>
import BaseLayer from "@/components/BaseLayer";
export default {
  name: "vip",
  components: {
    BaseLayer
  },
  data() {
    return {
      
    };
  },

  methods: {
    goout(){
      this.$router.go(-1)
    }
  }
};
</script>

<style lang='scss' scoped>
* {
  color: #fff;
}
.movie-movie {
  display: flex;
  flex-direction: column;
  align-items: center;
  .shopping {
    font-size: 16px;
    position: relative;
    top: -20px;

  }
  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    img {
      margin-left: 20px;
    }
  }
  height: 100%;
  .title {
    font-size: 20px;
    color: #fff;
  }
  .box {
    margin-top: 20px;
    width: 325px;
    height: 170px;
    border-radius: 15px;
    background: linear-gradient(90deg, #f26482, #f29b68);
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .box-tit {
      display: flex;
      justify-content: space-between;
      .where {
        margin-top: 20px;
        margin-left: 15px;
      }
      .money {
        margin-top: 20px;
        margin-right: 15px;
      }
    }
    .box-con {
      color: #fad6d4;
    }
    .box-bot {
      height: 30px;
      width: 325px;
      border-radius: 0 0 15px 15px;
      background: #fff;
      opacity: 0.4;
      .time {
        text-align: left;
        line-height: 30px;
        margin-left: 15px;
        color: #000;
        opacity: 1;
        font-size: 14px;
      }
    }
  }
}
</style>
