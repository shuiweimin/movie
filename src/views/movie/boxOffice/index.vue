<template>
    <div class="boxOffice">
        <!-- 头部 -->
        <div class="header">
            <div class="header-c">
                <!-- 电影名称 -->
                <div class="title">
                    <img class="title-img" src="@/assets/imgs/icons/icon-arr-back.png" alt="" @click="$router.go(-1)">
                    <span class="title-name">傲慢与偏见</span>
                    <!-- <router-link :to="{ name:'actorsDetails'}" style="color:#fff">跳转到演员详情页</router-link> -->
                </div>
            </div>
        </div>
        <!-- 票房详情 -->
        <div class="content">
            <!-- 顶部 -->
            <div class="tickets">
                <div class="ticket day">
                    <span class="top">2</span>
                    <span class="bottom">今日票房</span>
                </div>
                <div class="ticket week">
                    <span class="top">暂无</span>
                    <span class="bottom">首周票房 (万)</span>
                </div>
                <div class="ticket rank">
                    <span class="top">2660</span>
                    <span class="bottom">今日票房排行</span>
                </div>
            </div>
            <!-- 分割线 -->
            <div class="line"></div>
            <!-- 总票房 -->
            <div class="total">
                <p class="ticket-title">总票房</p>
                <div class="total-mid">
                    <div class="ticket day">
                        <span class="top">地区</span>
                        <span class="bottom">中国</span>
                    </div>
                    <div class="ticket week">
                        <span class="top">每周末票房</span>
                        <span class="bottom">暂无数据</span>
                    </div>
                    <div class="ticket rank">
                        <span class="top">总票房</span>
                        <span class="bottom">501万元</span>
                    </div>
                </div>
            </div>
            <!-- 分割线 -->
            <div class="line"></div>
            <!-- 日票房明细 -->
            <div class="ticket-details">
                <div class="ticket-titles">
                    <p class="ticket-day">日票房明细</p>
                    <p class="ticket-unit">单位:万元</p>
                </div>
                <div class="detailed">
                    <div class="detailed-item day">
                        <p class="th">日期</p>
                        <p class="date">2018-05-18</p>
                        <p class="weekday">周六上映首日</p>
                        <p>2018-05-17</p>
                        <p>周五零点场</p>
                    </div>
                    <div class="detailed-item">
                        <p class="td">当日票房</p>
                        <p class="percent">538.6</p>
                        <p>- -</p>
                    </div>
                    <div class="detailed-item">
                        <p class="td">票房占比</p>
                        <p class="percent">8.3%</p>
                        <p>- -</p>
                    </div>
                    <div class="detailed-item">
                        <p class="td">拍片占比</p>
                        <p class="percent">21.3%</p>
                        <p>0.0%</p>
                    </div>
                    <div class="detailed-item">
                        <p class="td">场次人次</p>
                        <p class="percent">3</p>
                        <p>0</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template> 

<script>
// 引入全局组件
import BaseLayer from "@/components/BaseLayer";
// 引入betterScroll
import BScroll from '@better-scroll/core';
export default {
    name: 'boxOffice',
    components: {
        BaseLayer
    },
    data() {
        return {

        }
    },
}
</script>

<style lang='scss' scoped>
@import "@/assets/css/common/common.scss";
.boxOffice {
    height: 100%;
    //头部
    .header {
        width: 100%;
        height: 44px;
        margin-bottom: 30px;
        .header-c {
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 44px;
            display: flex;
            align-items: center;
            z-index: 9;
            .title {
                font-size: 16px;
                color: #fff;
                .title-img {
                    margin-left: 18px;
                }
                .title-name {
                    margin-left: 129px;
                }
            }
        }
    }
    // 票房详情
    .content {
        // 顶部
        .tickets {
            display: flex;
            justify-content: space-evenly;
            width: 100%;
            height: 33px;
            margin-bottom: 9px;
            .ticket {
                width: 72px;
                display: flex;
                color: #fff;
                flex-direction: column;
                justify-content: center;
                &.day {
                    .top {
                        color: #fbc34a;
                    }
                }
                &.rank {
                    .top {
                        color: #fbc34a;
                    }
                }
                .bottom {
                    font-size: 12px;
                    color: #86888c;
                    margin-top: 6px;
                }
                .top {
                    font-size: 18px;
                }
            }
        }
        // 分割线
        .line {
            width: 100%;
            height: 6px;
            // margin-top: 9px;
            background-color: #33363d;
        }

        // 总票房
        .total {
            width: 100%;
            height: 111px;
            color: #fff;
            //票房标题
            .ticket-title {
                width: 100%;
                margin-top: 19px;
                text-align: left;
                margin-left: 17px;
                font-size: 16px;
                color: #fff;
            }
            .total-mid {
                display: flex;
                justify-content: center;
                margin-bottom: 18px;
                .ticket {
                    display: flex;
                    flex-direction: column;
                    margin-top: 30px;
                    &.week {
                        margin: 30px 101px 0 114px;
                    }
                    .top {
                        color: #86888c;
                    }
                    .bottom {
                        margin-top: 20px;
                    }
                }
            }
        }
        //票房明细
        .ticket-details {
            margin-top: 20px;
            .ticket-titles {
                color: #fff;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                .ticket-day {
                    margin-right: 197px;
                    color: #fff;
                    font-size: 16px;
                }
                .ticket-unit {
                    font-size: 12px;
                }
            }
            .detailed {
                display: flex;
                margin-top: 30px;
                .detailed-item {
                    color: #86888c;
                    &.day {
                        width: 72px;
                        text-align: left;
                        margin: 0 27px 0 18px;
                        .th {
                            margin-bottom: 20px;
                        }
                        .date {
                            color: #fbc34a;
                        }
                        .weekday {
                            color: #c01212;
                            margin-bottom: 20px;
                        }
                    }
                    .td {
                        margin-right: 15px;
                    }
                    .percent {
                        margin: 29px 0 30px 0;
                    }
                }
            }
        }
    }
}
</style>