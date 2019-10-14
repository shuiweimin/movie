<template>
    <div class="movie-main">
        <BaseLayer>
            <template v-slot:default>
                <div class="content">
                    <div class="con content-1">
                        <router-link class="img one" :to="{name:'details'}">
                            <img src="@/assets/imgs/hot/hot1.png" />
                        </router-link>
                        <div class="bgc one">
                            <div class="des">
                                <div class="p1">CRACKS（2018）</div>
                                <div class="p2">
                                    <span>影火虫评分</span>
                                    <span class="pf">9.1</span>
                                </div>
                                <div class="p3">
                                    <p>导演：赞恩.阿尔.拉菲亚</p>
                                    <p>主演：赞恩.阿尔.拉菲亚</p>
                                </div>
                                <div class="p4">
                                    <span class="today">今日最热</span>
                                    <span class="week">一周最热</span>
                                </div>
                            </div>
                            <div class="buy">
                                <router-link class="buy-b" :to="{name:'shopping'}" tag='div'>购票</router-link>
                            </div>
                        </div>
                    </div>
                    <div class="con content-2">
                        <router-link class="img two" :to="{name:'details'}">
                            <img src="@/assets/imgs/hot/hot1.png" />
                        </router-link>
                        <div class="bgc">
                            <div class="des">
                                <div class="p1">大鱼海棠</div>
                                <div class="p2">
                                    <span class="rs">16.4万</span>
                                    <span>人想看</span>
                                </div>
                                <div class="p3">
                                    <p>导演：梁旋 季冠霖</p>
                                    <p>105分钟/动画/奇幻</p>
                                </div>
                            </div>
                            <div class="buy">
                                <router-link class="buy-m" :to="{name:'movieSoon'}" tag='div'>预售</router-link>
                            </div>
                        </div>
                    </div>
                    <div class="con content-3">
                        <router-link class="img three" :to="{name:'details'}">
                            <img src="@/assets/imgs/hot/hot1.png" />
                        </router-link>

                        <div class="bgc">
                            <div class="des">
                                <div class="p1">现在去见你</div>
                                <div class="p2">
                                    <span class="rs">15.3万</span>
                                    <span>人想看</span>
                                </div>
                                <div class="p3">
                                    <p>导演：李俊赫</p>
                                    <p>主演：苏志燮 孙艺珍</p>
                                </div>
                                <div class="p4">
                                    <p class="best">口碑最佳</p>
                                </div>
                            </div>
                            <div class="buy">
                                <router-link class="buy-b" :to="{name:'shopping'}" tag='div'>购票</router-link>
                            </div>
                        </div>
                    </div>
                    <div class="con content-4">
                        <router-link class="img four" :to="{name:'details'}">
                            <img src="@/assets/imgs/hot/hot1.png" />
                        </router-link>

                        <div class="bgc">
                            <div class="des">
                                <div class="p1">RETURN ON THE JEDI</div>
                                <div class="p2">
                                    <span class="rs">15.3万</span>
                                    <span>人想看</span>
                                </div>
                                <div class="p3">
                                    <p>导演：盖尔.曼库索</p>
                                    <p>主演：盖尔.曼库索</p>
                                </div>
                            </div>
                            <div class="buy">
                                <router-link class="buy-b" :to="{name:'shopping'}" tag='div'>购票</router-link>
                            </div>
                        </div>
                    </div>
                    <div class="con content-5">
                        <router-link class="img five" :to="{name:'details'}">
                            <img src="@/assets/imgs/hot/hot1.png" />
                        </router-link>

                        <div class="bgc">
                            <div class="des">
                                <div class="p1">RETURN ON THE JEDI</div>
                                <div class="p2">
                                    <span>影火虫评分</span>
                                    <span class="pf">9.1</span>
                                </div>
                                <div class="p3">
                                    <p>导演：盖尔.曼库索</p>
                                    <p>主演：盖尔.曼库索</p>
                                </div>
                            </div>
                            <div class="buy">
                                <router-link class="buy-b" :to="{name:'shopping'}" tag='div'>购票</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </BaseLayer>
    </div>
</template>

<script>
import BaseLayer from "@/components/BaseLayer";
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
export default {
    name: "Movie",
    components: {
        BaseLayer
    },
    data() {
        return {};
    },

    methods: {},
    computed: {
        ...mapState({
            nowCity: state => state.city.nowCity
        })
    },
};
</script>
<style lang='scss' scoped>
@import "@/assets/css/common/common.scss";
.movie-main {
    height: 100%;
    // header
    ::v-deep .scroll-wapper {
        margin-top: 0;
    }

    // .header {
    //     display: flex;
    //     align-items: center;
    //     width: 375px;
    //     height: 44px;
    //     font-size: 14px;
    //     line-height: 14px;
    //     .address {
    //         width: 28px;
    //         height: 14px;
    //         color: #dfdfdf;
    //         margin: auto 20px;
    //         text-decoration: none;
    //     }
    //     .movie-hot {
    //         display: flex;
    //         align-items: center;
    //         width: 164px;
    //         height: 25px;
    //         margin: auto 50px;

    //         border: 1px solid;
    //         border-radius: 6px;
    //         border-image: linear-gradient(314deg, #f19e65, #f2697f) 1 1;
    //         .hot {
    //             width: 50%;
    //             height: 100%;
    //             line-height: 25px;
    //             color: #f5f5f5;
    //             background-image: linear-gradient(314deg, #f19e65, #f2697f);
    //         }
    //         .hot-m {
    //             width: 50%;
    //             height: 14px;
    //             color: #969393;
    //         }
    //     }
    // }

    // content
    .content {
        width: 335px;
        color: #fff;
        .con {
            display: flex;
            align-items: center;
            width: 100%;
            margin: 4px 13px;
            .img {
                display: block;
                width: 112px;
                height: 170px;
                line-height: 170px;
                &.one {
                    background: url("../../../assets/imgs/hot/hot-1.png") no-repeat center;
                    margin: 8px 0 0;
                }
                &.two{
                    background: url("../../../assets/imgs/hot/hot-2.png") no-repeat center;
                }
                &.three{
                    background: url("../../../assets/imgs/hot/hot-3.png") no-repeat center;
                }
                &.four{
                    background: url("../../../assets/imgs/hot/hot-4.png") no-repeat center;
                }
                &.five{
                    background: url("../../../assets/imgs/hot/hot-5.png") no-repeat center;
                }
            }
            .bgc {
                display: flex;
                width: 215px;
                height: 146px;
                background-color: #33363d;
                transform: translateY(4px);
                padding: 0 10px;
                text-align: left;
                &.one {
                    transform: translateY(8px);
                }
                .des {
                    width: 150px;
                    height: 100%;
                    .p1 {
                        width: 172px;
                        height: 16px;
                        font-size: 16px;
                        margin: 15px 0 12px;
                    }
                    .p2 {
                        width: 100px;
                        height: 14px;
                        font-size: 14px;
                        .pf {
                            color: #fbc34a;
                            padding: 0 4px;
                            font-size: 15px;
                        }
                        .rs {
                            font-size: 15px;
                            color: #fbc34a;
                            padding: 0 4px 0 0;
                        }
                    }
                    .p3 {
                        width: 127px;
                        height: 38px;
                        font-size: 12px;
                        line-height: 19px;
                        margin: 8px 0 6px;
                    }
                    .p4 {
                        width: 120px;
                        height: 20px;
                        font-size: 12px;
                        line-height: 20px;
                        .today {
                            display: inline-block;
                            color: #fbc34a;
                            border-radius: 3px;
                            border: 1px solid #fbc34a;
                        }
                        .week {
                            display: inline-block;
                            color: #f26c7e;
                            border: 1px solid #f26c7e;
                            border-radius: 3px;
                            margin: 0 5px;
                        }
                        .best {
                            display: inline-block;
                            color: #3c4cac;
                            border-radius: 3px;
                            border: 1px solid rgba(60, 76, 172, 1);
                        }
                    }
                }
                .buy {
                    width: 54px;
                    height: 146px;
                    font-size: 12px;
                    .buy-b {
                        width: 100%;
                        height: 25px;
                        line-height: 25px;
                        text-align: center;
                        margin: 70px 0;
                        background: linear-gradient(
                            150deg,
                            rgba(242, 91, 134, 1) 0%,
                            rgba(241, 172, 94, 1) 100%
                        );
                        box-shadow: 0px 0px 4px 1px rgba(242, 109, 125, 0.18);
                        border-radius: 6px;
                    }
                    .buy-m {
                        width: 100%;
                        height: 25px;
                        line-height: 25px;
                        text-align: center;
                        margin: 70px 0;
                        background: linear-gradient(
                            150deg,
                            rgba(98, 75, 163, 1) 0%,
                            rgba(203, 68, 152, 1) 100%
                        );
                        box-shadow: 0px 0px 4px 1px rgba(242, 109, 125, 0.18);
                        border-radius: 6px;
                    }
                }
            }
        }
    }
}
</style>
