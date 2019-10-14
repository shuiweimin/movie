<template>
    <div class="comingSoon">
        <BaseLayer>
            <template v-slot:default>
                <!-- 热门预告 -->
                <div class="movie-title">热门预告片</div>
                <!-- banner -->
                <div class="banner">
                    <swiper class="banner-swiper" :options="swiperOption" ref="mySwiper">
                        <!-- slides -->
                        <swiper-slide class="swiper-slide">
                            <div class="infos">
                                <span class="info">变身时尚达人！！《穿普拉达的女王》</span>
                                <span class="info item">02:12</span>
                                <img src="@/assets/imgs/movie/banner1.png" alt="">
                            </div>
                        </swiper-slide>
                        <swiper-slide class="swiper-slide">
                            <div class="infos">
                                <span class="info">变身时尚达人！！《穿普拉达的女王》</span>
                                <span class="info item">02:12</span>
                                <img src="@/assets/imgs/movie/banner2.png" alt="">
                            </div>
                        </swiper-slide>
                        <swiper-slide class="swiper-slide">
                            <div class="infos">
                                <span class="info">变身时尚达人！！《穿普拉达的女王》</span>
                                <span class="info item">02:12</span>
                                <img src="@/assets/imgs/movie/banner1.png" alt="">
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
                <!-- 即将上映 -->
                <div class="soon">
                    <div class="movie-title">即将上映</div>
                </div>
                <!-- 时间 -->
                <div class="date">
                    <div class="swiper-pagination" slot="pagination"></div>
                    <swiper class="date-swiper" :options="swiper" ref="mySwiper">
                        <!-- slides -->
                        <swiper-slide class="swiper-slide date">
                            <!-- 预售详情 -->
                            <div class="info">
                                <img class="date-img " src="@/assets/imgs/movie/movie-info2.png" alt="">
                                <div class="desrc">
                                    <p class="name">后来的我们</p>
                                    <div class="order">
                                        <span class="num num-color">1.4万</span>
                                        <span class="num ">人想看</span>
                                        <p class="time top">导演：刘若英</p>
                                        <p class="time">演员:周冬雨 井柏然</p>
                                        <div class="sale">预售</div>
                                    </div>
                                </div>
                            </div>
                            <div class="info info1">
                                <img class="date-img" src="@/assets/imgs/movie/movie-info1.png" alt="">
                                <div class="desrc">
                                    <p class="name">STONE OF DESTINY</p>
                                    <div class="order">
                                        <span class="num num-color">1.4万</span>
                                        <span class="num ">人想看</span>
                                        <p class="time top">导演：刘若英</p>
                                        <p class="time">105分钟/动画/奇幻</p>
                                        <div class="sale">预售</div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide class="swiper-slide date">
                            <!-- 预售详情 -->
                            <div class="info">
                                <img class="date-img" src="@/assets/imgs/movie/movie-info2.png" alt="">
                                <div class="desrc">
                                    <p class="name">后来的我们</p>
                                    <div class="order">
                                        <span class="num num-color">1.4万</span>
                                        <span class="num ">人想看</span>
                                        <p class="time top">导演：刘若英</p>
                                        <p class="time">演员:周冬雨 井柏然</p>
                                        <div class="sale">预售</div>
                                    </div>
                                </div>
                            </div>
                            <div class="info info1">
                                <img class="date-img" src="@/assets/imgs/movie/movie-info1.png" alt="">
                                <div class="desrc">
                                    <p class="name">STONE OF DESTINY</p>
                                    <div class="order">
                                        <span class="num num-color">1.4万</span>
                                        <span class="num ">人想看</span>
                                        <p class="time top">导演：刘若英</p>
                                        <p class="time">105分钟/动画/奇幻</p>
                                        <div class="sale">预售</div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide class="swiper-slide date">
                            <!-- 预售详情 -->
                            <div class="info">
                                <img class="date-img" src="@/assets/imgs/movie/movie-info2.png" alt="">
                                <div class="desrc">
                                    <p class="name">后来的我们</p>
                                    <div class="order">
                                        <span class="num num-color">1.4万</span>
                                        <span class="num ">人想看</span>
                                        <p class="time top">导演：刘若英</p>
                                        <p class="time">演员:周冬雨 井柏然</p>
                                        <div class="sale">预售</div>
                                    </div>
                                </div>
                            </div>
                            <div class="info info1">
                                <img class="date-img" src="@/assets/imgs/movie/movie-info1.png" alt="">
                                <div class="desrc">
                                    <p class="name">STONE OF DESTINY</p>
                                    <div class="order">
                                        <span class="num num-color">1.4万</span>
                                        <span class="num ">人想看</span>
                                        <p class="time top">导演：刘若英</p>
                                        <p class="time">105分钟/动画/奇幻</p>
                                        <div class="sale">预售</div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide class="swiper-slide date">
                            <!-- 预售详情 -->
                            <div class="info">
                                <img class="date-img" src="@/assets/imgs/movie/movie-info2.png" alt="">
                                <div class="desrc">
                                    <p class="name">后来的我们</p>
                                    <div class="order">
                                        <span class="num num-color">1.4万</span>
                                        <span class="num ">人想看</span>
                                        <p class="time top">导演：刘若英</p>
                                        <p class="time">演员:周冬雨 井柏然</p>
                                        <div class="sale">预售</div>
                                    </div>
                                </div>
                            </div>
                            <div class="info info1">
                                <img class="date-img" src="@/assets/imgs/movie/movie-info1.png" alt="">
                                <div class="desrc">
                                    <p class="name">STONE OF DESTINY</p>
                                    <div class="order">
                                        <span class="num num-color">1.4万</span>
                                        <span class="num ">人想看</span>
                                        <p class="time top">导演：刘若英</p>
                                        <p class="time">105分钟/动画/奇幻</p>
                                        <div class="sale">预售</div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide class="swiper-slide date">
                            <!-- 预售详情 -->
                            <div class="info">
                                <img class="date-img" src="@/assets/imgs/movie/movie-info2.png" alt="">
                                <div class="desrc">
                                    <p class="name">后来的我们</p>
                                    <div class="order">
                                        <span class="num num-color">1.4万</span>
                                        <span class="num ">人想看</span>
                                        <p class="time top">导演：刘若英</p>
                                        <p class="time">演员:周冬雨 井柏然</p>
                                        <div class="sale">预售</div>
                                    </div>
                                </div>
                            </div>
                            <div class="info info1">
                                <img class="date-img" src="@/assets/imgs/movie/movie-info1.png" alt="">
                                <div class="desrc">
                                    <p class="name">STONE OF DESTINY</p>
                                    <div class="order">
                                        <span class="num num-color">1.4万</span>
                                        <span class="num ">人想看</span>
                                        <p class="time top">导演：刘若英</p>
                                        <p class="time">105分钟/动画/奇幻</p>
                                        <div class="sale">预售</div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                    <div class="box"></div>
                </div>
            </template>
        </BaseLayer>
    </div>
</template>

<script>
// 引入全局组件
import BaseLayer from "@/components/BaseLayer";
// 引入betterScroll
import BScroll from '@better-scroll/core';
// 引入 vue-swiper
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    name: 'Home',
    components: {
        swiper,
        swiperSlide,
        BaseLayer
    },
    data() {
        return {
            // banner
            swiperOption: {
                slidesPerView: 1.2,
            },
            //日期
            swiper: {
                // slidesPerView: 3.5,
                spaceBetween: 20,
                // direction: 'vertical', // 垂直切换选项
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    renderBullet: function (index, className, text) {
                        switch (index) {
                            case 0: text = '2月2日'; break;
                            case 1: text = '2月3日'; break;
                            case 2: text = '2月4日'; break;
                            case 3: text = '2月5日'; break;
                            case 4: text = '2月6日'; break;
                        }
                        return '<span class="' + className + '">' + text + '</span>';
                    },
                },

            }
        };
    },

    methods: {

    }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/common/common.scss";
.comingSoon {
    height: 100%;
    //头部
    .header {
        width: 100%;
        height: 40px;
        .header-c {
            z-index: 9;
            position: fixed;
            left: 0;
            top: 0;
            display: flex;
            width: 100%;
            height: 44px;
            justify-content: center;
            align-items: center;
            margin-bottom: 30px;
            background-color: #33363d;
            // 定位
            .position {
                color: $baseColor;
            }
            //下拉箭头
            .arr {
                img {
                    width: 12px;
                    height: 6px;
                    margin-left: 4px;
                }
            }
            //即将上映
            .mid {
                color: #fff;
                width: 164px;
                height: 25px;
                line-height: 25px;
                font-size: 14px;
                box-sizing: border-box;
                margin: 0 69px 0 43px;
                padding: 1px;
                background: linear-gradient(314deg, #f19e65, #f2697f);
                border-radius: 6px 5px 5px 6px;
                //圆角
                .borderRadius {
                    display: flex;
                    justify-content: space-around;
                    width: 100%;
                    height: 100%;
                    border-radius: 6px 5px 5px 6px;
                    background-color: #33363d;
                }
                //正在热映
                .hot {
                    // margin-top: 30px;
                    width: 50%;
                    height: 100%;
                    color: $baseColor;
                    border-radius: 6px 5px 5px 6px;
                }
                // 即将上映
                .soon {
                    width: 50%;
                    height: 100%;
                    border-radius: 0 4px 4px 0;
                    background: linear-gradient(314deg, #f19e65, #f2697f);
                }
            }
        }
    }
    //修改全局组件样式
    ::v-deep .scroll-content {
        overflow: hidden;
    }
    ::v-deep .scroll-wapper {
        margin-top: 0;
        height: 600px;
    }
    //热门 即将上映title
    .movie-title {
        width: 90px;
        margin-top: 30px;
        margin-left: 20px;
        font-size: 18px;
        color: $baseColor;
    }

    //banner
    .banner {
        margin: 20px 0 26px 0;
        .banner-swiper {
            width: 100%;
            height: 185px;
            .swiper-slide {
                margin-left: 20px;
                width: 318px;
                height: 100%;
                .infos {
                    position: relative;

                    .info {
                        position: absolute;
                        top: 155px;
                        left: 13px;
                        font-size: 14px;
                        color: $baseColor;
                        &.item {
                            font-size: 12px;
                            top: 155px;
                            left: 270px;
                        }
                    }
                }
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
    //日期
    .date {
        margin-top: 11px;
        width: 100%;
        //分页器
        .box{
            width: 100%;
            height: 40px;
        }
        .swiper-pagination {
            position: static;
            display: flex;
            margin-left: 10px;
            ::v-deep .swiper-pagination-bullet {
                width: 78px;
                height: 22px;
                font-size: 14px;
                line-height: 22px;
                font-weight: 400;
                color: #969393;
                border-radius: 13px;
                margin-right: 16px;
                border: 2px solid #979797;
                background: $baseBgColor;
                //分页器激活
                &.swiper-pagination-bullet-active {
                    border: 0px;
                    color: $baseColor;
                    width: 82px;
                    height: 26px;
                    line-height: 26px;
                    background: linear-gradient(
                        150deg,
                        rgba(242, 91, 134, 1) 0%,
                        rgba(241, 172, 94, 1) 100%
                    );
                }
            }
        }
        // 即将上映详情
        .date-swiper {
            width: 100%;
            height: 340px;
            .swiper-slide {
                height: 100%;
                &.date {
                    width: 335px;
                    height: 140px;
                    // 基本信息
                    .info {
                        &.info1 {
                            margin-top: 15px;
                        }
                        .date-img {
                            height: 140px;
                        }
                        display: flex;
                        margin-left: 20px;
                        width: 335px;
                        height: 140px;
                        border-radius: 6px;
                        background-color: #33363d;
                        // 详情描述
                        .desrc {
                            width: 100%;
                            text-align: left;
                            margin: 20px 0 0 18px;
                            font-size: 18px;
                            color: #fff;
                            .order {
                                position: relative;
                                margin-top: 10px;
                                .num {
                                    font-size: 15px;
                                    &.num-color {
                                        margin-right: 8px;
                                        color: #fbc34a;
                                    }
                                }
                                .time {
                                    font-size: 12px;
                                    line-height: 20px;
                                    color: #ffffff;
                                    &.top {
                                        margin-top: 10px;
                                    }
                                }
                                //预售
                                .sale {
                                    position: absolute;
                                    right: 16px;
                                    top: 20px;
                                    width: 54px;
                                    height: 25px;
                                    font-size: 12px;
                                    color: #fff;
                                    line-height: 25px;
                                    text-align: center;
                                    border-radius: 6px;
                                    background: linear-gradient(
                                        150deg,
                                        rgba(98, 75, 163, 1) 0%,
                                        rgba(203, 68, 152, 1) 100%
                                    );
                                    box-shadow: 0px 0px 4px 1px
                                        rgba(242, 109, 125, 0.18);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
