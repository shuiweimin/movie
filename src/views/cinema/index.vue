<template>
  <div class="cinema-main">
    <BaseLayer>
      <template v-slot:header>
        <Header class="header">
          <template v-slot:left>

           <!--  <div class="auto-site" @click="toCity">郑州</div>
 -->
            <router-link class="auto-site" :to="{name:'city'}" tag='div'>{{nowCity.name}}</router-link>
            <!-- <div class="auto-site">郑州</div> -->

          </template>
          <template v-slot:middle>
            <div class="header-title">影院</div>
          </template>
          <template v-slot:right>
            <div class="header-search"></div>
          </template>
        </Header>

      </template>

      <template v-slot:default>
        <!-- 编程路由 此处不能使用 router-link?? -->
        <p class="my-site" @click="toMap">我在: 郑东新区绿地新都汇</p>

        <div class="cinema-main_item" v-for="(cinema,index) in cinemaData" :key="index" @click="toCinemaDetail('cinemadetail',[cinema.cinemaName,cinema.cinemaAddress])">

          <h3 class="cinema-name">
            {{cinema.cinemaName}}
            <span class="price">
              {{cinema.price}}元
              <span class="priceText">起</span>
            </span>
          </h3>

          <p class="cinema-address">
            {{cinema.cinemaAddress}}
            <span class="cinemaKm">1.5km</span>
          </p>
          <p class="discounts">
            <span class="icon-diy">惠</span>
            {{cinema.discounts}}
          </p>
          <p class="marketing">
            <span class="icon-diy">促</span>
            {{cinema.marketing}}
          </p>
          <p class="card">
            <span class="icon-diy">卡</span>
            {{cinema.card}}
          </p>
        </div>
      </template>
    </BaseLayer>
  </div>
</template>







<script>

//引入 better-scroll 封装插槽 组件  
import BaseLayer from "@/components/BaseLayer"


//专门为header内容也做一个插槽组件 , 后面循环使用 此组件与上面的 BaseLayer 形成组件嵌套关系
import Header from "./components/Header";
import {mapState,mapMutations,mapActions,mapGetters} from 'vuex';
export default {
  name: "Cinema",

  data() {
    return {
      cinemaData: [
        {
          cinemaName: "耀莱成龙影城（建业店）", 
          cinemaAddress:'金水区普惠路77号绿地',
          discounts:'我是药神等4部影片特惠',
          marketing:'观影套餐限量特惠',
          card:'开卡特惠，每单2张立减2元',
          price:'30.9'
        },
        {
          cinemaName: "五一影城",
          cinemaAddress: "管城回族区东风南路尚鼎路",
          discounts: "星际穿越等5部影片特惠",
          marketing: "观影套餐限量特惠",
          card: "限时¥24促销开卡，首单更优惠，开卡即…",
          price: "35.5"
        },
        {
          cinemaName: "DMG影城",
          cinemaAddress: "金水区南环路",
          discounts: "哪吒闹海等8部影片特惠",
          marketing: "观影套餐限量特惠",
          card: "开卡特惠，每单2张立减2元",
          price: "38.5"
        },
        {
          cinemaName: "奥斯卡影城",
          cinemaAddress: "郑东新区人民路77号乐成3楼",
          discounts: "流浪地球等4部影片特惠",
          marketing: "观影套餐限量特惠",
          card: "开卡特惠，每单2张立减2元",
          price: "28.8"
        }
      ]
    };
  },

  components: {
    BaseLayer,
    Header
  },

  methods:{  

    //编程路由 to map页面 
    toMap(){
      this.$router.push('map')
    },

    //编程路由 to cinema-detail页面 
    toCinemaDetail(v1,v2){
      this.$router.push({name:v1,params:{
        cinemaName:v2[0],
        cinemaAddress:v2[1]
      }})
      window.sessionStorage.setItem('cinemaName',v2[0])
      window.sessionStorage.setItem('cinemaAddress', v2[1])
    },

    //到city 页面去
    toCity(){
      this.$router.push('city')
    }
  },


  computed: {
    ...mapState({
      nowCity: state => state.city.nowCity
    })
  }
};
</script>









<style lang='scss' scoped>
@import "@/assets/css/common/common.scss";

.cinema-main{
  height:100%;
  .header{
    height:44px;
    line-height: 44px;
    color:$baseColor;
    .auto-site{
      text-align: left;
      font-size:14px;
      color:$littleBaseColor;
      background: url($iconUrl+'drop-down-arrow2x.png') no-repeat right center/11px 6px;
    }
    .header-search{
      background: url($iconUrl+'search2x.png') no-repeat right center/17px 17px;
    }
  }
  ::v-deep.scroll-content{
    padding-bottom:25px;
    .my-site{
      width:100%;
      height:30px;
      line-height: 30px;
      text-align: left;
      text-indent: 2em;
      padding-left:$basePadding;
      color:$littleBaseColor;
      background: #2C2F36 url($iconUrl+'site2x.png') no-repeat 20px center/13px 16px;
      margin-bottom: 15px;
    }
    .cinema-main_item{
      width:335px;
      height:146px;
      background-color: #2C2F36;
      margin:15px auto 0;
      color: $littleBaseColor;
      box-sizing: border-box;
      padding:10px;
      .cinema-name{
        font-size:14px;
        font-weight: bolder;
        color: $baseColor;
        .price{
          color:rgba(251,195,74,1);
          .priceText{
            font-size: 12px;
            color: $littleBaseColor;
          }
        }
      }
      .cinema-name,.cinema-address{
        display: flex;
        justify-content: space-between;
        line-height: 25px;
      }
      .discounts,.marketing,.card{
        line-height: 28px;
        text-align: left;
        .icon-diy{
          display: inline-block;
          width:18px;
          height:19px;
          line-height:19px;
          text-align: center;
          background:linear-gradient(135deg,rgba(235,110,117,1) 0%,rgba(247,166,83,1) 100%);
          border-radius:4px;
          color:white;
          vertical-align: middle;
          margin-right:5px;
        }
        .marketing .icon-diy{
          background:linear-gradient(135deg,rgba(176,70,157,1) 0%,rgba(97,72,170,1) 100%);
        }
        .card .icon-diy{
          background:linear-gradient(135deg,rgba(50,36,149,1) 0%,rgba(49,56,172,1) 100%);
        }
      }
    }
    .marketing .icon-diy {
      background: linear-gradient(
        135deg,
        rgba(176, 70, 157, 1) 0%,
        rgba(97, 72, 170, 1) 100%
      );
    }
    .card .icon-diy {
      background: linear-gradient(
        135deg,
        rgba(50, 36, 149, 1) 0%,
        rgba(49, 56, 172, 1) 100%
      );
    }
  }
}

</style>
