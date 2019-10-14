<template>
  <baidu-map class="bm-view" :center="center" :zoom="zoom" @ready="handler">
  </baidu-map>
</template>



<script>
  export default {
    data () {
      return {
        center: {lng: 113.774395, lat: 34.775895},
        zoom: 3
      }
    },
    methods: {
      handler ({BMap, map}) {
        console.log(BMap, map)
        this.center.lng = 113.774395
        this.center.lat = 34.775895
        this.zoom = 15
      }
    }
  }
</script>

<style lang="scss" scoped>
  .bm-view {
    width: 100%;
    height: 584px;
  }
  .BMap_cpyCtrl {
      display: none;
  }
  .anchorBL {
      display: none;
  }
</style>