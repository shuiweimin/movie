import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/index.vue'


Vue.use(Router)

export default new Router({
routes: [{
        path: '/home',
        name: 'home',
        component: Home,
        meta: {
            footShow: true
        },
        children: [{
                path: 'city',
                name: 'city',
                component: () =>
                    import ( /* webpackChunkName: "City" */ '@/views/home/city/index.vue'),
                meta: {
                    footShow: false
                }
            },

            {
                path: 'sign',   
                name: 'sign',   
                component: () =>
                    import ( /* webpackChunkName: "Sign" */ '@/views/home/sign/index.vue'),
                meta: {
                    footShow: false
                }
            }
        ]
    },

    {
        path: 'search',
        name: 'search',
        component: () =>
            import ( /* webpackChunkName: "Search" */ '@/views/home/search/index.vue'),
        meta: {
            footShow: false
        }
    },
    {
        path: '/cinema',
        name: 'cinema',
        meta: {
            footShow: true
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "Cinema" */ '@/views/cinema/index.vue'),
        meta: {
            footShow: true
        }
    },

    /*-----------------------消息中心-----------------------*/
    {
        path: '/information',
        name: 'information',
        component: () =>
            import ( /* webpackChunkName: "information" */ '@/views/main/information/index.vue'),
        meta: {
            title: "消息中心",
            footShow: false
        },
        children: [

        ]
    },
    // cinemadetail
    {
        path: '/cinemadetail',
        name: 'cinemadetail',
        component: () =>
            import ( /* webpackChunkName: "Map" */ '@/views/cinema/cinemadetail/index.vue'),
        meta: {
            footShow: false
        }
    },
    {
        path: '/choose',
        name: 'choose',
        component: () =>
            import ( /* webpackChunkName: "Map" */ '@/views/cinema/choose/index.vue'),
        meta: {
            footShow: false
        }
    },
    {
        path: '/confirm',
        name: 'confirm',
        component: () =>
            import ( /* webpackChunkName: "Map" */ '@/views/cinema/confirm/index.vue'),
        meta: {
            footShow: false
        }
    },
    {
        path: 'private',
        name: 'private',
        component: () =>
            import ( /* webpackChunkName: "private" */ '@/views/main/information/private/index.vue')
    },
    //  -----------------------影城卡---------------
    {

        path: '/vipcard',
        name: 'vipcard',
        component: () =>
            import ( /* webpackChunkName: "private" */ '@/views/main/vipcard/index.vue')

    },
    //  --------------暂无数据----------------------
    {
        path: '/nodata',
        name: 'nodata',
        component: () =>
            import ( /* webpackChunkName: "nodata" */ '@/views/nodata/index.vue')
    },
    // --------------------登录-------------------
    {
        path: '/logins',
        name: 'logins',
        component: () =>
            import ( /* webpackChunkName: "logins" */ '@/views/logins/index.vue')
    },
    // --------------------购票-------------------
    {
        path: '/shopping',
        name: 'shopping',
        component: () =>
            import ( /* webpackChunkName: "shopping" */ '@/views/shopping/index.vue')
    },



    //地图页面路由 注意路径
    {
        path: '/map',
        name: 'map',
        component: () =>
            import ( /* webpackChunkName: "Map" */ '@/views/cinema/map/index.vue'),
        meta: {
            footShow: false
        }
    },

    {
        path: '/ticket',
        name: 'ticket',
        meta: {
            footShow: true
        },
        component: () =>
            import ( /* webpackChunkName: "Ticket" */ '@/views/ticket/index.vue')

    },
    {
        path: '/movie',
        name: 'movie',
        redirect: '/movie/movieHot',
        meta: {
            footShow: true
        },
        component: () =>
            import ( /* webpackChunkName: "Movie" */ '@/views/movie/index.vue'),
        children: [{
                path: 'movieSoon',
                name: 'movieSoon',
                component: () =>
                    import ( /* webpackChunkName: "Movie" */ '@/views/movie/movieSoon/index.vue'),
                meta: {
                    footShow: true
                },
            },
            {
                path: 'movieHot',
                name: 'movieHot',
                component: () =>
                    import ( /* webpackChunkName: "Movie" */ '@/views/movie/movieHot/index.vue'),
                meta: {
                    footShow: true
                },
            }
        ]
    },
    {
        path: '/movieSoon',
        name: 'movieSoon',
        meta: {
            footShow: true
        },
        component: () =>
            import ( /* webpackChunkName: "Movie" */ '@/views/movie/movieSoon/index.vue')

    },
    {
        path: '/details',
        name: 'details',
        meta: {
            footShow: false
        },
        component: () =>
            import ( /* webpackChunkName: "details" */ '@/views/movie/details/index.vue')
    },
    {
        path: '/movieRating',
        name: 'movieRating',
        meta: {
            footShow: false
        },
        component: () =>
            import ( /* webpackChunkName: "movieRating" */ '@/views/movie/movieRating/index.vue')
    },
    {
        path: '/boxOffice',
        name: 'boxOffice',
        meta: {
            footShow: false
        },
        component: () =>
            import ( /* webpackChunkName: "boxOffice" */ '@/views/movie/boxOffice/index.vue')
    },
    {
        path: '/actorsDetails',
        name: 'actorsDetails',
        meta: {
            footShow: false
        },
        component: () =>
            import ( /* webpackChunkName: "actorsDetails" */ '@/views/movie/actorsDetails/index.vue')
    },
    {
        path: '/comment',
        name: 'comment',
        meta: {
            footShow: false
        },
        component: () =>
            import ( /* webpackChunkName: "city" */ '@/views/movie/comment/index.vue')
    },
    {
        path: '/main',
        name: 'main',
        meta: {
            footShow: true
        },
        component: () =>
            import ( /* webpackChunkName: "Main" */ '@/views/main/index.vue')

    },
    {
        path: '/setUp',
        name: 'setUp',
        component: () =>
            import ( /* webpackChunkName: "SetUp" */ '@/views/main/setUp/index.vue'),
        meta: {
            footerShow: false
        }
    },
    {
        path: '/userInformation',
        name: 'userInformation',
        component: () =>
            import ( /* webpackChunkName: "UserInformation" */ '@/views/main/userInformation/index.vue'),
        meta: {
            footerShow: false
        }
    },
    {
        path: '/main/mytackets',
        name: 'mytackets',
        meta: {
            footShow: false
        },
        component: () =>
            import ( /* webpackChunkName: "Mytackets" */ '@/views/main/mytackets/index.vue')
    },
    {
        path: '/main/coupon',
        name: 'coupon',
        meta: {
            footShow: false
        },
        component: () =>
            import ( /* webpackChunkName: "Coupon" */ '@/views/main/coupon/index.vue')
    },
    {
        path: '/main/myOrder',
        name: 'myOrder',
        component: () =>
            import ( /* webpackChunkName: "MyOrder" */ '@/views/main/myOrder/index.vue'),
        meta: {
            footShow: false
        },
        redirect: "/main/myOrder/all",
        children: [{
                path: 'all',
                name: 'all',
                component: () =>
                    import ( /* webpackChunkName: "All" */ '@/views/main/myOrder/all/index.vue')
            },
            {
                path: 'payment',
                name: 'payment',
                component: () =>
                    import ( /* webpackChunkName: "Payment" */ '@/views/main/myOrder/payment/index.vue')
            },
            {
                path: 'evaluate',
                name: 'evaluate',
                component: () =>
                    import ( /* webpackChunkName: "Evaluate" */ '@/views/main/myOrder/evaluate/index.vue')
            },
            {
                path: 'refund',
                name: 'refund',
                component: () =>
                    import ( /* webpackChunkName: "Refund" */ '@/views/main/myOrder/refund/index.vue')
            },
        ]
    },
    {
        path: '*',
        redirect: '/home'
    }

]
})