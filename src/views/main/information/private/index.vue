<template>
  <div class="all">
    <div class="head">
      <div class="head-left">
          <img src="../../../../assets/imgs/icons/return.png" alt="" @click="goout" />
        <div class="head-img"></div>
        <span class="name">蔡徐坤</span>
      </div>
      <div class="head-right">
        <span>· · ·</span>
      </div>
    </div>
    <div class="con">
      <div class="bubble-all">
        <div class="bubble">
          <p>哈哈哈哈</p>
          <div class="triangle"></div>
        </div>

        <div class="bubble two">
          <p>哈哈哈哈</p>
          <div class="triangle"></div>
        </div>

        <div class="bubble">
          <p>哈哈哈哈</p>
          <div class="triangle"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    goout(){
      this.$router.go(-1)
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  color: #fff;
}
.head {
  //   margin-top: 15px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .head-left {
    margin-left: 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .head-img {
      width: 32px;
      height: 32px;
      border-radius: 55px;
      background: url(../../../../assets/imgs/infromation/cxk.jpg) no-repeat;
      background-size: 32px 32px;
      margin-left: 19px;
    }
    .name {
      margin-left: 8px;
    }
  }
  .head-right {
    margin-right: 20px;
    font-size: 16px;
    font-weight: 1000;
  }
}
.con {
  margin-top: 43px;

  height: 400px;
  .bubble-all {
    margin-left: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    .bubble {
      width: 74px;
      height: 32px;
      background: #33363d;
      border-radius: 7px;
      //   display: flex;
      //   justify-content: center;
      p {
          position: relative;
          top: 8px;
          right: 4px;
        text-align: center;
       float: right;
      }
    }
    .triangle {
      right: 15px;
      position: relative;
      width: 0;
      height: 0;
      border-bottom: 20px solid #33363d;
      border-left: 74px solid transparent;
      overflow: hidden;
      //   top: 6px;
      //   left: -15px;
      z-index: -1;
    }
    .bubble.two {
      margin-left: 240px;
      background: #f9c34a;
      .triangle {
        left: 15px;
        transform: rotateY(180deg);
        border-bottom: 20px solid #f9c34a;
        border-left: 74px solid transparent;
      }
    }
  }
}
</style>