<template>
	<div class="choose-main">
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
            <div class="header-right"></div>
          </template>
        </Header>
				
				
				<p class="movie-name">后来的我们</p>
      	<div class="movie-detail">
      		<div class="movie-time">15:30—17:14</div>
      		<div class="movie-type">原版3D</div>
      	</div>
				
      	<div class="seat-tag">
      		<div class="checke-type"><span class="able-checke"></span> 可选</div>
      		<div class="checke-type"><span class="unable-checke"></span> 不可选</div>
      		<div class="checke-type"><span class="checked"></span> 已选</div>
      	</div>
      	<div class="screen-box">3号激光厅银幕</div>
      </template>
	
			
      <template v-slot:default>		

				<div class="seat-box">

					<div class="seat-item" v-for="(item,index) in 9" :key="index">
						<div class="seat-item_square" v-for="(sq,i) in 12" :key="i"></div>
					</div>

					<div class="row-number">
						<div class="row-number-item"><span>1</span><span>2</span><span>3</span></div>
						<div class="row-number-item"><span>4</span><span>5</span><span>6</span></div>
						<div class="row-number-item"><span>7</span><span>8</span><span>9</span></div>
					</div>
				</div>
			   
      </template>
			
    </BaseLayer>

   	<div class="ckeck-button-box">
			 <p>推荐座位
			 	<span>1人</span>
			 	<span>2人</span>
			 	<span>3人</span>
			 	<span>4人</span>
			 </p>
			 <div class="check-button-wrapper">
			     <div class="ckeck-button" @click="toConfirm">
			     	请先选座
			     </div>
			 </div>
			<BottomStrip class="buttom-strip--modify"></BottomStrip>
		</div>

	</div>
</template>



<script>

		//引入 better-scroll 封装插槽 组件  
	import BaseLayer from "@/components/BaseLayer"

	//专门为header内容也做一个插槽组件 , 后面循环使用 此组件与上面的 BaseLayer 形成组件嵌套关系
	import Header from '../components/Header'

	import BottomStrip from '../components/bottomStrip'
	export default {

		name:'Choose',
		data(){
			return {
				cinemaName:"",
				cinemaAddress:''
			}
		},
		components:{
			BaseLayer,
			Header,
			BottomStrip
		},
		methods:{
			//到确认订单页面
			toConfirm(){
				this.$router.push('confirm')
			}
		},
		created(){
			this.cinemaName = window.sessionStorage.getItem('cinemaName')
			this.cinemaAddress = window.sessionStorage.getItem('cinemaAddress')
		}
	}
</script>



<style lang="scss" scoped>
	@import "@/assets/css/common/common.scss";

	.choose-main{
		height:100%;
		background-color: #000;
		.baseLayer-main{

			background-color: #22262D;
			::v-deep.header-bar{
				height:250px;
				background:#22262D url('../../../assets/imgs/choose/choose-bg.png') no-repeat top center/100% auto;
				.header-main{
					height:40px;
					line-height: 40px;
					.header-left{
						background: url('../'+$iconUrl+'arrow-left2x.png') no-repeat left center/6px 11px;
					}
					.header-title{
				  	font-size:16px;
				  	color:white;
				  }
					.header-search{
				    background: url('../'+$iconUrl+'transpond2x.png') no-repeat right center/17px 17px;
				  }
				}
				.movie-name{
					font-size: 16px;
					line-height: 45px;
					text-align: left;
					color:white;
					padding:0 $basePadding;
				}
				.movie-detail{
					display: flex;
					padding:0 $basePadding;
					.movie-time{
						width:99px;
						height:23px;
						line-height: 23px;
						color:rgba(255,255,255,0.8);
						background:rgba(51,54,61,0.7);
						border-radius:5px;
						margin-right: 15px;
					}
					.movie-type{
						width:61px;
						height:23px;
						line-height: 23px;
						border-radius:5px;
						opacity:0.7293999999999999;
						color:white;
						border:1px solid rgba(51,54,61,1);
					}
				}
				.seat-tag{
					display: flex;
					justify-content: space-between;
					margin-top: 25px;
					padding:0 $basePadding;
					.checke-type{
						color:rgba(255,255,255,0.5);
						text-indent:0.5em;
						.able-checke,.unable-checke,.checked {
							display: inline-block;
							width:26px;
							height:26px;
							background:rgba(144,146,148,1);
							box-shadow:0px 2px 4px 0px rgba(76,41,49,0.54);
							vertical-align: middle;
							border-radius: 3px;
						}
						.unable-checke{
							background: #F9C34A;
						}
						.checked {
							background: #6548A9;
						}
					}
				}
				.screen-box{
					width:130px;
					height:25px;
					line-height: 25px;
					margin:57px auto 0;
					color:rgba(255,255,255,0.6);
					background: #33363D;
					border-radius: 35px 35px 5px 5px;
				}
			}
			
			::v-deep.scroll-wapper{
				height:calc(100% - 395px);
				margin-top: 250px;
				overflow: auto;
				.scroll-content{
					height:270px;
					background: #22262D;
					.seat-box{
						position:relative;
						width:315px;
						height:240px;
						margin:10px auto 0;
						display: flex;
						flex-wrap: wrap;
						flex-direction: column;
						justify-content: space-between;
						align-content: space-between;
						.row-number{
							position:absolute;
							top:50%;
							left:-25px;
							display: flex;
							flex-direction: column;
							justify-content: space-between;
							transform: translateY(-50%);
							width:20px;
							height:260px;
							padding:10px 0;
							background-color: #292C33;
							border-radius: 10px;
							box-sizing: border-box;
							box-shadow:0px 0px 4px 0px rgba(0,0,0,0.35);
							.row-number-item{
								display: flex;
								flex-direction: column;
								justify-content: space-between;
								width:100%;
								height:70px;
								font-size: 16px;
								color:white;
							}
						}
						.seat-item{
							display: flex;
							flex-wrap:wrap;
							justify-content: space-between;
							align-content: space-between;
							width:95px;
							height:70px;
							.seat-item_square{
								width:20px;
								height:20px;
								background:#8F9194;
								border-radius:3px;
							}
							&:nth-child(1){
								.seat-item_square{
									&:nth-child(-n+2),&:nth-child(5){
										visibility: hidden;
									}
								}
							}
							&:nth-child(7){
								.seat-item_square{
									&:nth-child(3),&:nth-child(4),&:nth-child(8){
										visibility: hidden;
									}
								}
							}
						}
					}
				}
			}
		}
		.ckeck-button-box{
			position: fixed;
			bottom:0;
			left:0;
			width:100%;
			height:145px;
			background: #33363D;
			overflow: hidden;
			border-radius: 0 0 30px 30px;
			p{
				font-size:16px;
				font-weight:400;
				color:rgba(255,255,255,0.8);
				line-height:22px;
				margin-top:15px;
				span{
					display: inline-block;
					width:52px;
					height:23px;
					border:1px solid rgba(151,151,151,1);
					margin:0 6px;
				}
			}
			.check-button-wrapper{
				margin-top: 35px;
				padding:0 $basePadding;
				.ckeck-button{
					height:40px;
					line-height:40px;
					font-size: 18px;
					color:rgba(255,255,255,0.9);
					background:linear-gradient(150deg,rgba(242,91,134,1) 0%,rgba(241,172,94,1) 100%);
					box-shadow:0px 0px 4px 1px rgba(242,109,125,0.18);
					border-radius:6px;
					opacity:0.4391;
				}
			}
			.buttom-strip--modify{
				margin-top: 10px;
			}
		}
	}
</style>