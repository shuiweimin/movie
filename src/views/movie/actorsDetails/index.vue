<template>
    <div class="actorsDetails">
        <BaseLayer>
            <template v-slot:header>
                <div class="header">
                    <img src="@/assets/imgs/icons/icon-arr-back.png" alt="" @click="$router.go(-1)">
                    <!-- <router-link :to="{name:'cinemaRating'}" style="color:#fff">跳到电影评分页面</router-link> -->
                </div>
            </template>
            <template v-slot:default>
                <!-- 简介 -->
                <div class="describe">
                    <!-- 头部 -->
                    <div class="content">
                        <!-- 头像 -->
                        <div class="avatar">
                            <img src="@/assets/imgs/actorsDetails/avatar.png" alt="">
                        </div>
                        <p class="CnName">凯拉·奈特莉</p>
                        <p class="EnName">Satomi lshihara</p>
                        <div class="follow">关注</div>
                        <p>138585人关注</p>
                        <!-- 简介 -->
                        <div class="intro">
                            <div class="title">简介</div>
                            <div class="details">
                                <p class="text">2002年，15岁的石原里美参加了HORIPRO公司
                                    第27回艺人新人 选拔，获得最佳新人“完美少女”奖 。
                                    2003年2月15日，参演的爱 情电影《小岛之恋》上映；
                                    4月5日，参演的喜剧电影《我的爷爷 》上映，在片中饰
                                    演五代家的独生女五代珠子，她则凭借该片获 得了第2
                                    7届日本…
                                    <a class="showMore" href="#">
                                        查看更多
                                        <img src="@/assets/imgs/actorsDetails/arr-right.png" alt="">
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="works">
                        个人作品
                    </div>
                    <!-- 个人作品 -->
                    <div class="personalWorks">
                        <div class="details">
                            <div class="imgs">
                                <img class="img" src="@/assets/imgs/movie/movie-info1.png" alt="">
                                <div class="info">
                                    <p class="name">忍者之国</p>
                                    <div class="rank">
                                        <p>评分</p>
                                        <p class="grade">9.0</p>
                                    </div>
                                    <p>演员 大野智</p>
                                    <p class="time">上映时间 2017年7月1日</p>
                                </div>
                            </div>
                            <div class="imgs">
                                <img class="img" src="@/assets/imgs/movie/movie-info2.png" alt="">
                                <div class="info">
                                    <p class="name">新•哥斯拉</p>
                                    <div class="rank">
                                        <p>评分</p>
                                        <p class="grade">9.0</p>
                                    </div>
                                    <p>演员 长谷川博己，竹…</p>
                                    <p class="time">上映时间 2016年7月29日</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 相册 -->
                    <div class="title">相册</div>
                    <div class="album">
                        <div class="imgs">
                            <img class="img1" src="@/assets/imgs/actorsDetails/album1.png" alt="">
                            <img class="img2" src="@/assets/imgs/actorsDetails/album2.png" alt="">
                            <img class="img3" src="@/assets/imgs/actorsDetails/album3.png" alt="">
                            <img class="img4" src="@/assets/imgs/actorsDetails/album4.png" alt="">
                        </div>
                    </div>
                    <div></div>
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
export default {
    name: 'actorsDetails',
    components: {
        BaseLayer
    },
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<style lang='scss' scoped>
.actorsDetails {
    height: 100%;
    // 头部
    ::v-deep .scroll-wapper {
        margin-top: 0;
        height: 667px;
    }
    ::v-deep .header-bar {
        background-color: rgba(0, 0, 0, 0);
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
    }
    //演员详情
    .describe {
        .content {
            width: 100%;
            height: 467px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: url("../../../assets/imgs/actorsDetails/bg.png") no-repeat;
            z-index: 9999;
            // 头像
            .avatar {
                width: 85px;
                height: 85px;
                margin: 51px 0 12px 0;
                border-radius: 50%;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            p {
                color: #86888c;
                font-size: 12px;
            }
            .EnName {
                margin: 7px 0 10px 0;
            }
            .CnName {
                color: #fff;
                font-size: 20px;
            }
            .follow {
                width: 48px;
                height: 24px;
                color: #fff;
                font-size: 14px;
                line-height: 24px;
                margin-bottom: 11px;
                border-radius: 11px;
                background: linear-gradient(
                    150deg,
                    rgba(242, 91, 134, 1) 0%,
                    rgba(241, 172, 94, 1) 100%
                );
            }
            //简介
            .intro {
                .title {
                    text-align: left;
                    color: #fff;
                    margin: 27px 0 10px 0;
                    font-size: 16px;
                }
                .details {
                    width: 341px;
                    height: 90px;

                    .text {
                        font-size: 12px;
                        text-align: left;
                        line-height: 18px;
                        .showMore {
                            vertical-align: middle;
                            font-size: 14px;
                            color: #fbc34a;
                            img {
                                vertical-align: -18%;
                            }
                        }
                    }
                }
            }
        }
        // 作品
        .works {
            margin: -16px 0 0 20px;
            text-align: left;
            font-size: 16px;
            color: #fff;
        }
        //个人作品
        .personalWorks {
            .details {
                overflow: hidden;
                width: 100%;
                height: 290px;
                .imgs {
                    display: flex;
                    border-radius: 6px;
                    margin: 11px 0 0 20px;
                    .img {
                        width: 100px;
                        height: 140px;
                        border-radius: 6px;
                    }
                    .info {
                        text-align: left;
                        margin-left: 14px;
                        color: #86888c;
                        .name {
                            font-size: 16px;
                            margin: 18px 0 18px 0;
                            color: #fff;
                        }
                        .rank {
                            display: flex;
                            margin-bottom: 16px;
                            .grade {
                                margin-left: 7px;
                                color: #fbc34a;
                            }
                        }
                        .time {
                            margin-top: 16px;
                        }
                    }
                }
            }
        }
        // 相册
        .title {
            margin: 30px 0 0 20px;
            text-align: left;
            font-size: 16px;
            color: #fff;
        }
        .album {
            height: 250px;
            width: 335px;
            margin: 10px 0 0 20px;
            .imgs {
                position: relative;
                display: flex;
                flex-wrap: wrap;

                .img1 {
                    margin-right: 5px;
                    width: 192px;
                    height: 100px;
                }
                .img3 {
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 94px;
                    height: 122px;
                }
                .img4 {
                    position: absolute;
                    left: 99px;
                    bottom: 0;
                    width: 94px;
                    height: 122px;
                }
                .img2 {
                    width: 138px;
                    height: 229px;
                }
            }
        }
    }
}
</style>