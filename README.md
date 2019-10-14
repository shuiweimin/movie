# 基本配置
## 原型图
+ 参考关系 https://lanhuapp.com/url/U7ZqW  密码:xGAE  无法查看 1标注,但可以查看关系
+ 参考功能  http://59.110.138.169/site/movie/index.html#/home
+ 参考标注  https://lanhuapp.com/url/IaMrj-TIE1f  没有关系图,但可以查看标注
  
## rem配置
+ 安装
  ```   
    1.  npm install postcss-pxtorem --save-dev  用于把页面的px=>rem
    2.  npm install lib-flexible --save   用于根据设备宽度计算html的font-size
    3.  postcss.config.js 添加插件
        "postcss-pxtorem": {
            "rootValue": 37.5, // 设计稿宽度的1/10,（JSON文件中不加注释，此行注释及下行注释均删除）
            "propList":["*"] // 需要做转化处理的属性，如`hight`、`width`、`margin`等，`*`表示全部
        }
    4. main.js 引入 lib-flexible
  ```
## 基本布局
+ BaseLayer
+ Header
+ Footer

## better-scroller
+ github仓库 https://github.com/ustbhuangyi/better-scroll/blob/master/README_zh-CN.md
+ vue使用better-scroll  https://zhuanlan.zhihu.com/p/27407024
+ better-scroll文档 https://better-scroll.github.io/docs/zh-CN/
  
## 地理定位


## swiper
+ https://github.com/surmon-china/vue-awesome-swiper
+ npm install vue-awesome-swiper --save



## 图片资源加载完毕

```javascript
     var loadingEl = document.querySelector('.loading');
        
        var imgs = ['http://bufantec.com/site/hunsha/static/img/banner1.jpg',
            'http://bufantec.com/site/hunsha/static/img/banner2.jpg',
            'http://bufantec.com/site/jingjie/static/img/banner.jpg'
        ];

        // setTimeout(function(){
        //     loadingEl.parentNode.removeChild(loadingEl);
        // },2000)
        //
        // 无法保证首屏内容 
        // window.onload = function(){
        //     loadingEl.parentNode.removeChild(loadingEl);
        // }
        // 如何保证特定资源的加载完毕后触发
        
        var count = 0 ; // 全局计数器
        for(var i = 0 ; i < imgs.length ; i ++){
            // 通过js创建 img对象(标签) 可以直接通过dom操作插入页面
            var img = new Image();
            // 如何保证图片资源不能被缓存? 只需修改url即可
            img.src = imgs[i]+'?ts='+new Date().getTime();
            // 监听img的onload方法  异步的  不确定哪张先加载完毕
            img.onload = function(){
                count ++ ;
                console.log(this.src+'  is done...');
                if(count == imgs.length){
                    done();
                }
            }
        }


        function done(){
            loadingEl.parentNode.removeChild(loadingEl);
        }


```


## better-scroll 高度不对的情况分析

+ 所有的图片资源尽量给定宽高(灵活把握)
+ 等图片资源完全加载完毕后重新计算
  + a) 监听图片加载完毕
  + b) 等api数据获取完毕
+ 重新调用bs的refesh()方法

```javascript
    setTimeout(()=>{
      //重新调用refresh
      this.$refs.scroll.$scroll.refresh();
    },2000)

```
