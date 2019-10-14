<template>
  <!-- 设置页面 -->
  <div class="setUp">
    <!-- 1.设置页面头部 -->
    <div class="setUp-top">
      <!-- 设置标头 -->
      <div class="setUp-title">
        <router-link :to="{name:'main'}">
          <img src="../../../assets/imgs/my/iconLeft.png" alt />
        </router-link>
        <p>设置</p>
        <div class="black"></div>
      </div>
      <!-- 头像 -->
      <div class="user-photo">
        <a href>
          <img src="../../../assets/imgs/my/userPhoto.png" alt />
        </a>
        <p>yujia1130</p>
      </div>
      <!-- 账号与安全 -->
      <div class="setUp-safe">
        <p>账号与安全</p>
        <div class="photp-info">
          <p>手机绑定与更换</p>
          <router-link :to="{name:'setUp'}">
            <img src="../../../assets/imgs/my/iconRight.png" alt />
          </router-link>
        </div>
      </div>
    </div>

    <!--注意: 空白部分 -->
    <div class="blank"></div>

    <!-- 2.设置页面内容 -->
    <div class="setUp-container">
      <div class="container-list">
        <p>被赞提醒</p>
        <a href="#">
          <img v-show="isShow" @click="change" src="../../../assets/imgs/my/right.png" alt />
          <img v-show="!isShow" @click="change1" src="../../../assets/imgs/my/left.png" alt />
        </a>
      </div>
      <div class="container-list">
        <p>影评/话题提醒</p>
        <a href="#">
          <img v-show="isShowOne" @click="change2" src="../../../assets/imgs/my/right.png" alt />
          <img v-show="!isShowOne" @click="change3" src="../../../assets/imgs/my/left.png" alt />

        </a>
      </div>
      <div class="container-list">
        <p>系统通知</p>
        <a href="#">
          <img v-show="isShowTwo" @click="change4" src="../../../assets/imgs/my/right.png" alt />
          <img v-show="!isShowTwo" @click="change5" src="../../../assets/imgs/my/left.png" alt />
        </a>
      </div>
      <div class="container-list">
        <p>系统通知</p>
        <a href="#">
          <img v-show="isShowThree" @click="change6" src="../../../assets/imgs/my/right.png" alt />
          <img v-show="!isShowThree" @click="change7" src="../../../assets/imgs/my/left.png" alt />
        </a>
      </div>
    </div>

    <!--注意: 空白部分 -->
    <div class="blank"></div>

    <!-- 3.退出登录 -->
    <div class="setUp-end">
      <div class="about">
        <p>关于</p>
        <router-link :to="{name:'setUp'}" class="login">
          <img src="../../../assets/imgs/my/iconRight.png" alt />
        </router-link>
      </div>
      <router-link class="loginOut" :to="{name:'logins'}" tag='div'>退出登录</router-link>
      <!-- <div class="loginOut">退出登录</div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "setUp",
  data() {
    return {
      isShow : true,
      isShowOne : true,
      isShowTwo : true,
      isShowThree : true,
    };
  },
  methods:{
    change(){
      console.log(111)
     this.isShow = !this.isShow
    },
    change1(){
      this.isShow = !this.isShow
    },
    change2(){
      this.isShowOne = !this.isShowOne
    },
    change3(){
      this.isShowOne = !this.isShowOne
    },
    change4(){
      this.isShowTwo = !this.isShowTwo
    },
    change5(){
      this.isShowTwo = !this.isShowTwo
    },
    change6(){
      this.isShowThree = !this.isShowThree
    },
    change7(){
      this.isShowThree = !this.isShowThree
    },
    
  }
  
};
</script>

<style lang='scss' scoped>
.setUp {
  width: 100%;
  height: 100%;
  .setUp-top {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .setUp-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
      margin-top: 20px;
      margin-bottom: 18px;
      a {
        display: block;
        width: 32px;
        height: 32px;
      }
      p {
        font-size: 16px;
        line-height: 11px;
        color: #ffffff;
      }
      .black {
        width: 32px;
        height: 32px;
      }
    }
    .user-photo {
      display: flex;
      flex-direction: column;
      padding: 0 20px;
      p {
        font-size: 16px;
        line-height: 11px;
        color: #d4d4d6;
        margin-top: 5px;
      }
    }
    .setUp-safe {
      display: flex;
      justify-content: space-between;
      padding: 0 20px;
      margin-top: 30px;
      margin-bottom: 10px;
      p {
        font-size: 16px;
        line-height: 22px;
        color: #a5a7aa;
      }
      .photp-info {
        display: flex;
        align-items: center;
      }
    }
  }
  .blank {
    width: 100%;
    height: 10px;
    background-color: #33363d;
  }
  .setUp-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px 0;
    .container-list {
      widows: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 20px;
      p {
        font-size: 16px;
        line-height: 22px;
        color: #a5a7aa;
      }
      img{
        width: 43px;
        height: 26px;
      }
    }
  }
  .setUp-end {
    width: 100%;
    display: flex;
    flex-direction: column;
    .about {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 20px;
      p {
        font-size: 16px;
        line-height: 20px;
        color: #a5a7aa;
      }
    }
    .loginOut {
      width: 335px;
      height: 40px;
      margin: 30px auto 0 auto;
      background-color: #f26d7d;
      background: linear-gradient(
        150deg,
        rgba(242, 91, 134, 1) 0%,
        rgba(241, 172, 94, 1) 100%
      );
      box-shadow: 0px 0px 4px 1px rgba(242, 109, 125, 0.18);
      border-radius: 6px;
      font-size: 18px;
      line-height: 40px;
      color: #FFFFFF;
    }
  }
}
</style>