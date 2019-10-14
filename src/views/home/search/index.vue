<template>
  <div class="search">
    <BaseLayer>
      <!-- 头部 -->
      <template v-slot:header>
        <div class="header">
          <input class="search-input" type="text" placeholder="搜影片 影院 影人" v-model="searchVal" />
          <div class="sou" v-show="!isSearch">搜索</div>
          <router-link class="sou" :to="{name:'home'}" v-show="isSearch" tag="div">取消</router-link>
        </div>
      </template>
      <!-- 内容 -->
      <template v-slot:default>
        <div class="hot">
          <p class="hot-top">萤火虫热搜</p>
          <div class="title-list">
            <div class="title-item" v-for="item in hotArr" :key="item.id">
              {{item.title}}
              <span :class="`${item.tab}`">{{item.text}}</span>
            </div>
            <div class="more">更多热搜></div>
          </div>
        </div>
      </template>
    </BaseLayer>
  </div>
</template>

<script>
import BaseLayer from "@/components/BaseLayer";
export default {
  name: "Search",
  components: {
    BaseLayer
  },
  props: {},
  data() {
    return {
      hotArr: [
        {
          id: 1,
          tab: "hot",
          title: "一条狗的使命"
        },
        {
          id: 2,
          tab: "none",
          title: "哥斯拉2:怪兽之王"
        },
        {
          id: 3,
          tab: "new",
          title: "大鱼海棠"
        },
        {
          id: 4,
          tab: "none",
          title: "下一任:前任"
        },
        {
          id: 5,
          tab: "none",
          title: "人间.小团圆"
        },
        {
          id: 6,
          tab: "new",
          title: "音乐家"
        },
        {
          id: 7,
          tab: "up",
          title: "爱你直到尽头"
        }
      ],
      searchVal: ""
    };
  },
  watch: {},
  computed: {
    isSearch() {
      if (this.searchVal == "") {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.search {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  ::v-deep .baseLayer-main {
    height: 100%;
    .header-bar {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 40px;
      background-color: #23262d;
      z-index: 999;
    }
    .scroll-wapper {
      height: 100%;
      overflow: hidden;
      margin: 0px;
      .scroll-content {
        height: 100%;
        padding: 40px 0 0;
        overflow: hidden;
      }
    }
  }
  .header {
    display: flex;
    height: 40px;
    width: 100%;
    justify-content: center;
    align-items: center;
    .search-input {
      width: 280px;
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
    }
  }
  .hot-top {
    height: 24px;
    margin: 24px 0;
    text-align: left;
    font-size: 16px;
    line-height: 24px;
    color: #dfdfdf;
    text-indent: 30px;
    background: url(../../../assets/imgs/home/search/sou.png) no-repeat left
      center / 24px 24px;
  }
  .title-list {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    .title-item {
      width: 150px;
      font-size: 16px;
      margin: 10px 10px 10px 0;
      text-align: left;
      color: #dfdfdf;
    }
    .more {
      width: 150px;
      font-size: 16px;
      text-align: left;
      color: #f1a363;
    }
  }
}
</style>