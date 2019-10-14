<template>
	<div class="header-main">

      <div class="header-left"> 
      	<slot name="left"></slot>
      </div>

      <h2 class="header-title">
				<slot name="middle"></slot>
      </h2>
      
      <div class="header-search">
      	<slot name="right"></slot>
      </div>


	</div>
</template>



<script>
	export default {
		name:'Header',
		data(){
			return {}
		}
	}
</script>



<style lang="scss" scoped>
	@import "@/assets/css/common/common.scss";
	.header-main{
		display: flex;
    justify-content: space-between;
    align-content: center;
    height:100%;
    padding:0 $basePadding;
    .header-left{
      width:40px;
      height:100%;
    }
    .header-title{
      height:100%;
      font-size:18px;
      color:$baseColor;
    }
    .header-search{
      width:40px;
      height:100%;
    }

	}
</style>