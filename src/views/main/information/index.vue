<template>
  <div class="infromation">
    <div class="head">
      <router-link to>
        <img src="../../../assets/imgs/icons/return.png" @click="goout" alt class="return-img" />
      </router-link>
      <h1 class="tit">消息中心</h1>
      <div></div>
    </div>
    <div class="content">
      <div class="system-inform">
        <div class="system-inform-left">
          <div class="inform-bg">
            <img src="../../../assets/imgs/icons/infrom.png" alt class="inform-ic" />
          </div>
          <div class="system-all">
            <h1 class="system-inform-tit">系统通知</h1>
            <br />
            <p class="inform-text">订票成功,请在开场30分钟前取票!</p>
          </div>
        </div>
        <p class="time">两分钟前</p>
      </div>
      <!-- 赞----------------------------- -->
      <div class="system-inform">
        <div class="system-inform-left">
          <div class="inform-bg" style="background:#EF8833">
            <img src="../../../assets/imgs/icons/zan.png" alt class="inform-ic" />
          </div>
          <div class="system-all">
            <h1 class="system-inform-tit">赞</h1>
            <br />
            <p class="inform-text">@乔壁落,吴亦几,鹿晗...赞了你!</p>
          </div>
        </div>
        <p class="time">两分钟前</p>
      </div>
      <!-- 评论---------------------------- -->
      <div class="system-inform">
        <div class="system-inform-left">
          <div class="inform-bg" style="background:#6548A9">
            <img src="../../../assets/imgs/icons/pinglun.png" alt class="inform-ic" />
          </div>
          <div class="system-all">
            <h1 class="system-inform-tit">评论</h1>
            <br />
            <p class="inform-text">@蔡徐坤评论了你!</p>
          </div>
        </div>
        <p class="time">两分钟前</p>
      </div>
    </div>
    <div class="private">
      <h1 class="private-tit">全部私信</h1>
      <router-link :to="{name:'private'}" >
        <div class="private-item">
          <div class="private-left">
            <div class="head-portrait">
              <!-- <img class="head-portrait-imgs" src="../../assets/imgs/infromation/cxk.jpg" alt /> -->
            </div>
            <div class="private-text">
              <h1 class="name">蔡徐坤</h1>
              <br />
              <P class="con">我是练习时长两年半的个人练习生篮球...</P>
            </div>
          </div>
          <div class="private-right">
            <p>两秒前</p>
            <br />
            <div class="circle-ic">
              <p>17</p>
            </div>
          </div>
        </div>
      </router-link>

      <!-- ---------------------------- -->
      <div class="private-item">
        <div class="private-left">
          <div class="head-portrait-two">
            <!-- <img class="head-portrait-imgs" src="../../assets/imgs/infromation/cxk.jpg" alt /> -->
          </div>
          <div class="private-text">
            <h1 class="name">吴亦几</h1>
            <br />
            <P class="con">就像这个面又大又宽,你们来这里吃饭......</P>
          </div>
        </div>
        <div class="private-right">
          <p>两秒前</p>
          <br />
          <div class="circle-ic">
            <p>17</p>
          </div>
        </div>
      </div>
      <!-- -------------------------------------------- -->
      <div class="private-item">
        <div class="private-left">
          <div class="head-portrait-three">
            <!-- <img class="head-portrait-imgs" src="../../assets/imgs/infromation/cxk.jpg" alt /> -->
          </div>
          <div class="private-text">
            <h1 class="name">阿giao</h1>
            <br />
            <P class="con">一给我里giaogiao.....</P>
          </div>
        </div>
        <div class="private-right">
          <p>两秒前</p>
          <br />
          <div class="circle-ic">
            <p>17</p>
          </div>
        </div>
      </div>
    </div>
        <router-view></router-view>
  </div>
  
</template>

<script>
export default {
  mounted() {
    console.log(this.$route);
  },
  methods: {
    goout(){
      this.$router.go(-1)
    }
  },
};
</script>

<style lang="scss" scoped>
a{
text-decoration:none;
}
h1 {
  font-size: 16px;
  color: #fff;
}
.head {
  display: flex;
  justify-content: space-between;
  height: 50px;
  padding: 0 15px 0 15px;

  .return-img {
    margin-top: 17px;
    width: 16px;
    height: 16px;
  }
  .tit {
    line-height: 50px;
  }
}
.content {
  width: 100%;
  .system-inform {
    height: 74px;
    padding: 5px 20px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    .time {
      color: #a1a3a6;
    }
    .system-inform-left {
      display: flex;
      align-items: center;
      .inform-bg {
        // border: 1px solid red;
        width: 44px;
        height: 44px;
        background: #f9c34a;
        border-radius: 50px;
        display: flex;
        align-items: center;
        .inform-ic {
          margin: 0 auto;
        }
      }
      .system-all {
        margin-left: 15px;

        .system-inform-tit {
          text-align: left;
        }
        .inform-text {
          color: #a1a3a6;
        }
      }
    }
  }
}
.private {
  padding: 0 0 0 25px;
  margin-top: 30px;
  .private-tit {
    width: 100%;
    color: #fff;
    font-size: 16px;
    text-align: left;
  }
  .private-item {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    .private-left {
      display: flex;
      align-items: center;

      .head-portrait {
        width: 44px;
        height: 44px;
        border-radius: 55px;
        background: url(../../../assets/imgs/infromation/cxk.jpg) no-repeat;
        background-size: 44px 44px;
      }
      .head-portrait-two {
        width: 44px;
        height: 44px;
        border-radius: 55px;
        background: url(../../../assets/imgs/infromation/wyf.jpg) no-repeat;
        background-size: 44px 44px;
      }
      .head-portrait-three {
        width: 44px;
        height: 44px;
        border-radius: 55px;
        background: url(../../../assets/imgs/infromation/giao.jpg) no-repeat;
        background-size: 44px 44px;
      }
      .private-text {
        //       display: flex;
        //   align-items: center;
        margin-left: 15px;
        .name {
          text-align: left;
          color: #f9c34a;
        }
        .con {
          color: #a1a3a6;
        }
      }
    }
    .private-right {
      margin-right: 20px;
      color: #a1a3a6;
      .circle-ic {
        color: #ffffff;
        font-size: 10px;
        width: 20px;
        height: 20px;
        background: red;
        border-radius: 20px;

        p {
          line-height: 20px;
        }
      }
    }
  }
}
</style>