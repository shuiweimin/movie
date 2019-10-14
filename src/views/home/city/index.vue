<template>
  <div class="city-main">
    <BaseLayer ref="baseLayer">
      <template v-slot:header>
        <div class="header">
          <div class="close" @click="goBick">关闭</div>
          <div class="title">选择城市</div>
        </div>
      </template>
      <template v-slot:default>
        <div class="selectCity">
          <input
            class="search"
            type="text"
            placeholder="请输入城市"
            v-model="searchVal"
            @focus="onSearch"
            @blur="offSearch"
          />
          <div class="sou on" v-show="!isSearch">搜索</div>
          <div class="sou off" v-show="isSearch">取消</div>
          <div class="search-box" v-show="isSearch">
            <div class="none" v-show="!searchCity">没有相关城市</div>
            <p
              class="searchCity"
              v-for="item in searchCity"
              :key="item.id"
              @click="changeCity(item)"
            >{{item.name}}</p>
          </div>
        </div>
        <div class="city-up">
          <div class="city-tr now">
            <div class="city-up-title">定位城市</div>
            <div class="city-box now-city">{{nowCity.name}}</div>
            <span class="icon" @click="locationCity"></span>
          </div>
          <div class="city-tr history">
            <div class="city-up-title">历史访问城市</div>
            <div
              :class="`city-box ${item.id == nowCity.id?' active':''}`"
              v-for="item in historyCity"
              :key="item.id"
              @click="selectCity(item)"
            >{{item.name}}</div>
          </div>
          <div class="city-tr hot">
            <div class="city-up-title">热门城市</div>
            <div
              :class="`city-box ${item.id == nowCity.id?' active':''}`"
              v-for="item in hotCity[0]"
              :key="item.id"
              @click="selectCity(item)"
            >{{item.name}}</div>
          </div>
        </div>
        <div class="citys">
          <!-- 嵌套循环 -->
          <div class="city-block" v-for="(block,key) in cityObj" :key="key" :ref="`cityBox${key}`">
            <p class="city-char city-title" :class="['city-title-'+key]">{{key}}</p>
            <ul class="city-list">
              <li
                :class="`city-item${city.id == nowCity.id?' active':''}`"
                v-for="city in block"
                :key="city.id"
                @click="selectCity(city)"
              >{{city.name}}</li>
            </ul>
          </div>
        </div>
      </template>
    </BaseLayer>
    <!-- 双向绑定 尽量不要直接操作dom元素   -->
    <div class="chars-bar">
      <div class="nav-title">定位历史热门</div>
      <ul class="nav-chars" v-biandBar>
        <li v-for="char in navChars" :key="char">{{char}}</li>
      </ul>
    </div>
    <span class="bg-char" v-if="bgChar">{{bgChar}}</span>
  </div>
</template>

<script>

import BaseLayer from "@/components/BaseLayer";
// vue天生支持 json数据的模块导入
import cityData from "./cityData.json";
import indexVue from "../sign/index.vue";
import { match } from "minimatch";
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
  name: "City",
  components: {
    BaseLayer
  },
  data() {
    return {
      cityData,
      cityObj: {},
      cityArr: [],
      hotCity: [],
      navChars: [], // 导航的字符集合
      bgChar: "",
      searchVal: "",
      isSearch: false
    };
  },
  created() {
    //初始化城市列表数据
    this.initCityList();
    //初始化导航字母
    this.initChars();
  },
  mounted() {
  },
  computed: {
    ...mapState({
      nowCity: state => state.city.nowCity,
      historyCity: state => state.city.historyCity
    }),
    //获取要搜索的城市
    searchCity() {
      if (this.searchVal == "") {
        return false;
      }
      let item = [];
      item = this.cityArr.filter(ele => {
        if (ele.name.includes(this.searchVal)) {
          return ele;
        }
      });
      if (item.length > 0) {
        return item;
      } else {
        return false;
      }
    }
  },
  methods: {
    //点击选择城市
    ...mapMutations({
      selectCity: "city/selectCity",
      addHistoryCity: "city/addHistoryCity"
    }),
    //初始化城市列表和热门城市
    initCityList() {
      for (let key in this.cityData) {
        if (key == "hot") {
          this.hotCity.push(this.cityData[key]);
        } else {
          let arr = [];
          this.cityObj[key] = this.cityData[key];
          this.cityData[key].forEach(item => {
            this.cityArr.push(item);
          });
        }
      }
    },
    //初始化字母数组
    initChars() {
      for (var i = 65; i <= 90; i++) {
        var char = String.fromCharCode(i);
        this.navChars.push(char);
      }
    },
    // 打开搜索
    onSearch() {
      this.isSearch = true;
    },
    //关闭搜索
    offSearch() {
      this.isSearch = false;
    },
    //选择搜索到的城市
    changeCity(val) {
      this.selectCity(val);
      this.$nextTick(function() {
        this.searchVal = "";
        this.isSearch = false;
      });
    },
    //返回上一级路由
    goBick() {
      this.$router.go(-1);
    },
    //定位现所在城市
    locationCity() {
      let city = {
        name: "正在定位",
        id: ""
      };
      this.selectCity(city);
      function myFun(result) {
        console.log(result);
        city.name = result.name.slice(0, result.name.length - 1);
      }
      var myCity = new BMap.LocalCity();
      myCity.get(myFun);
      setTimeout(() => {
        city.id = this.cityArr.find(item => item.name == city.name).id;
        this.selectCity(city);
      }, 1000);
    }
  },

  //离开时把当前城市添加历史访问城市
  beforeRouteLeave(to, from, next) {
    this.addHistoryCity(this.nowCity);
    next();
  },

  directives: {
    //滑动字母bar查找城市
    biandBar(el, binding, vnode) {
      var vm = vnode.context;
      //等dom渲染完毕后触发
      vm.$nextTick(() => {
        var index = 0;
        el.ontouchstart = function(e) {
          var scroll = vm.$refs.baseLayer.$scroll;
          var touch = e.touches[0];
          var endY = touch.clientY - el.offsetTop;
          //  endY/当前触摸到的字母的下标 = bar高 / 26个字母
          index = Math.floor((endY / el.offsetHeight) * 26);
          if (index < 0) {
            index = 0;
          }
          if (index > 25) {
            index = 25;
          }
          var char = vm.navChars[index];
          // console.log(vm.$refs[`cityBox${vm.bgChar}`]);
          var targetEl = document.querySelector(".city-title-" + char);
          if (targetEl) {
            scroll.scrollToElement(targetEl, 400, 0, -40);
            vm.bgChar = vm.navChars[index];
          }
          el.ontouchmove = function(e) {
            var touch = e.touches[0];
            endY = touch.clientY - el.offsetTop;
            index = Math.floor((endY / el.offsetHeight) * 26);
            if (index < 0) {
              index = 0;
            }
            if (index > 25) {
              index = 25;
            }
            char = vm.navChars[index];
            // console.log(vm.$refs[`cityBox${vm.bgChar}`]);
            var targetEl = document.querySelector(".city-title-" + char);
            if (targetEl) {
              scroll.scrollToElement(targetEl, 400, 0, -40);
              vm.bgChar = vm.navChars[index];
            }
          };
          el.ontouchend = function() {
            // 解除事件
            el.ontouchmove = null;
            // 获取松开后的值
            char = vm.bgChar;
            vm.bgChar = "";
          };
        };
      });
    }
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/common/common.scss";

.city-main {
  height: 100%;
  background-color: $baseBgColor;
  padding: 0 $basePadding;
  box-sizing: border-box;
  overflow: hidden;
  ::v-deep .scroll-wapper {
    height: 100%;
    overflow: hidden;
    margin: 0px;
    .scroll-content {
      padding: 40px 0 40px;
      overflow: hidden;
    }
  }
}
.header {
  position: relative;
  display: flex;
  height: 40px;
  width: 100%;
  box-sizing: border-box;
  padding: 0 20px;
  justify-content: center;
  align-items: center;
  .close {
    position: absolute;
    left: 0;
    top: 0;
    margin-left: 20px;
    height: 40px;
    font-size: 14px;
    line-height: 40px;
    color: #f7f7f7;
  }
  .title {
    height: 40px;
    font-size: 18px;
    line-height: 40px;
    color: #f5f5f5;
  }
}
.selectCity {
  position: relative;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  .search {
    width: 260px;
    height: 30px;
    padding: 0 10px;
    margin: 5px 10px 5px 5px;
    text-indent: 25px;
    background: #33363d url(../../../assets/imgs/home/search@2x.png) no-repeat
      10px center;
    background-size: 20px 20px;
    border: none;
    outline: none;
    border-radius: 16px;
    color: #dfdfdf;
  }
  .sou {
    color: #dfdfdf;
    &.sou:active {
      background-color: #33363d;
    }
  }
  .search-box {
    position: absolute;
    left: 0;
    top: 40px;
    width: 100%;
    background-color: #23262d;
    .searchCity {
      margin: 10px 30px 10px 0;
      padding: 10px 10px;
      font-size: 14px;
      color: #f5f5f5;
      border: 1px solid rgba(0, 0, 0, 0);
    }
    .none {
      margin: 10px 30px 10px 0;
      padding: 10px 10px;
      font-size: 14px;
      color: #f5f5f5;
      border: 1px solid rgba(0, 0, 0, 0);
    }
  }
}
.city-up {
  width: 100%;
  .city-tr {
    width: 100%;
    overflow: hidden;
    text-align: left;
    .city-up-title {
      margin: 10px 0;
      text-align: left;
      color: #dfdfdf;
    }
    .icon {
      display: inline-block;
      width: 16px;
      height: 32px;
      background: url(../../../assets/imgs/home/dw.png) no-repeat center / 16px
        16px;
    }
    .city-box {
      float: left;
      width: 85px;
      height: 30px;
      margin: 5px 20px 5px 0;
      text-align: center;
      font-size: 16px;
      line-height: 30px;
      color: #f5f5f5;
      background-color: #33363d;
      border: 1px solid rgba(0, 0, 0, 0);
      &.now-city {
        border: 1px solid #fbc349;
      }
      &.active {
        border: 1px solid #fbc349;
      }
    }
  }
}
.citys {
  width: 100%;
  .city-block {
    color: #f7f7f7;
    text-align: left;
    .city-item {
      margin: 10px 30px 10px 0;
      padding: 10px 10px;
      font-size: 14px;
      border: 1px solid rgba(0, 0, 0, 0);
      &.active {
        border: 1px solid #fbc349;
      }
    }
  }
}
.chars-bar {
  position: fixed;
  right: $basePadding;
  top: 120px;
  width: 30px;
  .nav-title {
    position: fixed;
    right: $basePadding;
    top: 120px;
    width: 30px;
    line-height: 16px;
    color: #f1a363;
  }
  .nav-chars {
    position: fixed;
    right: $basePadding;
    top: 170px;
    width: 30px;
    width: 30px;
    color: #828282;
    li {
      line-height: 1.4;
    }
  }
}
.bg-char {
  position: fixed;
  left: 50%;
  top: 50%;
  margin-left: -50px;
  margin-top: -50px;
  display: block;
  width: 100px;
  height: 100px;
  background-color: rgba(255, 255, 255, 0.5);
  border: 2px solid #fff;
  color: #fff;
  font-size: 30px;
  text-align: center;
  line-height: 100px;
  border-radius: 10px;
}
</style>
