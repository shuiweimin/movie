<template>

  <div class="all">
    <div class="head">
      <img src="../../assets/imgs/icons/return.png" alt class="return-img" />
    </div>
    <div class="nodata">
      <img src="../../assets/imgs/icons/nodata.png" alt />
      <p>暂无数据,请稍后重试</p>
    </div>

  </div>
</template>
<script>
export default {
  data(){
    return{
      checked: true

    }
  }
};
</script>

<style lang='scss' scoped>
.all {
  width: 100%;
  height: 100%;
  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    img {
      margin-left: 20px;
      width: 16px;
      height: 16px;
    }
  }
  .nodata {
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>