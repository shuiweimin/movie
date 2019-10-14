<template>
	<div class="confirm-main">
		<BaseLayer>
			
      <template v-slot:header>
      	
        <Header>
          <template v-slot:left>
            <div class="header-left" @click="$router.go(-1)"></div>
          </template>
          <template v-slot:middle>
            <div class="header-title"></div>
          </template>
          <template v-slot:right>
            <div class="header-right"></div>
          </template>
        </Header>
				
      </template>
	
			
      <template v-slot:default>
				
				<div class="cinema-message">
					<h2 class="movie-name">
						后来的我们
					</h2>
					<p class="cinema-time">今天2月1日 17:10（原版2D)</p>
					<p class="cinema-address">耀莱成龙影城（建业店）</p>
					<p class="cinema-seat-num">3号激光厅 6排9座</p>
				</div>
				



				<div class="confirm-middle">
					<div class="confirm-text--discounts">
						<p>电影优惠券</p>
						<span>1张优惠券可用</span>
					</div>
					<div class="confirm-text--card">
						<p>会员卡</p>
						<span>去使用</span>
					</div>
					<div class="confirm-text--total-price">
						<p>票价总计</p>
						<span>33<span>元</span></span>
					</div>
					<div class="confirm-text--tel">
						<div class="tel_left">
							<p>手机号</p>
							<p>购票成功后将收到取票码</p>
						</div>
						<span class="tel_right">13858574848</span>
					</div>
				</div>
				

				

      </template>
			
    </BaseLayer>
    <div class="confirm-submit">
				<div class="confirm-submit_inner">
					<div class="submit-text">
						<p class="submit-text-left">查看退票、改签协议</p>
						<p class="submit-text-right">还需支付：<span>33元</span></p>
					</div>
				<div class="confirm-btn" @click="toTicket('ticket')"> 确认订单 </div>
				<BottomStrip></BottomStrip>
				</div>
		</div>
	</div>
</template>



<script>
	import BaseLayer from '../../../components/BaseLayer.vue'
	import Header from '../components/Header.vue'

	import BottomStrip from '../components/bottomStrip'



	export default {
		name:'Confirm',
		data(){
			return {}
		},
		methods:{
			toTicket(v1){
				this.$router.push(v1)
			}
		},
		components:{
			BaseLayer,
			Header,
			BottomStrip
		}
	}
</script>



<style lang="scss" scoped>
	@import "@/assets/css/common/common.scss";

	.confirm-main{
		height:100%;
		::v-deep.baseLayer-main{
	    .header-bar{
	    	background: transparent;
	      .header-left{
					background:  url('../'+$iconUrl+'arrow-left2x.png') no-repeat left center/6px 11px;
				}
	    }
	    .scroll-wapper{
	      height: 100%;
	      margin-top: 0;
	      overflow: hidden;
	      background:url('../../../assets/imgs/confirm/confirm-bg.png') no-repeat top center/100% auto;
	      .scroll-content{
	      	padding-top:40px;
	      	.cinema-message{
	      		text-align: left;
	      		padding-left:$basePadding;
	      		.movie-name{
	      			font-size:24px;
	      			color:white;
	      			margin:15px 0 15px 0;
	      		}
	      		[class^="cinema"]{
	      			line-height: 35px;
	      			color:rgba(255,255,255,0.5);
	      		}
	      	}
	      }
	      .confirm-middle{
	      	width:335px;
	      	height:209px;
	      	background: #33363D;
	      	margin:50px auto 0;
	      	padding:0 10px;
	      	border-radius:6px;
	      	box-sizing: border-box;

	      	display: flex;
	      	flex-direction: column;
	      	justify-content: space-around;

	      	[class^="confirm-text"]{
	      		display: flex;
	      		justify-content: space-between;
	      		font-size:16px;
	      		color:rgba(255,255,255,0.7);
	      	}
	      	.confirm-text--discounts{
	      		span{
	      			font-size: 12px;
	      			color:rgba(249,195,74,0.8);
	      			background:url('../../../assets/imgs/icons/arrow-right2x.png')no-repeat right center/5px 9px;
	      			padding-right:10px;
	      		}
	      	}
	      	.confirm-text--card{
	      		span{
	      			font-size: 12px;
	      			color:rgba(249,195,74,0.8);;
	      			background:url('../../../assets/imgs/icons/arrow-right2x.png')no-repeat right center/5px 9px;
	      			padding-right:10px;
	      		}
	      	}
	      	.confirm-text--total-price{
	      		span{
	      			font-size: 20px;
	      			font-weight:700;
							color:rgba(194,19,19,1);
							span{
								font-size: 10px;
							}
	      		}
	      	}
	      	.confirm-text--tel{
		      	.tel_left{
		      		text-align: left;
		      		p{
		      			line-height: 25px;
		      			&:nth-child(2){
		      				font-size: 12px;
		      				color:rgba(255,255,255,0.5);
		      			}
		      		}
		      	}
		      	.tel_right{
		      		padding-top:26px;
		      		box-sizing: border-box;
		      		font-size: 14px;
		      				color:rgba(255,255,255,0.5);
		      	}
	      	}
	      }
	    }
	  }
	  .confirm-submit{
	  	position: fixed;
	  	left:0;
	  	bottom:0;
	  	height:145px;
	  	margin-top: 190px;
	  	background: #33363D;
	  	border-radius: 0 0 45px 45px;
	  	.confirm-submit_inner{
	  		height:100%;
	  		padding:0 $basePadding;
	  		overflow: hidden;
	  		.submit-text{
	  			display: flex;
	  			justify-content: space-between;
	  			align-items: center;
	  			margin-top: 20px;
	  			.submit-text-left{
	  				font-size:12px;
				color:rgba(255,255,255,0.5	);
				background: url('../../../assets/imgs/icons/drop-up-arrow2x.png') no-repeat right center/13px 7px;
				padding-right:15px;
	  			}
	  			.submit-text-right{
	  				font-size:16px;
				color:rgba(255,255,255,0.8);
				background: url('../../../assets/imgs/icons/drop-up-arrow2x.png') no-repeat right center/13px 7px;
				padding-right:15px;
				span{
					font-weight: bolder;
					font-size: 20px;
					color:#C21313;
				}
	  			}
	  		}
	  		.confirm-btn{
	  			width:335px;
	  			height:40px;
	  			line-height: 40px;
	  			font-size: 18px;
	  			color:white;
	  			margin:35px auto 13px;
	  			background:linear-gradient(150deg,rgba(242,91,134,1) 0%,rgba(241,172,94,1) 100%);
			box-shadow:0px 0px 4px 1px rgba(242,109,125,0.18);
			border-radius:6px;
	  		}
	  	}
	  }
	}

</style>