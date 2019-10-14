<template >
    <div class="details">
        <BaseLayer>
            <template v-slot:default>
                <div class="details-header">
                    <img src="@/assets/imgs/details/bgc.png" />
                    <router-link class="movie" :to="{name:'movie'}">
                        <img class="header-1" src="@/assets/imgs/details/left.png" alt />
                    </router-link>
                    <img class="header-2" src="@/assets/imgs/details/share.png" alt />
                    <img class="header-3" src="@/assets/imgs/details/aoman-1.png" alt />
                    <img class="header-4" src="@/assets/imgs/details/aoman-2.png" alt />
                </div>
                <div class="content">
                    <div class="con-name">
                        <div class="name">
                            <p class="aoman">傲慢与偏见（2005）</p>
                            <p class="time">120min</p>
                        </div>
                        <p class="yy">Pride & Prejudice</p>
                        <div class="star">
                            <img class="star-9" src="@/assets/imgs/details/star-1.png" alt />
                            <img class="star-9" src="@/assets/imgs/details/star-1.png" alt />
                            <img class="star-9" src="@/assets/imgs/details/star-1.png" alt />
                            <img class="star-9" src="@/assets/imgs/details/star-1.png" alt />
                            <img class="star-9" src="@/assets/imgs/details/star-2.png" alt />
                            <div class="pf">
                                <span class="pf-9">9.0</span>
                                <span>/10</span>
                            </div>
                            <img class="pl" src="@/assets/imgs/details/pl.png" alt />
                            <router-link class="sc" :to="{ name:'movieRating'}">
                                <img class="sc" src="@/assets/imgs/details/sc.png" alt />
                            </router-link>
                        </div>
                        <div class="intr-title">
                            <div class="title-1">
                                简介
                                <div class="line"></div>
                            </div>
                            <div class="title-2">
                                <router-link class="t-2" :to="{name:'comment'}">影评</router-link>
                            </div>
                            <div class="title-3">讨论</div>
                            <div class="title-4">更多</div>
                        </div>
                        <div class="intr">
                            <span>伊丽莎白·班纳特（凯拉·奈特莉饰）和姐姐珍·班纳特（罗莎曼 德·派克 饰）、妹妹玛丽·班纳特（妲露拉·莱莉饰）、凯蒂·班 纳特（凯瑞·穆丽根饰）以及丽迪亚·班纳特（吉娜·马隆 饰） 这5个出身于小地主家庭的姐妹个个如花似玉…</span>
                            <span class="more">查看更多></span>
                        </div>
                    </div>
                    <div class="con-yy">
                        <p class="yy-p">演职人员</p>
                        <swiper class="yy-swiper" :options="swiperOption" ref="mySwiper">
                            <swiper-slide class="yy-slide">
                                <router-link :to="{ name:'actorsDetails'}">
                                    <img class="yy-img" src="@/assets/imgs/details/yy-1.png" alt />
                                </router-link>
                                <p class="yy-p1">凯拉·奈特莉</p>
                                <p class="yy-p2">饰伊丽莎…</p>
                            </swiper-slide>
                            <swiper-slide class="yy-slide">
                                <router-link :to="{ name:'actorsDetails'}">
                                    <img class="yy-img" src="@/assets/imgs/details/yy-2.png" alt />
                                </router-link>
                                <p class="yy-p1">西蒙·伍兹</p>
                                <p class="yy-p2">饰查尔斯…</p>
                            </swiper-slide>
                            <swiper-slide class="yy-slide">
                                <router-link :to="{ name:'actorsDetails'}">
                                    <img class="yy-img" src="@/assets/imgs/details/yy-3.png" alt />
                                </router-link>
                                <p class="yy-p1">裴淳华</p>
                                <p class="yy-p2">饰珍·班内特</p>
                            </swiper-slide>
                            <swiper-slide class="yy-slide">
                                <router-link :to="{ name:'actorsDetails'}">
                                    <img class="yy-img" src="@/assets/imgs/details/yy-4.png" alt />
                                </router-link>
                                <p class="yy-p1">裴淳华</p>
                                <p class="yy-p2">饰珍·班内特</p>
                            </swiper-slide>
                            <swiper-slide class="yy-slide">
                                <router-link :to="{ name:'actorsDetails'}">
                                    <img class="yy-img" src="@/assets/imgs/details/yy-4.png" alt />
                                </router-link>
                                <p class="yy-p1">裴淳华</p>
                                <p class="yy-p2">饰珍·班内特</p>
                            </swiper-slide>
                        </swiper>
                        <p class="yy-32">全部32位演员</p>
                    </div>

                    <div class="con-video">
                        <p class="video">视频</p>
                        <swiper class="video-swiper" :options="swiperOption1" ref="mySwiper">
                            <swiper-slide class="video-slide">
                                <video class="video-img" src="@/assets/imgs/home/xlgs.mp4" poster="@/assets/imgs/details/video-1.png" controls preload>

                                </video>
                                <p class="video-p">《傲慢与偏见》：百年经典的绝美呈现， 一次现实与理想的爱情碰撞</p>
                            </swiper-slide>
                            <swiper-slide class="video-slide">
                                <video class="video-img" src="@/assets/imgs/home/xlgs.mp4" poster="@/assets/imgs/details/video-2.png" controls preload>

                                </video>
                                <p class="video-p">借了不朽经典的光，拍了一 部沦为普通的爱情故事</p>
                            </swiper-slide>
                        </swiper>
                        <p class="video-10">全部10个视频</p>
                    </div>
                    <!-- 票房 -->
                    <div class="booking-office">
                        <p class="title">票房</p>
                        <div class="booking">
                            <div class="booking-p">
                                <p class="booking-p1">2</p>
                                <p class="booking-p2">今日票房排行</p>
                            </div>
                            <div class="booking-p">
                                <p class="booking-p1">暂无</p>
                                <p class="booking-p2">首周票房（万）</p>
                            </div>
                            <div class="booking-p">
                                <p class="booking-p1">2660</p>
                                <p class="booking-p2">今日票房排行</p>
                            </div>
                        </div>
                        <router-link class="booking-xq" :to="{ name:'boxOffice' }" tag="p">票房详情</router-link>
                    </div>
                </div>
                <div class="footer-buy">
                    <router-link class="footer-p" :to="{name:'choose'}" tag="div">特惠选座</router-link>
                </div>

            </template>

        </BaseLayer>
    </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

import BaseLayer from "@/components/BaseLayer";
export default {
    name: "Details",
    components: {
        swiper,
        swiperSlide,
        BaseLayer
    },
    data() {
        return {
            swiperOption: {
                slidesPerView: 3.2
            },
            swiperOption1: {
                slidesPerView: 1.7
            }
        };
    },
    methods: {}
};
</script>

<style lang='scss' scoped>
// ::v-deep .footer-main{
//     height: 0;
//   }
.details {
    height: 100%;
    ::v-deep .header-bar {
        height: 0;
    }
    ::v-deep .scroll-wapper {
        height: 100%;
        margin-top: 0;
    }

    // header
    .details-header {
        position: relative;
        width: 100%;
        height: 258px;

        .movie {
            position: absolute;
            left: 0;
            top: 0;
            margin: 10px;
        }
        .header-2 {
            position: absolute;
            top: 0;
            right: 0;
            display: block;
            width: 19px;
            height: 19px;
            margin: 20px;
        }
        .header-3 {
            position: absolute;
            bottom: 0;
            left: 20px;
            display: block;
            width: 96px;
            height: 131px;
        }
        .header-4 {
            position: absolute;
            bottom: 0;
            right: 100px;
        }
    }

    // content
    .content {
        width: 100%;
        color: #fff;
        .con-name {
            margin: 20px;
            .name {
                display: flex;
                .aoman {
                    width: 188px;
                    height: 20px;
                    font-size: 20px;
                }
                .time {
                    width: 40px;
                    height: 20px;
                    font-size: 12px;
                    line-height: 20px;
                    color: #f17479;
                    margin: 0 20px;
                }
            }
            .yy {
                width: 114px;
                height: 14px;
                font-size: 14px;
                margin: 15px 0;
            }
            .star {
                width: 100%;
                display: flex;
                .star-9 {
                    width: 22px;
                    height: 22px;
                    margin: 0 10px 30px 0;
                }
                .pf {
                    font-size: 12px;
                    .pf-9 {
                        width: 33px;
                        height: 22px;
                        font-size: 22px;
                        color: #fbc34a;
                    }
                }
                .pl {
                    display: block;
                    width: 16px;
                    height: 16px;
                    margin: 0 10px 0 60px;
                }
                .sc {
                    display: block;
                    width: 18px;
                    height: 17px;
                }
            }
            .intr-title {
                display: flex;
                width: 100%;
                font-size: 14px;
                .title-2 {
                    display: block;
                    margin: 0 30px;
                    .t-2 {
                        color: #fff;
                        text-decoration: none;
                    }
                }
                .title-4 {
                    margin: 0 30px;
                }
                .line {
                    width: 29px;
                    height: 3px;
                    margin: 2px 0;
                    background: linear-gradient(
                        135deg,
                        rgba(241, 100, 129, 1) 0%,
                        rgba(241, 144, 108, 1) 100%
                    );
                }
            }
            .intr {
                width: 330px;
                height: 72px;
                font-size: 12px;
                line-height: 18px;
                text-align: left;
                margin: 10px 0 30px 0;
                .more {
                    display: inline-block;
                    width: 66px;
                    height: 14px;
                    font-size: 14px;
                    color: #fbc34a;
                }
            }
        }
    }
    // 演职人员
    .con-yy {
        width: 100%;

        .yy-p {
            width: 72px;
            height: 18px;
            font-size: 18px;
            margin: 0 20px 15px;
        }
        .yy-swiper {
            width: 100%;
            margin: 0 0 0 10px;
            .yy-slide {
                text-align: left;
                .yy-img {
                    width: 100px;
                    height: 140px;
                }
                .yy-p1 {
                    width: 77px;
                    height: 14px;
                    font-size: 14px;
                    margin: 10px 0 6px 0;
                }
                .yy-p2 {
                    width: 60px;
                    height: 12px;
                    font-size: 12px;
                }
            }
        }
        .yy-32 {
            width: 87px;
            height: 14px;
            font-size: 14px;
            color: #fbc34a;
            margin: 15px auto;
        }
    }

    // 视频
    .con-video {
        width: 100%;
        .video {
            width: 36px;
            height: 18px;
            font-size: 18px;
            margin: 30px 20px 15px;
        }
        .video-swiper {
            width: 100%;
            margin: 0 0 0 10px;
            .video-slide {
                text-align: left;
                .video-img {
                    width: 200px;
                    height: 120px;
                }
                .video-p {
                    width: 216px;
                    height: 36px;
                    font-size: 12px;
                    line-height: 18px;
                    margin: 10px 0 6px 0;
                }
            }
        }
        .video-10 {
            width: 100px;
            height: 14px;
            font-size: 14px;
            color: #fbc34a;
            margin: 15px auto;
        }
    }
    // 票房
    .booking-office {
        margin: 20px;
        .title {
            width: 36px;
            height: 18px;
            font-size: 18px;
            margin: 30px 20px 15px 0;
        }
        .booking {
            display: flex;
            .booking-p {
                margin: 0 15px;
                .booking-p1 {
                    width: 44px;
                    height: 18px;
                    font-size: 18px;
                    // text-align: right;
                    margin: 0 15px;
                }
                .booking-p2 {
                    width: 84px;
                    height: 12px;
                    font-size: 12px;
                    text-align: left;
                    margin: 6px 0;
                }
            }
        }
        .booking-xq {
            width: 56px;
            height: 14px;
            font-size: 14px;
            color: #fbc34a;
            margin: 10px auto;
        }
    }
}

.footer-buy {
    width: 100%;
    width: 375px;
    height: 44px;
    background: linear-gradient(
        150deg,
        rgba(242, 91, 134, 1) 0%,
        rgba(241, 172, 94, 1) 100%
    );
    box-shadow: 0px 0px 4px 1px rgba(242, 109, 125, 0.18);
    border-radius: 6px;
    .footer-p {
        color: #fff;
        width: 73px;
        height: 40px;
        font-size: 18px;
        line-height: 40px;
        margin: 20px auto;
    }
}
</style>
