<template>
  <div class="movie-movie">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vant@2.2/lib/index.css" />

    <BaseLayer>
      <template v-slot:header>
        <div class="head">
          <img @click="$router.go(-1)" src="../../assets/imgs/icons/return.png" alt class="return-img" />
          <div class="head-right">
            <div class="head-portrait"></div>
            <span class="name">hi,带带大师兄</span>
          </div>
        </div>
      </template>

      <template v-slot:default>
        <div class="select">
          <div class="seek">
            <p style="color:#acadb0">试试搜索影片?</p>
            <img src="../../assets/imgs/icons/return.png" alt class="arrows" />
          </div>
          <div class="seek">
            <p style="font-size:16px">万达影城</p>
            <div class="arrows-b">
              <img src="../../assets/imgs/icons/return.png" alt class="arrows" />
              <img src="../../assets/imgs/icons/ding.png" alt />
            </div>
          </div>
          <div class="seek">
            <p style="font-size:16px">五月九日</p>
            <div class="arrows-c">
              <img src="../../assets/imgs/icons/return.png" alt /> 
              <p>更多场次</p> 
            </div>
          </div>
          <div class="seeks">
            <div class="checkbox-all">
              <van-checkbox v-model="checked" shape="square" checked-color="#f29b68">
                <p style="color:#fff">特惠购票</p>
              </van-checkbox>
            </div>
            <div class="checkbox-all">
              <van-checkbox v-model="checked" shape="square" checked-color="#f29b68">
                <p style="color:#fff">推荐选座</p>
              </van-checkbox>
            </div>
          </div>
          <div class="shopp" @click="toLogins('logins')">一键购票</div>
          <div class="movie-name">一条狗的使命 我不是药神 清空搜索记录</div>
        </div>
        <div class="discounts">
          <div class="discounts-top">
            <p style="font-size:16px">特惠购票</p>
            <div class="other">
              更多优惠
              <img src="../../assets/imgs/icons/return.png" alt />
            </div>
          </div>
          <div class="discounts-item">
            <div class="discounts-item-time">
              <h1 class="tit">18:20</h1>
              <p class="content">21:10车场</p>
            </div>
            <div class="discounts-item-name">
              <h1 class="tit">英雄联盟</h1>
              <p class="content">万达巨幕厅</p>
            </div>
            <div class="money">88.9元</div>
            <div class="btn">购票</div>
          </div>
          <!-- 2 -->
          <div class="discounts-item">
            <div class="discounts-item-time">
              <h1 class="tit">18:20</h1>
              <p class="content">21:10车场</p>
            </div>
            <div class="discounts-item-name">
              <h1 class="tit">英雄联盟</h1>
              <p class="content">万达巨幕厅</p>
            </div>
            <div class="money">88.9元</div>
            <div class="btn">购票</div>
          </div>
          <!-- 3 -->
          <div class="discounts-item">
            <div class="discounts-item-time">
              <h1 class="tit">18:20</h1>
              <p class="content">21:10车场</p>
            </div>
            <div class="discounts-item-name">
              <h1 class="tit">英雄联盟</h1>
              <p class="content">万达巨幕厅</p>
            </div>
            <div class="money">88.9元</div>
            <div class="btn">购票</div>
          </div>
          <!-- 4 -->
          <div class="discounts-item">
            <div class="discounts-item-time">
              <h1 class="tit">18:20</h1>
              <p class="content">21:10车场</p>
            </div>
            <div class="discounts-item-name">
              <h1 class="tit">英雄联盟</h1>
              <p class="content">万达巨幕厅</p>
            </div>
            <div class="money">88.9元</div>
            <div class="btn">购票</div>
          </div>
        </div>
      </template>
    </BaseLayer>
  </div>
</template>

<script>
import BaseLayer from "@/components/BaseLayer";

export default {
  name: "Movie",
  components: {
    BaseLayer
  },
  data() {
    return {
      checked: true
    };
  },

  methods: {
    //跳 登录页面
    toLogins(v1){
      this.$router.push(v1)
    }
  }
};
</script>

<style lang='scss' scoped>
.movie-movie {
  color: #fff;
  height: 100%;
  display: flex;
  justify-content: center;
  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    .return-img {
      margin-left: 20px;
      width: 16px;
      height: 16px;
    }
    .head-right {
      width: 120px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 20px;
      .name {
        // line-height: 50px;
      }
      .head-portrait {
        width: 33px;
        height: 33px;
        border-radius: 55px;
        background: url(../../assets/imgs/infromation/cxk.jpg) no-repeat;
        background-size: 44px 44px;
      }
    }
  }
  .select {
    padding-top: 20px;
    margin-top: 40px;
    width: 336px;
    height: 290px;
    background-color: #33363d;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .seek {
      width: 230px;
      height: 17px;
      display: flex;
      margin: 10px 0 10px 0;
      justify-content: space-between;
      .arrows {
        margin-right: 50px;
      }
      .arrows-c {
        margin-right: 0px;
        display: flex;
        align-items: center;
      }
      img {
        transform: rotateY(180deg);
      }
      .arrows-b {
        width: 65px;

        display: flex;
        justify-content: flex-start;
        .arrows {
        margin-right: 0px;
          
        }
      }
    }
    .seeks {
      width: 230px;
      height: 30px;
      display: flex;
      align-items: center;
      margin: 10px 0 10px 0;
      justify-content: space-between;
      .checkbox-all {
        display: flex;
        align-items: center;
      }
      .checkbox {
        outline-style: none;
        color: #fff;
        background: #33363d;
        line-height: 20px;
        width: 18px;
        height: 18px;
      }
    }
    .shopp {
      width: 302px;
      height: 40px;
      background: linear-gradient(90deg, #f26482, #f29b68);
      border-radius: 10px;
      line-height: 40px;
      font-size: 18px;
      margin-top: 28px;
    }
    .movie-name {
      color: #acadb0;
      margin-top: 28px;
      margin-right: 100px;
    }
  }
  .discounts {
    margin-top: 50px;
    .discounts-top {
      height: 22px;
      display: flex;
      justify-content: space-between;
      // align-items: center;
      img {
        transform: rotateY(180deg);
      }
      .other {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #acadb0;
      }
    }
    .discounts-item {
      margin-top: 10px;
      width: 336px;
      height: 70px;
      background: #33363d;
      border-radius: 10px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .tit {
        font-size: 16px;
      }
      .content {
        font-size: 12px;
        color: #acadb0;
      }
      .money {
        color: #fbc34a;
        font-size: 20px;
      }
      .btn {
        width: 45px;
        height: 25px;
        background: linear-gradient(90deg, #f26482, #f29b68);
        border-radius: 5px;
        line-height: 25px;
      }
    }
  }
}
</style>
