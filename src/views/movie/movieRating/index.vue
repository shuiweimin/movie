<template>
    <div class="cinemaRating">
        <BaseLayer>
            <template v-slot:header>
                <div class="header">
                    <img src="@/assets/imgs/icons/icon-arr-back.png" alt="" @click="$router.go(-1)">
                    <span class="title">电影评分</span>
                    <img src="@/assets/imgs/icons/icon-share.png" alt="">
                </div>
            </template>
            <template v-slot:default>
                <div class="details">
                    <!-- 电影名字评分 -->
                    <div class="info">
                        <p class="name">《大鱼海棠》</p>
                        <div class="star">
                            <img src="@/assets/imgs/icons/star.png" alt="">
                            <img src="@/assets/imgs/icons/star.png" alt="">
                            <img src="@/assets/imgs/icons/star.png" alt="">
                            <img src="@/assets/imgs/icons/star.png" alt="">
                            <img src="@/assets/imgs/icons/star.png" alt="">
                            <img src="@/assets/imgs/icons/star.png" alt="">
                            <span>9.0</span>
                            <span class="text">分</span>
                        </div>
                        <p class="rating">28.5万人评分</p>
                    </div>
                </div>
                <!-- 评分柱状图 -->
                <div class="echarts">
                    <div class="charts">

                    </div>
                </div>
                <div class="chartsBottom">·以上数据，实时更新</div>
                <!-- 分割线 -->
                <div class="line"></div>
                <!-- 观众评分画像 -->
                <div class="echarts2">
                    <div class="text">观众评分画像</div>
                    <div class="box">
                        <div class="sex man">
                            <img src="@/assets/imgs/cinemaRating/man.png" alt="">
                            <p>男性观众</p>
                            <p class="rating">8.4分</p>
                        </div>
                        <p class="vs">VS</p>
                        <div class="sex woman">
                            <img class="img" src="@/assets/imgs/cinemaRating/woman.png" alt="">
                            <p>女性观众</p>
                            <p class="rating">8.6分</p>
                        </div>
                    </div>
                    <!-- 柱状图 -->
                    <div class="myCharts">
                        <div class="myChart">

                        </div>
                    </div>
                </div>
                <div class="chartsBottom"> ·以上数据，每30分钟更新一次 </div>
                <div class="height"></div>
            </template>
        </BaseLayer>
    </div>
</template> 

<script>
// 引入全局组件
import BaseLayer from "@/components/BaseLayer";
// 引入betterScroll
import BScroll from '@better-scroll/core';

// 引入echarts
import echarts from 'echarts'

export default {
    name: 'actorsDetails',
    components: {
        BaseLayer,

    },

    mounted() {
        this.drawLine();
        this.drawLine2();
    },
    methods: {
        // 柱状图1
        drawLine() {

            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.querySelector('.charts'))
            // 绘制图表
            myChart.setOption({
                title: {},
                tooltip: {},
                // 距x ,y 的距离
                grid: {
                    left: 0,    //Y轴距离左边的距离
                    right: 0,
                    bottom: 20,     //X轴距离右边的距离
                    height: '60%'    // 柱状图长度
                },
                // X轴
                xAxis: {
                    data: ["9-10分", "9-10分", "9-10分", "9-10分", "9-10分"],
                    axisLine: {
                        color: 'white',
                        show: false,
                        lineStyle: {
                            type: 'none',
                            color: '#86888c',//x轴的颜色
                            height: '0'//x坐标轴线的宽度
                        },
                        // x轴字体颜色
                        textStyle: {
                            fontSize: '2px',
                            color: '#86888c'
                        }
                    },

                    // 设置x轴下文字间距
                    axisLabel: {
                        interval: 0
                    },
                    //分割线的颜色、类型：虚线和实线
                    splitLine: {
                        show: false,
                    },
                    // 坐标轴 刻度
                    axisTick: {
                        show: false,  // 是否显示
                        // inside: true,  // 是否朝内
                        // alignWithLabel: true
                    },

                },
                // Y轴
                yAxis: {
                    axisLine: {
                        color: '',     //
                        lineStyle: {
                            type: 'none',
                            color: '',//y轴的颜色
                            width: '0'//y坐标轴线的宽度
                        },

                    },
                    splitLine: {                        //分割线的颜色、类型：虚线和实线
                        show: false,

                    }
                },
                series: [{
                    data: [54.6, 29.4, 12.3, 1.1, 0.8],
                    name: '',
                    barMinHeight: 7,
                    barCategoryGap:70,
                    type: 'bar',
                    // 同类之间的间距
                    // barGap: '70%',
                    // 不同类之间的间距                   
                    // barCategoryGap: '100%',
                    // 动画
                    animation: false,
                    // 宽度
                    barWidth: 20,
                    // 柱状图数据
                    label: {
                        show: true, //开启显示
                        position: 'top', //在上方显示
                        formatter: '{c}%',
                        textStyle: { //数值样式
                            fontSize: 12,
                            color: '#FBC34A',
                        }
                    },
                    //柱状图样式
                    itemStyle: {
                        normal: {
                            // 柱状图圆角
                            barBorderRadius: [5],
                            //柱状图渐变色
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    { offset: 0, color: '#F1A263' },
                                    // { offset: 0.5, color: '#F25E84' },
                                    { offset: 1, color: '#F25E84' }
                                ]
                            ),
                        }
                    },


                }]
            });
        },
        // 柱状图2
        drawLine2() {
            let myChart = this.$echarts.init(document.querySelector('.myChart'))
            // 绘制图表
            myChart.setOption({
                title: {},
                tooltip: {},
                // 距x ,y 的距离
                grid: {
                    left: 35,    //Y轴距离左边的距离
                    right: 0,
                    top: 0,
                    bottom: 0,    //X轴距离右边的距离
                    width: '70%'
                },
                xAxis: {
                    axisLine: {
                        show: false,
                    },
                    //分割线的颜色、类型：虚线和实线
                    splitLine: {
                        show: false,
                    },

                },
                yAxis: {
                    type: 'category',
                    inverse: true,
                    data: ["95后", "90后", "80后", "70后"],
                    axisLine: {
                        // color: 'white',
                        show: false,
                        interval: 1,
                        lineStyle: {
                            type: 'none',
                            color: '#86888c',//y轴的颜色
                            height: '0'//y坐标轴线的宽度
                        },
                        // y轴字体颜色
                        textStyle: {
                            fontSize: '14px',
                            color: '#86888c'
                        }
                    },
                    // 坐标轴 刻度
                    axisTick: {
                        show: false,  // 是否显示
                        // inside: true,  // 是否朝内
                    },
                    //分割线的颜色、类型：虚线和实线
                    splitLine: {
                        show: false,
                    },
                },
                series: [{
                    data: [8.7, 8.1, 8.4, 8.5],
                    name: '',
                    type: 'bar',
                    // 同类之间的间距
                    barGap: '70%',
                    // 不同类之间的间距                   
                    // barCategoryGap: '100%',
                    // 动画
                    animation: false,
                    // 宽度
                    barWidth: 12,
                    // 柱状图数据
                    label: {
                        show: true, //开启显示
                        position: 'right', //在上方显示
                        formatter: '{c}分',
                        textStyle: { //数值样式
                            color: '#FBC34A',
                            fontSize: 14,
                        }
                    },
                    //柱状图样式
                    itemStyle: {
                        // 柱状图宽度
                        barWidth: '12px',
                        normal: {
                            // 柱状图圆角
                            margin: 15,
                            barBorderRadius: [5],
                            //柱状图渐变色
                            color: new echarts.graphic.LinearGradient(
                                1, 0, 0, 0,
                                [
                                    { offset: 1, color: '#F25E84' },
                                    { offset: 0, color: '#F1A263' },
                                    // { offset: 0.5, color: '#F25E84' },
                                ]
                            ),
                        }
                    },


                }]
            });
        },

    },
}
</script>

<style lang='scss' scoped>
.cinemaRating {
    height: 100%;
    // 头部
    ::v-deep .scroll-wapper {
        margin-top: 0;
        height: 667px;
    }
    ::v-deep .header-bar {
       background-color: rgba(0,0,0,0)
    }
    .header {
        position: fixed;
        left: 0;
        top: 0;
        display: flex;
        align-items: center;
        width: 100%;
        height: 40px;
        margin-left: 20px;
        .title {
            margin: 0 115px 0 129px;
            font-size: 16px;
            color: #fff;
        }
    }
    //演员详情
    .details {
        width: 100%;
        height: 252px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: url("../../../assets/imgs/cinemaRating/bg.png") no-repeat
            center;
        
        //电影评分
        .info {
            // margin-top: 47px;
            .name {
                color: #fff;
                font-size: 18px;
            }
            .star {
                display: flex;
                align-items: center;
                margin-top: 5px;
                font-size: 22px;
                color: #fbc34a;
                img {
                    margin-right: 3px;
                    width: 8px;
                    height: 8px;
                }
                .text {
                    font-size: 14px;
                    margin-top: 5px;
                }
            }
            .rating {
                margin-top: 8px;
                font-size: 12px;
                color: #86888c;
            }
        }
    }
    // 柱状图
    .echarts {
        width: 100%;
        height: 184px;
        margin-top: -50px;
        display: flex;
        justify-content: center;
        .charts {
            width: 298px;
            height: 184px;
            // background-color: pink;
        }
    }
    .chartsBottom {
        font-size: 12px;
        margin: 12px 0 15px 0;
        color: #86888c;
    }
    .line {
        width: 100%;
        height: 6px;
        background-color: #33363d;
    }
    .echarts2 {
        display: flex;
        flex-direction: column;
        align-items: center;
        .text {
            color: #fff;
            font-size: 16px;
            margin-top: 20px;
            font-weight: 400;
        }
        .box {
            display: flex;
            align-items: center;
            margin-top: 20px;
            .vs {
                margin: 0 12px 0 12px;
                font-size: 16px;
            }
            .sex {
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                width: 138px;
                height: 36px;
                border-radius: 6px;
                color: #fff;
                font-size: 14px;
                background-color: #33363d;
                .rating {
                    color: #fbc34a;
                    font-size: 12px;
                }
                img {
                    width: 20px;
                    height: 20px;
                }
                &.woman {
                    .img {
                        width: 14px;
                        height: 21px;
                    }
                }
            }
        }
        // 柱状图
        .myChart {
            width: 299px;
            height: 146px;
            margin-top: 31px;
        }
    }
    .height {
        width: 100%;
        height: 58px;
    }
}
</style>