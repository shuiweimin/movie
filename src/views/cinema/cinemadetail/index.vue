<template>
	<div class="cinema-detail-main">
				
		<BaseLayer>
			
      <template v-slot:header>
      	
        <Header>
          <template v-slot:left>
            <div class="header-left" @click="$router.go(-1)"></div>
          </template>
          <template v-slot:middle>
            <div class="header-title">{{cinemaName}}</div>
          </template>
          <template v-slot:right>
            <div class="header-search"></div>
          </template>
        </Header>

      
		
				<div class="address-container" @click="toMap">
					<h2>{{cinemaName}}</h2>
					<p> {{cinemaAddress}}</p>
				</div>
				
				<div class="cinema-detail-swiper-wrapper">
					<swiper :options="swiperOption" ref="mySwiper">
				    <!-- slides -->
				    <swiper-slide class="swiper-slide">
				    	<img src="../../../assets/imgs/cinemadetail/cinemadetail01.png">
				    	<div class="swiper-text">
					    	<h2 class="slide-title">1来的我们</h2>
					    	<span>119分钟</span> | 
					    	<span>剧情</span> | 
					    	<span>周冬雨</span>
				    	</div>
				    </swiper-slide>
				    <swiper-slide class="swiper-slide">
				    	<img src="../../../assets/imgs/cinemadetail/cinemadetail02.png">
				    	<div class="swiper-text">
					    	<h2 class="slide-title">2来的我们</h2>
					    	<span>119分钟</span> | 
					    	<span>剧情</span> | 
					    	<span>周冬雨</span>
				    	</div>
				    </swiper-slide>
				    <swiper-slide class="swiper-slide">
				    	<img src="../../../assets/imgs/cinemadetail/cinemadetail03.png">
				    	<div class="swiper-text">
					    	<h2 class="slide-title">3来的我们</h2>
					    	<span>119分钟</span> | 
					    	<span>剧情</span> | 
					    	<span>周冬雨</span>
				    	</div>
				    </swiper-slide>
				    <swiper-slide class="swiper-slide">
				    	<img src="../../../assets/imgs/cinemadetail/cinemadetail04.png">
				    	<div class="swiper-text">
					    	<h2 class="slide-title">4来的我们</h2>
					    	<span>119分钟</span> | 
					    	<span>剧情</span> | 
					    	<span>周冬雨</span>
				    	</div>
				    </swiper-slide>
				    <swiper-slide class="swiper-slide">
				    	<img src="../../../assets/imgs/cinemadetail/cinemadetail05.png">
				    	<div class="swiper-text">
					    	<h2 class="slide-title">5来的我们</h2>
					    	<span>119分钟</span> | 
					    	<span>剧情</span> | 
					    	<span>周冬雨</span>
				    	</div>
				    </swiper-slide>
				  	
				  </swiper>
				</div>	
			</template>
      <template v-slot:default>

				
				<div class="movie-box">
					<p class="movie-time">今天是5月20日</p>
					
					<div class="movie-item" @click="toChoose">
						<div class="text-one">
							<h3>15:30</h3>
							<p>17:14散场</p>
						</div>
						<div class="text-two">
							<p>原版3D</p>
							<p>1号厅(冠名招商中)</p>
						</div>
						<div class="text-thre">30.9元</div>
						<div class="text-btn">购票</div>
					</div>

					<div class="movie-item" @click="toChoose">
						<div class="text-one">
							<h3>15:30</h3>
							<p>17:14散场</p>
						</div>
						<div class="text-two">
							<p>原版3D</p>
							<p>2号厅(冠名招商中)</p>
						</div>
						<div class="text-thre">30.9元</div>
						<div class="text-btn">购票</div>
					</div>
					<div class="movie-item" @click="toChoose">
						<div class="text-one">
							<h3>15:30</h3>
							<p>17:14散场</p>
						</div>
						<div class="text-two">
							<p>原版3D</p>
							<p>3号厅(冠名招商中)</p>
						</div>
						<div class="text-thre">30.9元</div>
						<div class="text-btn">购票</div>
					</div>
					<div class="movie-item" @click="toChoose">
						<div class="text-one">
							<h3>15:30</h3>
							<p>17:14散场</p>
						</div>
						<div class="text-two">
							<p>原版3D</p>
							<p>4号厅(冠名招商中)</p>
						</div>
						<div class="text-thre">30.9元</div>
						<div class="text-btn">购票</div>
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

	//vue  swiper 引入
	// require styles
	import 'swiper/dist/css/swiper.css'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'

	export default {
		name:'cinemaDetail',
		data(){
			return {
				cinemaName:'',
				cinemaAddress:'',

				swiperOption:{
					slidesPerView: 3.2,
			    spaceBetween: -100,
				  centeredSlides: true,
				  loop: true
				}
			}
		},
		methods:{
			toMap(){
				this.$router.push('map')
			},
			toChoose(){
				this.$router.push('choose')
			}
		},
		components:{
			BaseLayer,
			Header,
			swiper,
			swiperSlide
		},
		created(){
			this.cinemaName = window.sessionStorage.getItem('cinemaName')
			this.cinemaAddress = window.sessionStorage.getItem('cinemaAddress')
		}
	}
</script>



<style lang="scss" scoped>
	@import "@/assets/css/common/common.scss";

	.cinema-detail-main{
		height:100%;
		::v-deep.baseLayer-main{
			
			.header-bar{
				height:323px;
				background: url('../../../assets/imgs/cinemadetail/cinemadetail-bg01.png') no-repeat top center/100% auto;
				.header-main{
					height:40px;
					line-height: 40px;
			    .header-left{
			      text-align: left;
			      font-size:14px;
			      color:$littleBaseColor;
			      background: url('../'+$iconUrl+'arrow-left2x.png') no-repeat left center/6px 11px;
			    }
			    .header-title{
			    	font-size:16px;
			    	color:white;
			    }
			    .header-search{
			      background: url('../'+$iconUrl+'cinemadetail-right.png') no-repeat right center/17px 17px;
			    }
				}
		    .address-container{
		    	background: url('../'+$iconUrl+'site2x.png') no-repeat 20px top/17px 21px;
		    	text-align: left;
		    	padding:0 $basePadding;
		    	margin-top: 20px;
		    	h2{
						font-size:16px;
						font-weight:500;
						color:white;
						line-height:22px;
						text-indent: 2.5em;
						background: url('../'+$iconUrl+'arrow-right2x.png') no-repeat right center/6px 11px;
		    	}
		    	p{
						font-size:12px;
						font-weight:400;
						color:rgba(255,255,255,.5);
						line-height:17px;
						text-indent: 40px;
		    	}
		    }

		    .cinema-detail-swiper-wrapper{
		    	width:300px;
		    	height:255px;
		    	margin:30px auto 0;		    	
					.swiper-slide{
						width:90px;
		    		height:100%;
					  transition: 300ms;
					  transform: scale(0.8);
					  color:rgba(255,255,255,.5);
			    	img{
			    		width:100%;
			    		height:auto;
			    		filter: blur(2px);
			    	}
			    	.swiper-text{
			    		display: none;
				    	.slide-title{
				    		font-size:18px;
				    		color:white;
				    	}
				    	span{
				    		line-height: 25px;
				    	}
			    	}
					}
					.swiper-slide-active,.swiper-slide-duplicate-active{
			      transform: scale(1);
			      z-index: 999;
			      img{
							filter: none;
			      }
			      .swiper-text{
			      	display: block;
			      }
					}
					.swiper-slide-next{
						z-index: 990;
					}
		    }
			}
	    .scroll-wapper{
	    	height: calc(100% - 323px);
	    	margin-top: 400px;
	    	.scroll-content{
		    	margin-top: 40px;
		    	padding-bottom:50px;
		    }
		    
		    .movie-box{
		    	padding:0 $basePadding 40px;
		    	border-radius: 0 0 25px 25px;
			    .movie-time{
				  	margin-top: 20px;
				  	text-align: left;
				  	font-size:12px;
				  	color:rgba(251,195,74,1);
				  }
			    .movie-item{
			    	display: flex;
			    	justify-content: space-around;
						height: 91px;
						text-align: left;
						background-color: #33363D;
						border-radius:6px;
						margin-top: 15px;
						.text-one{
							margin-top: 25px;
							h3{
								font-size:25px;
								color:white;
							}
							p{
								font-size:12px;
								color:rgba(255,255,255,0.5);
								line-height:17px;
							}
						}
						.text-two{
							margin-top: 25px;
							font-size: 12px;
							color:rgba(255,255,255,0.5);
							line-height: 17px;
							width:67px;
							p:first-child{
								font-weight:bold;
								color:rgba(255,255,255,0.8);
							}
						}
						.text-thre{
							font-size:18px;
							font-weight:500;
							color:rgba(251,195,74,1);
							line-height:91px;
						}
				    .text-btn{
				    	margin-top: 30px;
				    	width:45px;
				    	height:25px;
				    	line-height: 25px;
				    	text-align: center;
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

</style>