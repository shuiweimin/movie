<template>
	<div class="map">
		<BaseLayer>
      <template v-slot:header>
        

        <Header>
          <template v-slot:left>
            <div class="header-left" @click="$router.go(-1)"></div>
          </template>
          <template v-slot:middle>
            <div class="header-title">影院地图</div>
          </template>
          <template v-slot:right>
            <div class="header-search"></div>
          </template>
        </Header>

      </template>

      <template v-slot:default>
				<div class="map-wrapper">
					<div class="map-box">
						
						<MapBaidu></MapBaidu>

					</div>

					
					



					<div class="map-swiper">
						<swiper :options="swiperOption" class="swiper-wrapper">
					    <!-- slides -->
					    <swiper-slide class="swiper-slide">
					    	<img src="../../../assets/imgs/map/cinema01.png">
								<div class="swiper-detail">

									<div class="swiper-text">
										<p class="swiper-title">耀莱成龙影城（建业店)</p>
										<p class="swiper-icon">
											<a class="swiper-icon-transpond" href="javascript:;"></a>
											<a class="swiper-icon-iphone" href="javascript:;"></a>
											<span class="swiper-km">45min</span>
										</p>
									</div>

									<div class="swiper-btn">查看</div>

								</div>
					    </swiper-slide>
					    <swiper-slide class="swiper-slide">
					    	<img src="../../../assets/imgs/map/cinema02.png">
					    	<div class="swiper-detail">

									<div class="swiper-text">
										<p class="swiper-title">DMG影城</p>
										<p class="swiper-icon">
											<a class="swiper-icon-transpond" href="javascript:;"></a>
											<a class="swiper-icon-iphone" href="javascript:;"></a>
											<span class="swiper-km">45min</span>
										</p>
									</div>
									<div class="swiper-btn">查看</div>

								</div>
					    </swiper-slide>
				
					  </swiper>	
					</div>

				</div>
      </template>
    </BaseLayer>

	</div>
</template>



<script>
	//引入 better-scroll 封装插槽 组件  
	import BaseLayer from "@/components/BaseLayer"

	//专门为header内容也做一个插槽组件 , 后面循环使用 此组件与上面的 BaseLayer 形成组件嵌套关系
	import Header from '../components/Header'
	//引入map地图
	import MapBaidu from '../components/MapBaidu'
	
	//swiper插件
	import 'swiper/dist/css/swiper.css'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'



	export default {
		name:'Map',
		data(){
			return {
				swiperOption:{
					loop : true,
					slidesPerView: 1.8,
					loopAdditionalSlides : 3,
		      spaceBetween: 13
				}
			}
		},
		components:{
			BaseLayer,
			Header,
			swiper,
	    swiperSlide,
	    MapBaidu
		}
	}
</script>



<style lang="scss" scoped>
	@import "@/assets/css/common/common.scss";
	
	.map{
		height:100%;
	   	.header-bar{
		    line-height: 40px;
		    background-color: #23262D;
	      .header-left{        
	        text-align: left;
	        font-size:14px;
	        color:$littleBaseColor;
	        background: url('../'+$iconUrl+'arrow-left2x.png') no-repeat left center/6px 11px;
	      }
	      .header-title{
	      	line-height: 40px;
	      }
	      .header-search{
	        background: url('../'+$iconUrl+'search2x.png') no-repeat right center/17px 17px;
	      }
		  }
	    
	    ::v-deep.scroll-wapper{
	    	position:relative;
	    	height:772px;
	    	margin-top: 40px;
	    	.scroll-content{
	    		height:100%;
				.map-wrapper{
					height: 100%;
					background-color: #33363D;
					.map-box{
						height:584px;
						border-radius: 0 0 25px 25px;
						background-color: #fff;
					}
				}
				.map-swiper{
					position: absolute;
					left:20px;
					bottom:36px;
					width:100%;
					height:194px;
					.swiper-wrapper{
						height:98%;
						.swiper-slide{
							height:100%;
							background:#33363D;
							box-shadow:0px 0px 9px 3px rgba(0,0,0,0.19);
							border-radius:6px;
							img{
								width:100%;
								height:auto;
							}
							.swiper-detail{
								display: flex;
								justify-content: space-around;
								align-items: center;
								height:calc(100% - 131px);
								.swiper-text{
									.swiper-title{
										text-align: left;
										font-size: 12px;
										color:rgba(255,255,255,0.6);
									}
									.swiper-icon{
										height:17px;
										margin-top:8px;
										.swiper-icon-iphone,.swiper-icon-transpond{
											display: inline-block;
											width:17px;
											height:17px;
											background: url('../'+$iconUrl+'transpond2x.png') no-repeat center/17px 17px;
										}
										.swiper-icon-iphone{
											background-image: url('../'+$iconUrl+'phone2x.png');
											margin:0 40px 0 15px;
										}
										.swiper-km{
											height:17px;
											vertical-align: top;
											color:gray;
										}
									}
								}
								.swiper-btn{
									width:45px;
									height:25px;
									line-height: 25px;
									text-align: center;
									font-size:12px;
									color:white;
									background:linear-gradient(150deg,rgba(242,91,134,1) 0%,rgba(241,172,94,1) 100%);
									box-shadow:0px 0px 4px 1px rgba(242,109,125,0.18);
									border-radius:6px;
								}
							}
						}
					}
				}
			}
	  }
  }
</style>