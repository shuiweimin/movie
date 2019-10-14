<template>
    <div class="comingSoon">
        <!-- 头部 -->
        <div class="header">
            <div class="header-c">
                <!-- 定位 -->
                <div class="position">
                    <router-link :to="{ name: 'city', path:`/home/city` }" tag="span">{{nowCity.name}}</router-link>
                </div>
                <!-- 下拉箭头 -->
                <div class="arr">
                    <img src="@/assets/imgs/icons/icon-arr.png" alt="">
                </div>
                <!-- 即将上映 -->
                <div class="mid">
                    <div class="borderRadius">
                        <router-link class="hot" :to="{ name:'movieHot'}" tag="span">正在热映</router-link>
                        <router-link class="soon" :to="{ name:'movieSoon'}" tag="span">即将上映</router-link>
                    </div>
                </div>
                <!-- 搜索 -->  
                <router-link class="search" :to="{name:'search'}" tag="div"><img src="@/assets/imgs/icons/icon-search.png" alt=""></router-link>
            </div>
        </div>
        <router-view></router-view>
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
.comingSoon {
    height: 100%;
    //头部
    ::v-deep .header-bar {
        height: 0;
    }
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
                width: 162px;
                height: 23px;
                line-height: 23px;
                font-size: 14px;
                box-sizing: border-box;
                margin: 0 69px 0 43px;
                padding: 1px;
                background: linear-gradient(314deg, #f19e65, #f2697f);
                border-radius: 6px 5px 5px 6px;
                //圆角
                .borderRadius {
                    display: flex;
                    justify-content: space-evenly;
                    width: 100%;
                    height: 100%;
                    color: $baseColor;
                    border-radius: 6px 5px 5px 6px;
                    background-color: #33363d;
                    & .router-link-active {
                        height: 100%;
                        border-radius: 4px 0 0 4px;
                        width: 50%;
                        background: linear-gradient(314deg, #f19e65, #f2697f);
                    }
                    //正在热映
                    .hot {
                        text-align: center;
                        // margin-top: 30px;
                        width: 50%;
                        height: 100%;
                    }
                    // 即将上映
                    .soon {
                        width: 50%;
                        height: 100%;
                        border-radius: 0 4px 4px 0;
                        & .router-link-active {
                            background: linear-gradient(
                                314deg,
                                #f19e65,
                                #f2697f
                            );
                        }
                    }
                }
            }
        }
    }

}
</style>
