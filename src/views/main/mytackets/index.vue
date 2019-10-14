<template>
  <div class="my-tackets">
        <div class="header">
            <div class="item l" @click="$router.go(-1)">
                <img class="arr-l" src="../../../assets/imgs/icons/arrow-left2x.png" alt="">
            </div>
            <h2 class="tacket">我的影票</h2>
            <div class="item r"></div>
        </div>
        <div class="main">
            <div class="main-top">
                <ul class="top-text">
                    <li class="text-title">后来的我们</li>
                    <li class="text time">今天 5-8 12:00-13:56 (英语3D)</li>
                    <li class="text studios">耀莱成龙影城(建业店)</li>
                    <li class="text seat">1号激光厅 7排12座 7排13座</li>
                </ul>
                <img class="img" src="@/assets/imgs/mytackets/after-us.png" alt="">
            </div>
            <ul class="main-center">
                <li class="center-title">
                    <p class="item code">取票码</p>
                    <span class="item number">284856992589858F</span>
                    <p class="item price">33元</p>
                </li>
                <li class="center-code">
                    <img src="@/assets/imgs/mytackets/timg.png" alt="">
                </li>
                <li class="center-number">
                    2张电影票
                </li>
            </ul>
            <ul class="main-end">
                <li class="end-studios a">
                    <p class="studios l">耀莱成龙影城（建业店</p>
                    <p class="studios r">1.3km</p>
                </li>
                <li class="end-studios b">
                    <p class="address">地址：云龙区万达广场3层</p>
                    <img class="phone" src="@/assets/imgs/mytackets/telephone.png" alt="">
                </li>
            </ul>
        </div>
  </div>
</template>

<script>
export default {
  name: 'My-tackets',
  data() { 
    return {

    }
  }
 }
</script>

<style lang='scss' scoped>
    .my-tackets{
        margin: 0 auto;
        width: 90%;
        height: 100%;
        .header{
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            height: 44px;
            .tacket{
                color: #ffffff;
                font-size: 20px;
            }
            .item{
                width: 40px;
                height: 100%;
                font-size: 26px;
                text-align: center;
                color: gray;
                line-height: 44px;
                .arr-l{
                    width: 7px;
                    height: 13px;
                    
                }
            }
        }
        .main{
            margin-top: 40px;
            width: 340px;
            height: 519px;
            background: url("../../../assets/imgs/mytackets/shap.png") no-repeat center;
            overflow: hidden;
            .main-top{
                margin: 30px auto 0;
                display: flex;
                justify-content: space-between;
                width: 80%;
                height: 150px;
                border-bottom: 2px dotted #979797;
                .top-text{
                    display: flex;
                    flex-flow: column;
                    align-items: flex-start;
                    justify-content: space-between;
                    width: 180px;
                    height: 114px;
                    .text-title{
                        color: #3A3A3A;
                        font-size: 18px;
                    }
                    .text{
                        font-size: 12px;
                        color: #3A3A3A;
                    }
                }
                .img{
                    width: 78px;
                    height: 114px;
                }
            }
            .main-center{
                margin: 20px auto 0;
                width: 94%;
                height: auto;
                border-bottom: 2px dotted #979797;
                .center-title{
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    height: 24px;
                    width: 100%;
                    .item{
                        font-size: 14px;
                        color: #3A3A3A;
                    }
                    .item.number{
                        margin-left: -10px;
                        padding: 3px 10px;
                        border: 1px solid #3A3A3A;
                        border-radius: 3px;
                    }
                }
                .center-code{
                    margin-top: 18px;
                }
                .center-number{
                    font-size: 10px;
                    color: #3A3A3A;
                    padding: 18px 0 10px;
                }
            }
            .main-end{
                margin: 0 auto;
                width: 94%;
                height: auto;
                .end-studios{
                    display: flex;
                    margin-top: 12px;
                    font-size: 14px;
                    color: #3A3A3A;
                    align-items: center;
                    justify-content: space-around;
                }
                .end-studios.b{
                    font-size: 12px;
                }
            }

        }
    }
</style>